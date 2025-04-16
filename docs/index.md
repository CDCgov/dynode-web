# dynODE-web

## Model

The population is divided into (age) groups $i$.

### States

The key dynamical compartments are:

- $\mathrm{SU}_i$: unvaccinated susceptible individuals
- $\mathrm{EU}_i$: exposed (i.e., latent) individuals who were not vaccinated or had not completed the ramp up period at the time of exposure
- $\mathrm{IU}_i$: infectious individuals who were not vaccinated, etc.
- $\mathrm{RU}_i$: removed individuals who were not vaccinated, etc.
- $\mathrm{SV}_i$: vaccinated susceptible individuals
- $\mathrm{EV}_i$: exposed individuals who were vaccinated and had completed their ramp up period at the time of exposure
- $\mathrm{IV}_i$: infectious exposed individuals who were vaccinated, etc.
- $\mathrm{RV}_i$: removed exposed individuals who were vaccinated, etc.
- $\mathrm{S2V}_i$: susceptible individuals who have received 2 vaccine doses and completed their second ramp-up before exposure
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
    - $\mathrm{IU}_\bullet(0)$: number of people initially infected, assumed distributed proportionally across groups
    - $\mathrm{RU}_\bullet(0)$: number of people initially immune, assumed distributed proportionally across groups
- Transmission
    - $R_0$: basic reproduction number
    - Derive: $\beta = R_0 / T_I$ (note that this is a population-wide, average scalar)
    - $C_{ij}$: contact matrix, normalized so that dominant eigenvector is 1
- Times & delays
    - $T_E$: mean duration of latent period
    - $T_I$: mean duration of infectious period
    - $T_H^\mathrm{pre}$: mean delay between infection (i.e., exposure) and hospitalization, among those who are hospitalized
    - $T_D^\mathrm{pre}$: mean delay between infection (i.e., exposure) and death, among those who die
- Vaccination
    - $\dot{V}_\mathrm{max}$: maximum vaccination rate
    - $V_\mathrm{tot}$: total number of vaccines available
    - $t_V$: start of (first dose) vaccine administration
    - $\Delta t_{V2}$: delay from $t_V$ before beginning administration of second doses, constrained between 0 and $V_\mathrm{tot} / \dot{V}_\mathrm{max}$
    - $\mathrm{Frac2Dose}$: fraction of all doses set aside as second doses, constrained between 0 and $1 - \Delta t_{V2} V_\mathrm{tot} / \dot{V}_\mathrm{max}$
    - Derive: $\dot{V}_1(t)$: time-varying first dose administration rate (number of people per time)
    - Derive: $\dot{V}_2(t)$
- Vaccine efficacy
    - $\mathrm{VE}_S$: efficacy against infection (i.e., being infected)
    - $\mathrm{VE}_I$: efficacy against transmission given infection
    - $\mathrm{VE}_{P,Y|I}$: efficacy against symptoms given infection.
        - At this time, vaccines are assumed to have no _additional_ protection against downstream outcomes. In future iterations, vaccines might provide further protection against hospitalization given symptomatic $\mathrm{VE}_{P,H|Y}$, or protection against death given hospitalization $\mathrm{VE}_{P,D|H}$.
    - $\mathrm{VE}_{2S}$, etc.: efficacy of two doses (N.B.: this is not an incremental quantity; e.g., we almost certainly require $\mathrm{VE}_{2S} \geq \mathrm{VE}_S$)
- Antiviral efficacy
    - $\mathrm{AVE}_I$: antiviral effectiveness against transmission given
      infected.
        - Note that this is the _effectiveness_ and incorporates the interaction between the delay from exposure to receiving antivirals and the generation time distribution.
    - $\mathrm{AVE}_P$: antiviral efficacy against progression.
        - At this time, efficacy against hospitalization given symptoms $\mathrm{AVE}_{P,H|Y}$ is assumed equal to efficacy against death given hospitalization $\mathrm{AVE}_{P,D|H}$.
        - However, outpatient and inpatient antivirals are considered sufficiently different that individuals can receive both and they have independent effects.
    - In the model, antivirals are not given before exposure, so $\mathrm{AVE}_S$ is undefined.
- Antiviral usage
    - $A_\mathrm{op}$: proportion of symptomatic but not (yet) hospitalized people who receive antivirals. This probability is a combination of seeking care, being diagnosed, getting an antiviral prescribed, and adhering to the regimen. ("op" is for "outpatient.)
    - $A_\mathrm{ip}$: proportion of hospitalized ("ip" is for "inpatient") people who receive antivirals, conditioned on not having received outpatient antivirals.
- Outcomes
    - $\mathrm{FS}_i$: fraction symptomatic, i.e., proportion of infections that are symptomatic
        - Symptomatic and asymptomatic cases are assumed otherwise equal (e.g., equally infectious) so that this fraction does not affect transmission (except via mitigations that depend on symptoms)
    - $\mathrm{IHR}_i$: proportion of infections that result in hospitalization
    - $\mathrm{IFR}_i$: proportion of infections that result in death ("F" is for "fatality"; this is the standard nomenclature)

### Model initialization

- $\mathrm{RU}_i(0) = \mathrm{RU}_\bullet(0) \times (N_i / N)$
- $\mathrm{IU}_i(0) = \mathrm{IU}_\bullet(0) \times (N_i / N)$, with the caveat that, while $\mathrm{RU}_\bullet(0) + \mathrm{IU}_\bullet(0) > N$ is strictly speaking a mathematical impossibility, the current implementation will prefer immunity to infection (e.g., if $\mathrm{RU}_\bullet(0)/N$ is set to 100%, then there will be zero infections at all times)
- $\mathrm{SU}_i(0) = N_i - \mathrm{IU}_i(0) - \mathrm{RU}_i(0)$
- All other compartments initialized at 0

### Equations

Let $f(A, B)$ be the flux from compartment $A$ to $B$.

#### Vaccination

The time-varying, first-dose vaccination rate is equals $\dot{V}_\mathrm{max}$ until second doses begin to be administered, then decreases to a new rate, until doses are exhausted:

```math
\dot{V}_1(t) = \begin{cases}
0 & t < t_V \\
\dot{V}_\mathrm{max} & t_V \leq t < t_V + \Delta t_{V2} \\
\left(1 - \frac{\mathrm{Frac2Dose}}{1 - \Delta t_{V2} / t_\mathrm{end}} \right) \dot{V}_\mathrm{max} & t_V + \Delta t_{V2} \leq t < t_\mathrm{end} \\
0 & t \geq t_\mathrm{end}
\end{cases}
```

where $t_\mathrm{end} = V_\mathrm{tot} / \dot{V}_\mathrm{max}$. The second-dose rate is:

```math
\dot{V}_2(t) = \begin{cases}
0 & t < t_V + \Delta t_{V2} \\
\frac{\mathrm{Frac2Dose}}{1 - \Delta t_{V2} / t_\mathrm{end}} \dot{V}_\mathrm{max} & t_V + \Delta t_{V2} \leq t < t_\mathrm{end} \\
0 & t \geq t_\mathrm{end}
\end{cases}
```

The flux into the vaccine-protected compartments are:

```math
\begin{align*}
f(\mathrm{SU}_i, \mathrm{SV}_i) &= \frac{\mathrm{SU}}{\mathrm{SU} + \mathrm{EU} + \mathrm{IU} + \mathrm{RU}} \frac{N_i}{N} \dot{V}_1 \\
f(\mathrm{SV}_i, \mathrm{S2V}_i) &= \frac{\mathrm{SV}}{\mathrm{SV} + \mathrm{EV} + \mathrm{IV} + \mathrm{RV}} \frac{N_i}{N} \dot{V}_2
\end{align*}
```

Individuals keep their vaccine protection status $\mathrm{V}$ or $\mathrm{2V}$ as they transition from $S$ to $E$, $I$, and $R$.

Note that this approach makes two major assumptions:

- The number of individuals in ramp-up periods or infected during the ramp-up is negligible. We do not count those individuals in the denominator number of individuals eligible for vaccination.
- Individuals who were infected without vaccine protection never cease to demand first-dose vaccines, and those who were infected with a single dose of protection never cease to demand second doses. In other words, vaccines flow into the $\mathrm{EU}$/$\mathrm{IU}$/$\mathrm{RU}$ compartments, but those compartments never leave the denominator of eligibles.

#### Transmission

The effective number of infectious people in group $j$ (`i_effective`), accounting for the effects of vaccination and therapeutics on reducing transmission, is:

```math
I^\mathrm{eff}_j = \mathrm{IU}_j (1 - \mathrm{FS}_j A_\mathrm{op} \mathrm{AVE}_I)
  + \mathrm{IV}_j (1 - \mathrm{VE}_I) \left[ 1 - \mathrm{FS}_j (1 - \mathrm{VE}_P) A_\mathrm{op} \mathrm{AVE}_I \right]
```

The force of infection on group $i$ (`infection_rate`, modulo a factor of the population fractions) is:

```math
\phi_i = \frac{\beta}{N} \sum_j C_{ij} I^\mathrm{eff}_j
```

Note that $\beta$ is divided by $N$ to convert from numbers of people (in terms of which $R_0$ is defined) to proportions,

So that the fluxes from susceptible to exposed are:

```math
\begin{align*}
f(\mathrm{SU_i, \mathrm{EU}_i}) &= \phi_i \frac{\mathrm{SU}_i}{N_i/N} \\
f(\mathrm{SV_i, \mathrm{EV}_i}) &= \phi_i (1 - \mathrm{VE}_S) \frac{\mathrm{SV}_i}{N_i/N}
\end{align*}
```

#### Latency and infectiousness

```math
\begin{align*}
f(\mathrm{EU}_i, \mathrm{IU}_i) &= \mathrm{EU}_i \times \frac{1}{T_E} \\
f(\mathrm{IU}_i, \mathrm{RU}_i) &= \mathrm{IU}_i \times \frac{1}{T_I} \\
\end{align*}
```

and similarly for the vaccinated compartments.

#### Severity

The rate of new infections is:

```math
\dot{I}^\mathrm{cum}_i = f(\mathrm{EU}_i, \mathrm{IU}_i) + f(\mathrm{EV}_i, \mathrm{IV}_i)
```

The rate of new infections that are not protected by vaccination against progression to symptoms is:

```math
\dot{X}_i = f(\mathrm{EU}_i, \mathrm{IU}_i) + (1 - \mathrm{VE}_P) f(\mathrm{EV}_i, \mathrm{IV}_i)
```

The number of outcomes is:

```math
\begin{align*}
\dot{Y}^\mathrm{cum}_i &= \mathrm{FS}_i \times \dot{X}_i \\
\dot{H}^\mathrm{pre}_i &= \mathrm{IHR}_i \times (1 - \mathrm{FS}_i A_\mathrm{op} \mathrm{AVE}_P) \times \dot{X}_i \\
\dot{H}^\mathrm{cum}_i &= \dot{H}^\mathrm{pre} \times \frac{1}{T_H^\mathrm{pre}} \\
\dot{D}^\mathrm{pre}_i &= \mathrm{IFR}_i \times (1 - A_\mathrm{ip} \mathrm{AVE}_P) \times (1 - \mathrm{FS}_i A_\mathrm{op} \mathrm{AVE}_P) \times \dot{X}_i \\
\dot{D}^\mathrm{cum}_i &= \dot{H}^\mathrm{pre} \times \frac{1}{T_D^\mathrm{pre}}
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

Infectious individuals (who are identified via some type of surveillance or testing) may _isolate_, effectively averting part (or all) of their remaining infectious period. _Contact tracing_ can then identify exposed individuals, who may _quarantine_, averting part of all of their infectious period.

This model approximates the different impacts from these policies as a reduction in the mean duration of the infectious period:

$$
\begin{equation*}
\begin{split}
T_I^\mathrm{int} = T_I &\times (1 - \mathbb{P}[\text{infectious is identified}] \times \mathbb{P}[\text{identified infectious isolates}] \times [\text{prop. reduction in $T_I$ due to isolation}]) \\
&\times (1 - \mathbb{P}[\text{contact tracing identifies exposed}] \times \mathbb{P}[\text{identified exposed quarantines}] )
\end{split}
\end{equation*}
$$
