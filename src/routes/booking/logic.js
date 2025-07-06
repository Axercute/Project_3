import { label } from "flowbite-svelte";

export const service = {
  consultation: [
    { label: "First Consultation", value: "first", price: 28 },
    { label: "Follow-up Consultation", value: "followup", price: 18 },
  ],
  senior: [
    { label: "Not a Senior", value: "false", price: 1 },
    { label: "Senior", value: "true", price: 0.95 },
  ],
  treatment: [
    { label: "Electrotherapy", value: "electrotherapy", price: 20 },
    { label: "Orthopedic Reduction", value: "orthopedic", price: 68 },
    { label: "Bloodletting Therapy", value: "bloodletting", price: 48 },
    { label: "Bandaging", value: "bandaging", price: 34 }
  ]
};
