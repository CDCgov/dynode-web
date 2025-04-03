# dynODE-web

## Model

The population is divided into (age) groups $i$.

### States

The key dynamical compartments are:

- $\mathrm{SU}_i$: susceptible, unvaccinated
- $\mathrm{EU}_i$: exposed (i.e., latent), unvaccinated
- $\mathrm{IU}_i$: infectious, unvaccinated
- $R_i$: removed
- $\mathrm{SV}_i$: susceptible, vaccinated
- $\mathrm{EV}_i$: exposed, vaccinated
- $\mathrm{IV}_i$: infected, vaccinated

There are other compartments, that reflect real epidemiological processes, that do not affect transmission:

- $Y^\mathrm{cum}$: cumulative number of symptomatic infections
- $H^\mathrm{pre}$: current number of infected individuals who will become hospitalized
- $H^\mathrm{cum}$: cumulative number of hospitalizations (i.e., admissions)
- $D^\mathrm{pre}$: current number of infected individuals who will die
- $D^\mathrm{cum}$: cumulative number of deaths

### Parameters

- Transmission
  - $R_0$: basic reproduction number
  - Derive: - $\beta = R_0 / T_I$ (note that this is a scalar)
  - $C_{ij}$: contact matrix, normalized (i.e., so that dominant eigenvector is 1)
- Times & delays
  - $T_E$: mean duration of latent period
  - $T_I$: mean duration of infectious period
  - $T_H^\mathrm{pre}$: mean delay between infection (i.e., exposure) and hospitalization, among those who are hospitalized
  - $T_D^\mathrm{pre}$: mean delay between infection (i.e., exposure) and death, among those who die
- Vaccination
  - $\dot{V}(t)$: time-varying vaccine administration rate (number of people per time)
  - $t_V$: start of vaccination
  - $\dot{V}_\mathrm{max}$: maximum vaccination rate
  - $V_\mathrm{tot}$: total number of vaccines available
- Vaccine efficacy
  - $\mathrm{VE}_S$: efficacy against infection (i.e., being infected)
  - $\mathrm{VE}_I$: efficacy against transmission given infection
  - $\mathrm{VE}_P$: efficacy against symptoms given infection. (Vaccines are assumed to have no additional protection against hospitalization given symptoms or death given hospitalization.)
- Antiviral efficacy
  - $\mathrm{AE}_I$: antiviral effectiveness against transmission given
  infected. Note that this is the *effectiveness*. Upon exposure, if a person is flagged as receiving outpatient antivirals, they instantaneously get a reduction in transmission, so this reduction needs to account for the interaction between delays from infection to symptom onset to taking antivirals, versus the infectivity profile. E.g., an antiviral might be very effective against transmission if given immediately upon exposure, but less effective if given after a delay of a week, and it's the latter, lower quantity that we're using here.
  - $\mathrm{AE}_P$: antiviral efficacy against progression. Efficacy against hospitalization given symptoms is assumed equal to efficacy against death given hospitalization, and individuals can "double dip" if they get antivirals twice.
  - In the model, antivirals are presumed not given before exposure, so $\mathrm{AE}_S$ is undefined.
- Antiviral usage
  - $A_\mathrm{op}$: proportion of symptomatic but not (yet) hospitalized people who receive antivirals. This probability is a combination of seeking care, being diagnosed, getting an antiviral prescribed, and adhering to the regimen. ("op" is for "outpatient.)
  - $A_\mathrm{ip}$: proportion of hospitalized ("ip" is for "inpatient") people who receive antivirals, conditioned on not having received outpatient antivirals.
- Outcomes
  - $\mathrm{IYR}_i$: proportion of infections that are symptomatic (read "Y" as "symptomatic", so this is "infection-symptomatic ratio"; this is not standard nomenclature; this is one minus the asymptomatic fraction)
  - $\mathrm{IHR}_i$: proportion of infections that result in hospitalization
  - $\mathrm{IFR}_i$: proportion of infections that result in death ("F" is for "fatality"; this is the standard nomenclature)
- proportion of the population initially infected, assumed identical across groups
- $N$: total population size

### Equations

Let $f(A, B)$ be the flux from compartment $A$ to $B$.

#### Vaccination

```math
f(\mathrm{SU}_i, \mathrm{SV}_i) = \frac{\mathrm{SU}}{\mathrm{SU} + \mathrm{EU} + \mathrm{IU} + \mathrm{RU}} \frac{N_i}{N} \dot{V}
```

where the time-varying vaccination rate is:

```math
\dot{V}(t) = \begin{cases}
0 & t < t_V \\
\dot{V}_\mathrm{max} & (t - t_V) \dot{V}_\mathrm{max} < V_\mathrm{tot} \\
0 & \text{afterward}
\end{cases}
```

#### Transmission

The effective number of infectious in group $j$ (`i_effective`) is:

```math
I^\mathrm{eff}_j = \left[ \mathrm{IU}_j + (1 - \mathrm{VE}_I) \times \mathrm{IV}_j \right] \times (1 - A_\mathrm{op} \mathrm{AE}_I) \\
```

The force of infection on group $i$ (`infection_rate`, modulo a factor of $1/N_i$) is:

```math
\phi_i = \frac{\beta}{N} \sum_j C_{ij} I^\mathrm{eff}_j
```

***I couldn't find the sum over $j$ in model.rs lines 154-155?***

So that the fluxes from susceptible to exposed are:

```math
\begin{align*}
f(\mathrm{SU_i, \mathrm{EU}_i}) &= \phi_i \frac{\mathrm{SU}_i}{N_i} \\
f(\mathrm{SV_i, \mathrm{EV}_i}) &= \phi_i (1 - \mathrm{VE}_S) \frac{\mathrm{SV}_i}{N_i}
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

The rate of new infections that are not protected by vaccination or outpatient antivirals is:

```math
\dot{X}_i = \left[ f(\mathrm{EU}_i, \mathrm{EI}_i) + (1 - \mathrm{VE}_P) f(\mathrm{EV}_i, \mathrm{EI}_i) \right] \times (1 - A_\mathrm{op} \mathrm{AE}_P)
```

The number of outcomes is:

```math
\begin{align*}
\dot{Y}^\mathrm{cum}_i &= \dot{X}_i \times \mathrm{IYR}_i \\
\dot{H}^\mathrm{pre}_i &= \dot{X}_i \times \mathrm{IHR}_i \\
\dot{H}^\mathrm{cum}_i &= \dot{H}^\mathrm{pre} \times \frac{1}{T_H^\mathrm{pre}} \\
\dot{D}^\mathrm{pre}_i &= \dot{X}_i \times (1 - A_\mathrm{ip} \mathrm{AE}_P) \times \mathrm{IFR}_i \\
\dot{D}^\mathrm{cum}_i &= \dot{H}^\mathrm{pre} \times \frac{1}{T_D^\mathrm{pre}}
\end{align*}
```
