import { FormData, PrescriptionDrug, OTCDrug, MedicalSupply, ParkingExpense, MileageExpense, TransportationExpense } from "./types";

// Helper function to format date for input field
export function formatDateForInput(dateString: string): string {
  if (!dateString) {
    // Return today's date in YYYY-MM-DD format if no date provided
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
  
  try {
    // Try to parse the date string
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  } catch (error) {
    // If parsing fails, return today's date
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
}

// Default data for Medical & Travel Expense Request form
export const defaultMedicalExpenseData: FormData = {
  claimNumber: "20042047",
  workerName: "Madeleine Willson",
  workerId: "712041",
  submissionDate: new Date().toISOString().split('T')[0],
  
  prescriptionDrugs: [
    {
      name: "Naproxen",
      prescriptionDate: "February 28, 2024",
      purchaseDate: "February 29, 2024",
      provider: "Dr. Best",
      amount: "$20.00"
    }
  ],
  
  otcDrugs: [
    {
      name: "Advil",
      purchaseDate: "March 28, 2024",
      amount: "$8.00",
      seller: "Shoppers Drug Mart",
      reason: "Pain"
    }
  ],
  
  medicalSupplies: [
    {
      item: "Tensor",
      purchaseDate: "February 28, 2024",
      prescribed: "Yes",
      provider: "Dr. Best",
      amount: "$10.00",
      seller: "Shoppers DrugMart"
    }
  ],
  
  parkingExpenses: [
    {
      address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
      date: "March 28, 2024",
      amount: "$10.00",
      meter: "yes",
      meterNumber: "12245"
    }
  ],
  
  mileageExpenses: [
    {
      date: "March 28, 2024",
      facilityAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
      workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
      distance: "20 km"
    }
  ],
  
  transportationExpenses: [
    {
      date: "March 28, 2024",
      startingPoint: "",
      facilityAddress: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
      transportType: "Bus",
      fare: "$3.00"
    },
    {
      date: "March 27, 2024",
      startingPoint: "25 Furby St, Winnipeg MB R3C 2A2, Canada",
      facilityAddress: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
      transportType: "Taxi",
      fare: "$15.00"
    }
  ]
};

// Default data for Worker Progress Report form
export const defaultWorkerProgressData: FormData = {
  claimNumber: "20042047",
  workerName: "Madeleine Willson",
  workerId: "712041",
  submissionDate: new Date().toISOString().split('T')[0],
  
  workStatus: "returned",
  returnToWorkDate: "March 15, 2024",
  workingStatus: "fullDutiesRegular",
  returnToWorkComments: "Terrible. Testing Testing",
  
  recoveryStatus: "notRecovered",
  
  painScale: "3",
  treatmentStatus: "noTreatment",
  medicationStatus: "noMedication",
  exerciseStatus: "noExercises",
  
  additionalInfo: "No info Testing Testing"
};
