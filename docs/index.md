# dynODE-web

## Model

### States

- $S$: susceptible
- $E$: exposed (i.e., latent)
- $I$: infectious
- $R$: removed
- $S_V$: susceptible and vaccinated
- $E_V$: exposed and vaccinated
- $R_V$: removed and vaccinated

There are other variables that reflect real epidemiological states but are not used as part of the dynamical equations:

- $H_\mathrm{pre}$: current number of infected individuals who will become hospitalized
- $H_\mathrm{cum}$: cumulative number of hospitalizations (i.e., admissions)
- $D_\mathrm{pre}$: current number of infected individuals who will die
- $D_\mathrm{cum}$: cumulative number of deaths

### Parameters

- $R_0$: basic reproduction number
- $T_I$: mean duration of infectious period
- $\beta = R_0 / T_I$

### Equations

- $I_\mathrm{eff} = I \times (1 - \mathrm{VE}_I \times I_V)$
