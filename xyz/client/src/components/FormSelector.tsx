import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FormData } from "../data/types";
import { formatDateForInput } from "../data/defaultData";

interface FormSelectorProps {
  formType: "medical-expense" | "worker-progress";
  onFormTypeChange: (formType: "medical-expense" | "worker-progress") => void;
  formData: FormData;
  onFieldChange: (field: string, value: string) => void;
  onGenerate: () => void;
}

export function FormSelector({
  formType,
  onFormTypeChange,
  formData,
  onFieldChange,
  onGenerate,
}: FormSelectorProps) {
  const handleFormTypeChange = (value: string) => {
    onFormTypeChange(value as "medical-expense" | "worker-progress");
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="formSelector" className="block mb-2 text-sm font-medium text-gray-700">
            Select Form Type:
          </Label>
          <Select
            value={formType}
            onValueChange={handleFormTypeChange}
          >
            <SelectTrigger id="formSelector" className="w-full">
              <SelectValue placeholder="Select form type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medical-expense">Medical & Travel Expense Request</SelectItem>
              <SelectItem value="worker-progress">Worker Progress Report</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="claimNumber" className="block mb-2 text-sm font-medium text-gray-700">
            Claim Number:
          </Label>
          <Input
            id="claimNumber"
            type="text"
            value={formData.claimNumber || ""}
            onChange={(e) => onFieldChange("claimNumber", e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="workerName" className="block mb-2 text-sm font-medium text-gray-700">
            Worker Name:
          </Label>
          <Input
            id="workerName"
            type="text"
            value={formData.workerName || ""}
            onChange={(e) => onFieldChange("workerName", e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <Label htmlFor="workerId" className="block mb-2 text-sm font-medium text-gray-700">
            Worker App ID:
          </Label>
          <Input
            id="workerId"
            type="text"
            value={formData.workerId || ""}
            onChange={(e) => onFieldChange("workerId", e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="submissionDate" className="block mb-2 text-sm font-medium text-gray-700">
          Submission Date:
        </Label>
        <Input
          id="submissionDate"
          type="date"
          value={formatDateForInput(formData.submissionDate || "")}
          onChange={(e) => onFieldChange("submissionDate", e.target.value)}
          className="w-full"
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button
          onClick={onGenerate}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          Generate Form
        </Button>
      </div>
    </div>
  );
}
