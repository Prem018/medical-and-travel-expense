// Type definitions for form data

export interface PrescriptionDrug {
  name: string;
  prescriptionDate: string;
  purchaseDate: string;
  provider: string;
  amount: string;
}

export interface OTCDrug {
  name: string;
  purchaseDate: string;
  amount: string;
  seller: string;
  reason: string;
}

export interface MedicalSupply {
  item: string;
  purchaseDate: string;
  prescribed: string;
  provider: string;
  amount: string;
  seller: string;
}

export interface ParkingExpense {
  address: string;
  date: string;
  amount: string;
  meter: string;
  meterNumber: string;
}

export interface MileageExpense {
  date: string;
  facilityAddress: string;
  workplaceAddress: string;
  distance: string;
}

export interface TransportationExpense {
  date: string;
  startingPoint: string;
  facilityAddress: string;
  transportType: string;
  fare: string;
}

export interface FormData {
  // Common fields for all forms
  claimNumber?: string;
  workerName?: string;
  workerId?: string;
  submissionDate?: string;
  
  // Fields for medical expense form
  prescriptionDrugs?: PrescriptionDrug[];
  otcDrugs?: OTCDrug[];
  medicalSupplies?: MedicalSupply[];
  parkingExpenses?: ParkingExpense[];
  mileageExpenses?: MileageExpense[];
  transportationExpenses?: TransportationExpense[];
  
  // Fields for worker progress form
  workStatus?: string;
  returnToWorkDate?: string;
  workingStatus?: string;
  otherWorkingStatus?: string;
  returnToWorkComments?: string;
  expectedReturnDate?: string;
  returnConcerns?: string;
  employerContact?: string;
  employerContactDate?: string;
  recoveryStatus?: string;
  recoveryComments?: string;
  painScale?: string;
  treatmentStatus?: string;
  medicalProviderType?: string;
  lastTreatmentDate?: string;
  lastTreatmentProvider?: string;
  nextTreatmentDate?: string;
  nextTreatmentProvider?: string;
  therapyFrequency?: string;
  medicationStatus?: string;
  medicationName?: string;
  exerciseStatus?: string;
  exerciseList?: string;
  additionalInfo?: string;
  
  // Allow for any additional fields
  [key: string]: any;
}
