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

There are other compartments, that reflect real epidemiological processes, that do not affect transmission:

- $Y^\mathrm{cum}$: cumulative number of symptomatic infections
- $H^\mathrm{pre}$: current number of infected individuals who will become hospitalized
- $H^\mathrm{cum}$: cumulative number of hospitalizations (i.e., admissions)
- $D^\mathrm{pre}$: current number of infected individuals who will die
- $D^\mathrm{cum}$: cumulative number of deaths

These compartments currently represent the proportion of the total population $N$ that is in each group and disease state.

### Parameters

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
  - $t_V$: start of vaccine administration
  - $\dot{V}_\mathrm{max}$: maximum vaccine administration rate
  - $V_\mathrm{tot}$: total number of vaccine doses available
  - Derive: $\dot{V}(t)$: time-varying vaccine administration rate (number of people per time)
- Vaccine efficacy
  - $\mathrm{VE}_S$: efficacy of 1 dose against infection (i.e., being infected)
  - $\mathrm{VE}_I$: efficacy of 1 dose against transmission given infection
  - $\mathrm{VE}_{P,Y|I}$: efficacy of 1 dose against symptoms given infection
    - At this time, vaccines are assumed to have no *additional* protection against downstream outcomes. In future iterations, vaccines might provide further protection against hospitalization given symptomatic $\mathrm{VE}_{P,H|Y}$, or protection against death given hospitalization $\mathrm{VE}_{P,D|H}$.
  - $\mathrm{VE}_{2S}$, $\mathrm{VE}_{2I}$, $\mathrm{VE}_{2P,Y|I}$: efficacy of 2 doses (i.e., the effect of both doses, not the incremental effect of the second dose)
- Antiviral efficacy
  - $\mathrm{AVE}_I$: antiviral effectiveness against transmission given
  infected.
    - Note that this is the *effectiveness* and incorporates the interaction between the delay from exposure to receiving antivirals and the generation time distribution.
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
- proportion of the population initially infected, assumed identical across groups
- $N$: total population size
- $N_i$: size of group $i$

### Equations

Let $f(A, B)$ be the flux from compartment $A$ to $B$.

#### Vaccination

Vaccination is actually three processes:

- Supply: Assume there is a fixed number of doses. Administration will cease when the supply is exhausted.
- Demand: All individuals, in any disease state, are eligible for a first dose. Some proportion of individuals who receive a first dose will receive a second, and that second dose is set aside (i.e., removed from the supply) at the time of first dose administration.
- Immunity: At some fixed delay after first dose administration, transition individuals from $\mathrm{SU}$ to $\mathrm{SV}$. At some fixed delay after second dose administration, transition individuals from $\mathrm{SV}$ to $\mathrm{SV2}$. Vaccination is assumed to have no postexposure prophylactic benefit.

 and a maximum number of doses per unit time $\dot{V}_\mathrm{max}$

#### Single-dose vaccination

All individuals, in any disease state, are eligible for vaccination. Vaccines are distributed equally across groups and states. The model tracks the total number of vaccine doses administered but the effect on the dynamical compartments is only to move susceptible individuals into the vaccinated track of compartments:

```math
f(\mathrm{SU}_i, \mathrm{SV}_i) = \frac{\mathrm{SU}_i}{\mathrm{SU}_i + \mathrm{EU}_i + \mathrm{IU}_i + \mathrm{RU}_i} \frac{N_i}{N} \dot{V}
```

where the time-varying vaccination rate is:

```math
\dot{V}(t) = \begin{cases}
0 & t < t_V \\
\dot{V}_\mathrm{max} & (t - t_V) \dot{V}_\mathrm{max} < V_\mathrm{tot} \\
0 & \text{otherwise}
\end{cases}
```

#### Two-dose vaccination

Some proportion $\mathrm{Dose2Frac}$ of people who received a first dose will go on to receive a second dose at some delay $\mathrm{Dose2Delay}$

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

The rate of new infections that are not protected by vaccination against progression to symptoms is:

```math
\dot{X}_i = f(\mathrm{EU}_i, \mathrm{EI}_i) + (1 - \mathrm{VE}_P) f(\mathrm{EV}_i, \mathrm{EI}_i)
```

The number of outcomes is:

```math
\begin{align*}
\dot{Y}^\mathrm{cum}_i &= \mathrm{IYR}_i \times \dot{X}_i \\
\dot{H}^\mathrm{pre}_i &= \mathrm{IHR}_i \times (1 - \mathrm{IYR}_i A_\mathrm{op} \mathrm{AVE}_P) \times \dot{X}_i \\
\dot{H}^\mathrm{cum}_i &= \dot{H}^\mathrm{pre} \times \frac{1}{T_H^\mathrm{pre}} \\
\dot{D}^\mathrm{pre}_i &= \mathrm{IFR}_i \times (1 - A_\mathrm{ip} \mathrm{AVE}_P) \times (1 - \mathrm{IYR}_i A_\mathrm{op} \mathrm{AVE}_P) \times \dot{X}_i \\
\dot{D}^\mathrm{cum}_i &= \dot{H}^\mathrm{pre} \times \frac{1}{T_D^\mathrm{pre}}
\end{align*}
```
