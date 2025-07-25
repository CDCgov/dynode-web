import { Parameters } from "@wasm/wasm_dynode";
import { defineEditorConfig } from "./editorConfig";

export type ParameterPath = keyof typeof ParameterEditorConfig.config;

export const ParameterEditorConfig = defineEditorConfig<Parameters>({
    population: {
        label: "Population size",
        tooltip: "The total number of people in the simulation",
    },
    initial_infections: {
        label: "Initial infections",
        tooltip: "Number of people infected at the first day of the outbreak",
    },
    r0: {
        label: "Basic reproduction number",
        tooltip: "Average number of people infected by a single infectious person.",
    },
    latent_period: {
        label: "Latent period",
        tooltip: "Mean delay from time of exposure to onset of infectiousness, in days",
    },
    infectious_period: {
        label: "Infectious period",
        tooltip: "Mean duration of infectious period, in days",
    },
    fraction_initial_immune: {
        label: "Prior immunity (%)",
        tooltip:
            "Proportion of the population that is immune (i.e., cannot be infected during the outbreak) at the start of the simulation",
    },
    fraction_symptomatic: {
        label: "Symptomatic fraction",
        tooltip:
            "Proportion of infections that would result in symptoms in the absence of mitigations",
    },
    fraction_hospitalized: {
        label: "Infection-hospitalization ratio",
        tooltip:
            "Proportion of infections that would result in hospitalization in the absence of mitigations",
    },
    fraction_dead: {
        label: "Infection-fatality ratio",
        tooltip:
            "Proportion of infections that would result in death in the absence of mitigations",
    },
    p_test_sympto: {
        label: "Proportion of symptomatic infections tested",
    },
    test_sensitivity: {
        label: "Test sensitivity",
        tooltip: "Proportion of tested infections that are correctly identified as infected by the test",
    },
    p_test_forward: {
        label: "Probability a positive test is forwarded to public health",
        tooltip:
            "Proportion of positive tests that are forwarded to a public health laboratory, resulting in a detection",
    },
    "mitigations.antivirals.ave_i": {
        label: "Effectiveness for onward transmission",
        tooltip:
            "Proportional reduction in onward transmission among infected individuals who receive outpatient antivirals and adhere to the regimen",
    },
    "mitigations.antivirals.ave_p_hosp": {
        label: "Effectiveness for hospitalization",
        tooltip:
            "Of symptomatic infections who receive outpatient antivirals and adhere to the regimen, the proportion that avert hospitalization",
    },
    "mitigations.antivirals.ave_p_death": {
        label: "Effectiveness for death",
        tooltip:
            "Of hospitalized infections that receive inpatient antivirals, the proportion that avert death",
    },
    "mitigations.antivirals.fraction_seek_care": {
        label: "Fraction of cases that seek care",
        tooltip: "Proportion of symptomatic infections that seek care",
    },
    "mitigations.antivirals.fraction_diagnosed_prescribed_outpatient": {
        label: "Fraction of care-seeking outpatient cases that receive antivirals",
        tooltip:
            "Proportion of care-seeking infections that are prescribed outpatient antivirals",
    },
    "mitigations.antivirals.fraction_adhere": {
        label: "Fraction of individuals that adhere to prescribed outpatient antiviral regimen",
        tooltip:
            "Proportion of individuals prescribed outpatient antivirals who take their full course of medication",
    },
    "mitigations.antivirals.fraction_diagnosed_prescribed_inpatient": {
        label: "Fraction of hospitalized cases that receive antivirals",
        tooltip:
            "Proportion of hospitalized infections that are prescribed inpatient antivirals",
    },
    "mitigations.community.start": {
        label: "Start day",
        tooltip: "First day that the intervention has its effect",
    },
    "mitigations.community.duration": {
        label: "Duration (days)",
        tooltip: "Time over which the intervention has its effect",
    },
    "mitigations.community.effectiveness": {
        label: "Effectiveness",
        tooltip:
            "Proportional reduction in transmission due to the mitigation, where negative values mean an increase in transmission. Effects are symmetric (e.g., child-to-adult and adult-to-child are changed equally).",
    },
    "mitigations.ttiq.p_id_infectious": {
        label: "Probability an infectious person becomes aware of their own infection",
    },
    "mitigations.ttiq.p_infectious_isolates": {
        label: "Probability of isolation",
        tooltip: "Probability an aware, infectious person will isolate",
    },
    "mitigations.ttiq.isolation_reduction": {
        label: "Isolation effectiveness",
        tooltip: "Proportional reduction in duration of infectious period due to isolation",
    },
    "mitigations.ttiq.p_contact_trace": {
        label: "Probability of contact tracing",
        tooltip: "Probability contact tracing will identify an exposed person",
    },
    "mitigations.ttiq.p_traced_quarantines": {
        label: "Contact tracing effectiveness",
        tooltip: "Probability a traced contact will quarantine and never transmit",
    },
    "mitigations.vaccine.start": {
        label: "Vaccination start",
        tooltip: "Start day of the vaccination campaign",
    },
    "mitigations.vaccine.doses": {
        label: "Vaccine type",
    },
    "mitigations.vaccine.doses_available": {
        label: "Vaccine doses available",
        tooltip:
            "Total number of doses available for vaccination. Determines the duration of the vaccine campaign.",
    },
    "mitigations.vaccine.administration_rate": {
        label: "Vaccine administration rate",
        tooltip: "Maximum possible number of doses administered per day",
    },
    "mitigations.vaccine.ramp_up": {
        label: "Delay from dose to protection (days)",
        tooltip: "Time from vaccination to achieving protection from vaccination. " +
          "Individuals infected before the delay is complete have no protection from vaccination."
    },
    "mitigations.vaccine.dose2_delay": {
        label: "Delay between doses",
        tooltip: "Time that a person must wait before receiving their second dose, in days",
    },
    "mitigations.vaccine.p_get_2_doses": {
        label: "Fraction of vaccinees who receive 2 doses",
        tooltip:
            "Of people who receive a first dose, the proportion that also receive a second dose",
    },
    "mitigations.vaccine.ve_s": {
        label: "Effectiveness for susceptibility",
        tooltip: "Proportion of potential infections among the vaccine-protected that are averted",
    },
    "mitigations.vaccine.ve_i": {
        label: "Effectiveness for onward transmission",
        tooltip: "Proportion of onward transmissions among the vaccine-protected that are averted",
    },
    "mitigations.vaccine.ve_p": {
        label: "Effectiveness for symptomatic disease",
        tooltip: "Proportion of symptomatic disease among the vaccine-protected that is averted",
    },
});
