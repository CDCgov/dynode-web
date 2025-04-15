import { Parameters } from "@wasm/wasm_dynode";
import { defineEditorConfig } from "./editorConfig";

export type ParameterPath = keyof typeof ParameterEditorConfig.config;

export const ParameterEditorConfig = defineEditorConfig<Parameters>({
    population: {
        tooltip: "The total number of people in the simulation",
    },
    initial_infections: {
        tooltip: "Number of people infected at time 0",
    },
    r0: {
        tooltip: "Basic reproduction number",
    },
    latent_period: {
        tooltip: "Mean delay from infection to infectiousness, in days",
    },
    infectious_period: {
        tooltip: "Mean duration of infectious period, in days",
    },
    fraction_symptomatic: {
        tooltip: "Proportion of infections that would result in symptoms in the absence of mitigations",
    },
    fraction_hospitalized: {
        tooltip: "Proportion of infections that would result in hospitalization in the absence of mitigations",
    },
    fraction_dead: {
        tooltip: "Proportion of infections that would result in death in the absence of mitigations",
    },
    p_test_sympto: {
        tooltip: "Proportion of symptomatic infections that are tested",
    },
    test_sensitivity: {
        tooltip: "Proportion of tested infections that are positive",
    },
    p_test_forward: {
        tooltip: "Proportion of positive tests that are forwarded to public health, resulting in a detection",
    },
    "mitigations.antivirals.ave_i": {
        tooltip: "Proportional reduction in onward transmission among treated, infected individuals",
    },
    "mitigations.antivirals.ave_p": {
        tooltip: "Proportion of treated, symptomatic infections that avert hospitalization, and of treated, hospitalized individuals who avert death",
    },
    "mitigations.antivirals.fraction_seek_care": {
        tooltip: "Proportion of symptomatic infections that seek care",
    },
    "mitigations.antivirals.fraction_diagnosed_prescribed_outpatient": {
        tooltip: "Proportion of care-seeking infections that are prescribed outpatient antivirals",
    },
    "mitigations.antivirals.fraction_adhere": {
        tooltip: "Proportion of individuals prescribed outpatient antivirals who take their course",
    },
    "mitigations.antivirals.fraction_diagnosed_prescribed_inpatient": {
        tooltip: "Proportion of hospitalized infections that are prescribed inpatient antivirals",
    },
    "mitigations.community.start": {
        tooltip: "Start day of the mitigation",
    },
    "mitigations.community.duration": {
        tooltip: "Duration of the mitigation in days",
    },
    "mitigations.community.effectiveness": {
        tooltip: "Proportional reduction in transmission due to the mitigation, where negative values mean an increase in transmission",
    },
    "mitigations.ttiq.p_id_infectious": {
        tooltip: "Probability an infectious person will be identified via surveillance",
    },
    "mitigations.ttiq.p_infectious_isolates": {
        tooltip: "Probability an identified, infectious person will isolate",
    },
    "mitigations.ttiq.isolation_reduction": {
        tooltip: "Proportional reduction in infectious period due to isolation",
    },
    "mitigations.ttiq.p_contact_trace": {
        tooltip: "Probability contact tracing will identify an exposed person",
    },
    "mitigations.ttiq.p_traced_quarantines": {
        tooltip: "Probability a traced contact will quarantine and never transmit",
    },
    "mitigations.vaccine.start": {
        tooltip: "Start day of the vaccination campaign",
    },
    "mitigations.vaccine.doses_available": {
        tooltip: "Total number of doses available for vaccination. Determines the duration of the vaccine campaign.",
    },
    "mitigations.vaccine.administration_rate": {
        tooltip: "Number of doses administered per day",
    },
    "mitigations.vaccine.ve_s": {
        tooltip: "Vaccine effectiveness against infection",
    },
    "mitigations.vaccine.ve_i": {
        tooltip: "Vaccine effectiveness against onward transmission",
    },
    "mitigations.vaccine.ve_p": {
        tooltip: "Vaccine effectiveness against illness",
    }
});
