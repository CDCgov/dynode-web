# dynODE-web

## Model overview

This is a Susceptible-Exposed-Infectious-Removed (SEIR) compartmental ordinary differential equations (ODE) model, modified to account for public health interventions including medical countermeasures (vaccination and antivirals) and non-pharmaceutical interventions (testing, tracing, isolation, and quantine).

In a compartmental ODE model, individuals move through discrete disease states, with the time spent by individuals in each state exponentially distributed across individuals. Individuals are assumed to have a constant infectiousness while in the Infectious state. Individuals are not infectious at all while in the Susceptible, Exposed, and Removed states. Removed individuals cannot be re-infected.

### Infectiousness

An ODE SEIR model is an approximation of a reality in which:

- There is a delay, the _latent period_, between exposure and the onset of infectiousness. This delay varies from person to person. The population-wide average duration of this delay is a model parameter. The delays are distributed according to an exponential distribution around this mean.
- Each person, while infectious, contacts other people at a constant rate. The per-contact probability that a susceptible contacted person will contract infection (i.e., enter their latent period) is fixed during the _infectious period_. Each infectious person is equally infectious over their entire infectious period.
- The duration of the infectious period varies from person to person. The population-wide average duration of this period is a model parameter. The durations are distributed according to an exponential distribution around this mean.

#### Model inputs

The model takes as input the serial interval $S$ and mean duration of latent period $T_L$. It infers the mean infectious period $T_I$ according to:

$$
S = T_L + \tfrac{1}{2} T_I
$$

### Health outcomes

Some infections are symptomatic. Symptomatic infections are assumed to be equally infectious in the absence of mitigations. However, symptoms can trigger mitigations like isolation and antiviral usage that do affect onward transmission.

Hospitalization and death are included in the model, but only as counting functions. Upon infection, some proportion of people will go on to these outcomes at some later time, depending on model parameters and other mitigations. The model makes the simplifying assumption that hospitalization and death have no impact on disease dynamics.

### Mitigations

#### Vaccination

On a certain day, vaccination begins. If the vaccine is single-dose, then vaccines are administered at the maximum daily rate until they are exhausted. If the vaccine is two-dose, then first doses are administered at a constant rate such that, when both first and second doses are being administered, the total administration rate is at the maximum. Vaccines are assumed to be optimally pre-allocated: at the time of the first dose, if that person will receive a second dose, a second dose is ensured available at the appropriate time. No doses are wasted.

After vaccination, there is a delay from dose to protection. If that person is infected during that delay, they never have any protection from vaccination. If they complete that delay before being infected, they have three kinds of protection from the vaccine:

- potential protection against being infected,
- given infection, potential protection against onward transmission, and
- given infection, potential protection against symptoms.

Vaccines are assumed to provide no _additional_ protection against hospitalization or death; vaccinated people are less likely to be hospitalized or die because they are less likely to progress to symptomatic infection, but the probability of hospitalization or death given symptomatic infection is assumed the same among vaccinated and unvaccinated individuals.

If the vaccine is two-dose, then upon completing the second dose-to-protection delay, if they have not been infected, a person's protection increases.

#### Antivirals

People with symptomatic infections can receive outpatient antivirals. Antivirals prevent transmission with effectiveness $\mathrm{AVE}_I$. Rather than separately simulating treated and untreated individuals, the model assumes that antivirals reduce overall disease transmission by a constant factor equal to: the fraction symptomatic, times the proportion of symptomatic infections that receive (and adhere to) antivirals, times $\mathrm{AVE}_I$. Thus, $\mathrm{AVE}_I$ approximately accounts for delays in treatment. For example, if all individuals received antivirals halfway through their infectious period, then $\mathrm{AVE}_I$ will almost certainly be less than 50%.

In the model, antivirals are not used prophylatically.

Additionally, antivirals prevent progression from symptomatic infection to hospitalization with effectiveness $\mathrm{AVE}_H$, and then also prevent progression from hospitalization to death with effectiveness $\mathrm{AVE}_D$. These effects are synergistic.

#### Community mitigations

The model assumes that an intervention takes effect on some date, immediately changing transmission by some constant factor, and then ends, immediately returning transmission to its pre-intervention status. This factor can be different for different pairs of populations (e.g., school closures may substantially reduce child-child contacts while increasing child-adult contacts).

#### Testing, tracing, isolation, and quarantine (TTIQ)

Infectious individuals (who are identified via some type of surveillance or testing) may _isolate_, effectively averting part (or all) of their remaining infectious period. _Contact tracing_ can then identify exposed individuals, who may _quarantine_, averting part or all of their infectious period.

Testing/isolation is assumed to reduce the mean infectious period by some constant factor. Contact tracing and quarantine are assumed to eliminate onward transmission from some proportion of otherwise infectious individuals.

## Detailed model description

The population is divided into (age) groups $i$.

### States

The key dynamical compartments are:

- $\mathrm{SU}_i$: unvaccinated susceptible individuals
- $\mathrm{EU}_i$: exposed (i.e., latent) individuals who were not vaccinated or had not completed the dose-to-protection delay at the time of exposure
- $\mathrm{IU}_i$: infectious individuals who were not vaccinated, etc.
- $\mathrm{RU}_i$: removed individuals who were not vaccinated, etc.
- $\mathrm{SV}_i$: vaccinated susceptible individuals
- $\mathrm{EV}_i$: exposed individuals who were vaccinated and had completed their dose-to-protection delay at the time of exposure
- $\mathrm{IV}_i$: infectious exposed individuals who were vaccinated, etc.
- $\mathrm{RV}_i$: removed exposed individuals who were vaccinated, etc.
- $\mathrm{S2V}_i$: susceptible individuals who have received 2 vaccine doses and completed their second dose-to-protection delay before exposure
- $\mathrm{E2V}_i$, $\mathrm{I2V}_i$, $\mathrm{R2V}_i$: as above

There are other compartments, that reflect real epidemiological processes, that do not affect transmission:

- $Y^\mathrm{cum}$: cumulative number of symptomatic infections
- $H^\mathrm{pre}$: current number of infected individuals who will become hospitalized
- $H^\mathrm{cum}$: cumulative number of hospitalizations (i.e., admissions)
- $D^\mathrm{pre}$: current number of infected individuals who will die
- $D^\mathrm{cum}$: cumulative number of deaths

These compartments currently represent the proportion of the total population $N$ that is in each group and disease state.

### Parameters

- Model initialization
    - $N$: total population size
    - $N_i$: size of each population (so that $N_i/N$ is the proportion of the population in group $i$)
    - $\mathrm{IU}_\bullet(0)$: number of people initially infected, assumed distributed proportionally across groups, i.e., $\mathrm{IU}_i(0) = (N_i / N) \times \mathrm{IU}_\bullet(0)$
    - $\mathrm{RU}_\bullet(0)$: number of people initially immune, assumed distributed proportionally across groups
- Transmission
    - $R_0$: basic reproduction number
    - Derive: $\beta = R_0 / T_I$ (note that this is a population-wide, average scalar)
    - $C_{ij}$: contact matrix, normalized so that dominant eigenvector is 1
- Times & delays (see [infectiousness](#infectiousness) above )
    - $T_E$: mean duration of latent period
    - $T_I$: mean duration of infectious period
    - $T_H^\mathrm{pre}$: mean delay between infection (i.e., exposure) and hospitalization, among those who are hospitalized
    - $T_D^\mathrm{pre}$: mean delay between infection (i.e., exposure) and death, among those who die
- Vaccination
    - $\dot{V}_\mathrm{max}$: maximum vaccination rate
    - $V_\mathrm{tot}$: total number of vaccines available
    - $t_V$: start of (first dose) vaccine administration
    - $\Delta t_{V2}$: delay from $t_V$ before beginning administration of second doses
    - $p_{V2}$: fraction of all vaccinees who receive 2 doses
    - Derive: $\dot{V}_1(t)$: time-varying first dose administration rate (number of people per time)
    - Derive: $\dot{V}_2(t)$
- Vaccine effectiveness
    - $\tau_\mathrm{ramp}$: dose-to-protection delay
    - $\mathrm{VE}_S$: effectiveness for susceptibility (i.e., against being infected)
    - $\mathrm{VE}_I$: effectiveness for onward transmission given infected
    - $\mathrm{VE}_{P,Y|I}$: effectiveness for symptoms given infection.
        - At this time, vaccines are assumed to have no _additional_ protection against hospitalization and death. In future iterations, vaccines might provide further protection against hospitalization given symptomatic $\mathrm{VE}_{P,H|Y}$, or protection against death given hospitalization $\mathrm{VE}_{P,D|H}$.
    - $\mathrm{VE}_{2S}$, etc.: effectiveness of two doses (N.B.: this is not an incremental quantity; we expect $\mathrm{VE}_{2S} \geq \mathrm{VE}_S$)
- Antiviral effectiveness
    - $\mathrm{AVE}_I$: antiviral effectiveness for onward transmission given
      infected.
        - Note that this is the _effectiveness_ and incorporates the interaction between the delay from exposure to receiving antivirals and the generation time distribution.
    - $\mathrm{AVE}_H$: effectiveness for progression to hospitalization given symptomatic infection
    - $\mathrm{AVE}_D$: effectiveness for progression to death given hospitalization
        - All fatalities are assumed to occur following hospitalization, so the protection against death given symptomatic infection is the combination of these two protections
    - Note that outpatient and inpatient antivirals are considered sufficiently different that individuals can receive both and they have independent effects.
    - In the model, antivirals are not given before exposure, so $\mathrm{AVE}_S$ is undefined.
- Antiviral usage
    - $A_\mathrm{op}$: proportion of symptomatic but not (yet) hospitalized people who receive antivirals. This probability is a combination of seeking care, being diagnosed, getting an antiviral prescribed, and adhering to the regimen. ("op" is for "outpatient.)
    - $A_\mathrm{ip}$: proportion of hospitalized ("ip" is for "inpatient") people who receive antivirals
- Health outcomes
    - $\mathrm{FS}_i$: fraction symptomatic, i.e., proportion of infections that are symptomatic
        - Symptomatic and asymptomatic cases are assumed otherwise equal (e.g., equally infectious) so that this fraction does not affect transmission (except via mitigations that depend on symptoms)
    - $\mathrm{IHR}_i$: proportion of infections that result in hospitalization
    - $\mathrm{IFR}_i$: proportion of infections that result in death ("F" is for "fatality")

### Model initialization

- $\mathrm{RU}_i(0) = \mathrm{RU}_\bullet(0) \times (N_i / N)$
- $\mathrm{IU}_i(0) = \mathrm{IU}_\bullet(0) \times (N_i / N)$, with the caveat that, while $\mathrm{RU}_\bullet(0) + \mathrm{IU}_\bullet(0) > N$ is strictly speaking a mathematical impossibility, the current implementation will prefer immunity to infection (e.g., if $\mathrm{RU}_\bullet(0)/N$ is set to 100%, then there will be zero infections at all times)
- $\mathrm{SU}_i(0) = N_i - \mathrm{IU}_i(0) - \mathrm{RU}_i(0)$
- All Exposed and Vaccinated compartments are initialized at zero

### Equations

Let $f(t, A, B)$ be the flux from compartment $A$ to $B$ at time $t$.

#### Vaccination

Assume that first dose vaccination begins at some rate, continues at that rate, then stops. Second dose vaccinations occur in a similar block, delayed in time. Rates of first and second dose administration are such that, if the two vaccination blocks overlapped, they would hit the maximum rate.

First derive the duration $T = \dot{V}_\mathrm{max} / V_\mathrm{tot}$ of each vaccination block.

```math
\dot{V}_1(t) = \begin{cases}
\frac{\dot{V}_\mathrm{max}}{1 + p_{V2}} & t_V \leq t < t_V + T \\
0 & \text{otherwise}
\end{cases}
```

The second-dose rate is:

```math
\dot{V}_2(t) = \begin{cases}
\frac{p_{V2}}{1 + p_{V2}} \dot{V}_\mathrm{max} & t_V + \Delta t_{V2}
\leq t < t_V + \Delta t_{V2} + T \\
0 & \text{otherwise}
\end{cases}
```

The flux into the vaccine-protected compartments are:

```math
\begin{align*}
f(t, \mathrm{SU}_i, \mathrm{SV}_i(t)) &= \frac{\mathrm{SU}}{\mathrm{SU}(t) + \mathrm{EU}(t) + \mathrm{IU}(t) + \mathrm{RU}(t)} \frac{N_i}{N} \dot{V}_1(t - \tau_\mathrm{ramp}) \\
f(t, \mathrm{SV}_i, \mathrm{S2V}_i(t)) &= \frac{\mathrm{SV}(t)}{\mathrm{SV}(t) + \mathrm{EV}(t) + \mathrm{IV}(t) + \mathrm{RV}(t)} \frac{N_i}{N} \dot{V}_2(t - \tau_\mathrm{ramp})
\end{align*}
```

Vaccines only provide protection if the dose-to-protection delay completes before exposure. Thus, individuals keep their vaccine protection status (U, V, or 2V) as they transition from $S$ to $E$, $I$, and $R$.

#### Transmission

The effective number of infectious people in group $j$ (`i_effective`), accounting for the effects of vaccination and therapeutics on reducing transmission, is:

```math
I^\mathrm{eff}_j(t) = \mathrm{IU}_j(t) \times (1 - \mathrm{FS}_j A_\mathrm{op} \mathrm{AVE}_I)
  + \mathrm{IV}_j(t) \times (1 - \mathrm{VE}_I) \left[ 1 - \mathrm{FS}_j (1 - \mathrm{VE}_P) A_\mathrm{op} \mathrm{AVE}_I \right]
```

The force of infection on group $i$ (`infection_rate`, modulo a factor of the population fractions) is:

```math
\phi_i(t) = \frac{\beta}{N} \sum_j C_{ij} I^\mathrm{eff}_j(t)
```

Note that $\beta$ is divided by $N$ to convert from numbers of people (in terms of which $R_0$ is defined) to proportions,

So that the fluxes from susceptible to exposed are:

```math
\begin{align*}
f(t, \mathrm{SU_i, \mathrm{EU}_i}) &= \phi_i \frac{\mathrm{SU}_i(t)}{N_i/N} \\
f(t, \mathrm{SV_i, \mathrm{EV}_i}) &= \phi_i (1 - \mathrm{VE}_S) \frac{\mathrm{SV}_i(t)}{N_i/N}
\end{align*}
```

#### Latency and infectiousness

```math
\begin{align*}
f(t, \mathrm{EU}_i, \mathrm{IU}_i) &= \mathrm{EU}_i(t) \times \frac{1}{T_E} \\
f(t, \mathrm{IU}_i, \mathrm{RU}_i) &= \mathrm{IU}_i(t) \times \frac{1}{T_I} \\
\end{align*}
```

and similarly for the vaccinated compartments.

#### Severity

The rate of new infections is:

```math
\dot{I}^\mathrm{cum}_i(t) = f(t, \mathrm{EU}_i, \mathrm{IU}_i) + f(t, \mathrm{EV}_i, \mathrm{IV}_i)
```

The rate of new infections that are not protected by vaccination against progression to symptoms is:

```math
\dot{X}_i(t) = f(t, \mathrm{EU}_i, \mathrm{IU}_i) + (1 - \mathrm{VE}_P) f(t, \mathrm{EV}_i, \mathrm{IV}_i)
```

The numbers of health outcomes (symptomatic infections, hospitalizations, and deaths) are:

```math
\begin{align*}
\dot{Y}^\mathrm{cum}_i(t) &= \mathrm{FS}_i \times \dot{X}_i(t) \\
\dot{H}^\mathrm{pre}_i(t) &= \mathrm{IHR}_i \times (1 - \mathrm{FS}_i A_\mathrm{op} \mathrm{AVE}_H) \times \dot{X}_i(t) \\
\dot{H}^\mathrm{cum}_i(t) &= \dot{H}^\mathrm{pre}(t) \times \frac{1}{T_H^\mathrm{pre}} \\
\dot{D}^\mathrm{pre}_i(t) &= \mathrm{IFR}_i \times (1 - A_\mathrm{ip} \mathrm{AVE}_H) \times (1 - \mathrm{FS}_i A_\mathrm{op} \mathrm{AVE}_D) \times \dot{X}_i(t) \\
\dot{D}^\mathrm{cum}_i(t) &= \dot{H}^\mathrm{pre}(t) \times \frac{1}{T_D^\mathrm{pre}}
\end{align*}
```

## Mitigations

### Community mitigations

Define the parameters:

- $t_\mathrm{start}$: time that the mitigation starts
- $\Delta t_\mathrm{duration}$: duration of the mitigation
- $\mathrm{Eff}$: effectivness of the mitigation (i.e., risk ratio in contact rate), assumed constant over the duration and equal for all age groups

During the period from $t_\mathrm{start}$ to $t_\mathrm{start} + \Delta t_\mathrm{duration}$, adjust the contact matrix entries from $C_{ij}$ to $(1 - \mathrm{Eff}) \times C_{ij}$.

### Surveillance and detection

Define the parameters:

- $p_{\mathrm{test}|Y}$: proportion of newly infectious, symptomatic people who are tested (e.g., who seek and receive a test), assumed constant
- test sensitivity
- probability a positive test is forwarded to public health

Then:

```math
\begin{align*}
\mathrm{CumTested}(t) &= p_{\mathrm{demand}|Y} \sum_i Y^\mathrm{cum}_i \\
\mathrm{CumProbDetect1}(t) &= 1 - (1 - [\text{test sensitivity}] \times \mathbb{P}[\text{forwarded} | \text{positive}])^{\mathrm{CumTested(t)}} \\
\mathbb{E}[\mathrm{CumFracInfectionsIdentified(t)}] &= [\text{test sensitivity}] \times \mathbb{P}[\text{forwarded} | \text{positive}] \times \frac{\mathrm{CumTested}(t)}{\sum_i I_i^\mathrm{cum}(t)}
\end{align*}
```

We report the times at which the cumulative detection probability reaches certain thresholds (e.g., 25%, 50%, and 75%).

### Vaccination and antivirals

See the base model description above.

### Test, trace, isolation, and quarantine (TTIQ)

This model approximates the different impacts from these policies as a reduction in the mean duration of the infectious period:

```math
\begin{equation*}
\begin{split}
T_I^\mathrm{int} = T_I &\times (1 - \mathbb{P}[\text{infectious is identified}] \times \mathbb{P}[\text{identified infectious isolates}] \times [\text{prop. reduction in $T_I$ due to isolation}]) \\
&\times (1 - \mathbb{P}[\text{contact tracing identifies exposed}] \times \mathbb{P}[\text{identified exposed quarantines}] )
\end{split}
\end{equation*}
```

## References

- Basic reproduction number
    - [Biggerstaff et al. 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4169819/)
- Latent period and infectious period
    - [Chan et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11986874/)
    - [Corie et al. 2012](https://pubmed.ncbi.nlm.nih.gov/22939310/)
    - [Suess et al. 2012](https://pmc.ncbi.nlm.nih.gov/articles/PMC3519848/)
    - [Tuite et al. 2010](https://pmc.ncbi.nlm.nih.gov/articles/PMC2817319/)
- Symptomatic fraction
    - [Biddle et al. 2024](https://pubmed.ncbi.nlm.nih.gov/39602819/)
- Antiviral uptake and effectiveness
    - [Biggerstaff et al. 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4610008/)
    - [Frutos et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11576051/)
    - [Mellis et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10678642/)
    - [Ng et al. 2010](https://pmc.ncbi.nlm.nih.gov/articles/PMC2840043/)
    - [Uyeki et al. 2024](https://pubmed.ncbi.nlm.nih.gov/37983025/)
