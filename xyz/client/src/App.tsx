import { useState } from "react";
import { FormSelector } from "./components/FormSelector";
import { MedicalExpenseForm } from "./components/MedicalExpenseForm";
import { WorkerProgressForm } from "./components/WorkerProgressForm";
import { PrintButton } from "./components/PrintButton";
import { FormData } from "./data/types";
import { defaultMedicalExpenseData, defaultWorkerProgressData } from "./data/defaultData";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [formType, setFormType] = useState<"medical-expense" | "worker-progress">("medical-expense");
  const [medicalExpenseData, setMedicalExpenseData] = useState<FormData>(defaultMedicalExpenseData);
  const [workerProgressData, setWorkerProgressData] = useState<FormData>(defaultWorkerProgressData);
  const [isFormGenerated, setIsFormGenerated] = useState(false);

  const handleFormTypeChange = (type: "medical-expense" | "worker-progress") => {
    setFormType(type);
  };

  const handleFieldChange = (field: string, value: string) => {
    if (formType === "medical-expense") {
      setMedicalExpenseData({
        ...medicalExpenseData,
        [field]: value,
      });
    } else {
      setWorkerProgressData({
        ...workerProgressData,
        [field]: value,
      });
    }
  };

  const handleTableItemChange = (
    tableField: string,
    index: number,
    field: string,
    value: string
  ) => {
    if (formType === "medical-expense") {
      const newData = { ...medicalExpenseData };
      
      if (index === -1) {
        // This is a direct field update, not a table item
        newData[field] = value;
        setMedicalExpenseData(newData);
      } else if (Array.isArray(newData[tableField])) {
        // This is a table item update
        const updatedItems = [...(newData[tableField] as any[])];
        updatedItems[index] = {
          ...updatedItems[index],
          [field]: value,
        };
        newData[tableField] = updatedItems;
        setMedicalExpenseData(newData);
      }
    } else {
      const newData = { ...workerProgressData };
      
      if (index === -1) {
        // This is a direct field update, not a table item
        newData[field] = value;
        setWorkerProgressData(newData);
      } else if (Array.isArray(newData[tableField])) {
        // This is a table item update
        const updatedItems = [...(newData[tableField] as any[])];
        updatedItems[index] = {
          ...updatedItems[index],
          [field]: value,
        };
        newData[tableField] = updatedItems;
        setWorkerProgressData(newData);
      }
    }
  };

  const addTableItem = (tableField: string) => {
    if (formType === "medical-expense") {
      const newData = { ...medicalExpenseData };
      if (Array.isArray(newData[tableField])) {
        const defaultItem = getDefaultItemForTable(tableField);
        newData[tableField] = [...(newData[tableField] as any[]), defaultItem];
        setMedicalExpenseData(newData);
      }
    } else {
      const newData = { ...workerProgressData };
      if (Array.isArray(newData[tableField])) {
        const defaultItem = getDefaultItemForTable(tableField);
        newData[tableField] = [...(newData[tableField] as any[]), defaultItem];
        setWorkerProgressData(newData);
      }
    }
  };

  const removeTableItem = (tableField: string, index: number) => {
    if (formType === "medical-expense") {
      const newData = { ...medicalExpenseData };
      if (Array.isArray(newData[tableField])) {
        const updatedItems = [...(newData[tableField] as any[])];
        updatedItems.splice(index, 1);
        newData[tableField] = updatedItems;
        setMedicalExpenseData(newData);
      }
    } else {
      const newData = { ...workerProgressData };
      if (Array.isArray(newData[tableField])) {
        const updatedItems = [...(newData[tableField] as any[])];
        updatedItems.splice(index, 1);
        newData[tableField] = updatedItems;
        setWorkerProgressData(newData);
      }
    }
  };

  const getDefaultItemForTable = (tableField: string) => {
    // Return an empty object with the appropriate structure based on the table field
    switch (tableField) {
      case "prescriptionDrugs":
        return { name: "", prescriptionDate: "", purchaseDate: "", provider: "", amount: "" };
      case "otcDrugs":
        return { name: "", purchaseDate: "", amount: "", seller: "", reason: "" };
      case "medicalSupplies":
        return { item: "", purchaseDate: "", prescribed: "", provider: "", amount: "", seller: "" };
      case "parkingExpenses":
        return { address: "", date: "", amount: "", meter: "", meterNumber: "" };
      case "mileageExpenses":
        return { date: "", facilityAddress: "", workplaceAddress: "", distance: "" };
      case "transportationExpenses":
        return { date: "", startingPoint: "", facilityAddress: "", transportType: "", fare: "" };
      default:
        return {};
    }
  };

  const generateForm = () => {
    setIsFormGenerated(true);
  };

  const currentData = formType === "medical-expense" ? medicalExpenseData : workerProgressData;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 no-print">
          <h2 className="text-xl font-semibold text-primary mb-4">WCB Manitoba Form Generator</h2>
          <FormSelector
            formType={formType}
            onFormTypeChange={handleFormTypeChange}
            formData={currentData}
            onFieldChange={handleFieldChange}
            onGenerate={generateForm}
          />
        </div>

        {isFormGenerated && (
          <div className="mb-4 no-print">
            <PrintButton />
          </div>
        )}

        {isFormGenerated && formType === "medical-expense" && (
          <MedicalExpenseForm
            data={medicalExpenseData}
            onTableItemChange={handleTableItemChange}
            onAddTableItem={addTableItem}
            onRemoveTableItem={removeTableItem}
          />
        )}

        {isFormGenerated && formType === "worker-progress" && (
          <WorkerProgressForm
            data={workerProgressData}
            onTableItemChange={handleTableItemChange}
            onAddTableItem={addTableItem}
            onRemoveTableItem={removeTableItem}
          />
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
