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

- $Y$: symptomatic infections
- $H^\mathrm{pre}$: current number of infected individuals who will become hospitalized
- $H^\mathrm{cum}$: cumulative number of hospitalizations (i.e., admissions)
- $D^\mathrm{pre}$: current number of infected individuals who will die
- $D^\mathrm{cum}$: cumulative number of deaths

### Parameters

- $R_0$: basic reproduction number
- $T_I$: mean duration of infectious period
- $\beta = R_0 / T_I$
- $C_{ij}$: contact matrix, normalized (i.e., so that dominant eigenvector is 1)
- $\alpha_i$: proportion of infections that are symptomatic
- $\dot{V}$: vaccine administration rate (number of people per time)
- Vaccine efficacy
  - $\mathrm{VE}_I$: vaccine efficacy against transmission given infected
  - $\mathrm{VE}_P$: vaccine efficacy against symptoms given infected
  - Note that vaccination is assumed to not protect against infection
- proportion of the population initially infected, assumed identical across groups
- $N$: total population size (used for reporting only)

### Equations

Let $f(A, B)$ be the flux from compartment $A$ to $B$:

```math
\begin{align*}
f(\mathrm{SU}_i, \mathrm{SV}_i) &= \frac{S^\mathrm{U}}{S^\mathrm{U} + E^\mathrm{U} + I^\mathrm{U} + R^\mathrm{U}} \frac{N_i}{N} \dot{V} \\
I^\mathrm{eff}_i &= I_i + (1 - \mathrm{VE}_I) \times I^\mathrm{V}_i \\
\dot{E}^\mathrm{U}_i &= \frac{\beta}{N} \frac{S_i}{N_i} \sum_j C_{ij} I^\mathrm{eff}_j{N_i}  \\
\dot{Y}_i &= \alpha_i \left[ \dot{\mathrm{IU}}_i + (1 - \mathrm{VE}_P) \times \dot{\mathrm{IV}}_i \right]
\end{align*}
```

- Couldn't easily find sum in model.rs lines 154-155
