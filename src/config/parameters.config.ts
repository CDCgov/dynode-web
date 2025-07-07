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
        tooltip: "Number of people infected at time 0",
    },
    r0: {
        label: "R0",
        tooltip: "Basic reproduction number",
    },
    latent_period: {
        label: "Latent period",
        tooltip: "Mean delay from infection to infectiousness, in days",
    },
    infectious_period: {
        label: "Infectious period",
        tooltip: "Mean duration of infectious period, in days",
    },
    fraction_initial_immune: {
        label: "Prior Immunity (%)",
        tooltip:
            "Proportion of the population that is immune at the start of the simulation",
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
    n_to_detect: {
        label: "Number of positives tests to detect outbreak"
    },
    p_test_sympto: {
        label: "Proportion of symptomatic infections tested",
    },
    test_sensitivity: {
        label: "Test sensitivity",
        tooltip: "Proportion of tested infections that are positive",
    },
    p_test_forward: {
        label: " Probability a positive test is forwarded to public health",
        tooltip:
            "Proportion of positive tests that are forwarded to public health, resulting in a detection",
    },
    "mitigations.antivirals.ave_i": {
        label: "Effectiveness against onward transmission",
        tooltip:
            "Proportional reduction in onward transmission among treated, infected individuals",
    },
    "mitigations.antivirals.ave_p_hosp": {
        label: "Effectiveness vs. hospitalization",
        tooltip:
            "Proportion of treated, symptomatic infections that avert hospitalization",
    },
    "mitigations.antivirals.ave_p_death": {
        label: "Effectiveness vs. death",
        tooltip:
            "Proportion of treated, hospitalized infections that avert death",
    },
    "mitigations.antivirals.fraction_seek_care": {
        label: "Fraction of cases that seek care",
        tooltip: "Proportion of symptomatic infections that seek care",
    },
    "mitigations.antivirals.fraction_diagnosed_prescribed_outpatient": {
        label: "Fraction of diagnosed care-seeking outpatient cases",
        tooltip:
            "Proportion of care-seeking infections that are prescribed outpatient antivirals",
    },
    "mitigations.antivirals.fraction_adhere": {
        label: "Fraction of individuals that adhere to prescribed outpatient antiviral regimen",
        tooltip:
            "Proportion of individuals prescribed outpatient antivirals who take their course",
    },
    "mitigations.antivirals.fraction_diagnosed_prescribed_inpatient": {
        label: "Fraction of hospitalized cases that receive antivirals",
        tooltip:
            "Proportion of hospitalized infections that are prescribed inpatient antivirals",
    },
    "mitigations.community.start": {
        label: "Day to begin community mitigation",
        tooltip: "Start day of the mitigation",
    },
    "mitigations.community.duration": {
        label: "Duration of community mitigation",
        tooltip: "Duration of the mitigation in days",
    },
    "mitigations.community.effectiveness": {
        label: "Community mitigation effectiveness",
        tooltip:
            "Proportional reduction in transmission due to the mitigation, where negative values mean an increase in transmission",
    },
    "mitigations.ttiq.p_id_infectious": {
        label: "Probability an infectious person becomes aware of their own infection",
    },
    "mitigations.ttiq.p_infectious_isolates": {
        label: "Probability an aware, infectious person will isolate",
    },
    "mitigations.ttiq.isolation_reduction": {
        label: "Proportional reduction in infectious period due to isolation",
    },
    "mitigations.ttiq.p_contact_trace": {
        label: "Probability contact tracing will identify an exposed person",
    },
    "mitigations.ttiq.p_traced_quarantines": {
        label: "Probability a traced contact will quarantine and never transmit",
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
        tooltip: "Maximum number of doses administered per day",
    },
    "mitigations.vaccine.ramp_up": {
        label: "Ramp-up period",
        tooltip: "Time from vaccination to achieving protection from vaccination, in days. " +
          "Individuals infected before the ramp-up period is complete have no protection from vaccination."
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
        label: "Vaccine effectiveness against infection",
        tooltip: "Vaccine effectiveness against infection",
    },
    "mitigations.vaccine.ve_i": {
        label: "Vaccine effectiveness against onward transmission",
        tooltip: "Vaccine effectiveness against onward transmission",
    },
    "mitigations.vaccine.ve_p": {
        label: "Vaccine effectiveness against illness",
        tooltip: "Vaccine effectiveness against illness",
    },
});
