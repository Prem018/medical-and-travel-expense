import { FormHeader } from "./FormHeader";
import { FormFooter } from "./FormFooter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormData } from "../data/types";

interface WorkerProgressFormProps {
  data: FormData;
  onTableItemChange: (tableField: string, index: number, field: string, value: string) => void;
  onAddTableItem: (tableField: string) => void;
  onRemoveTableItem: (tableField: string, index: number) => void;
}

export function WorkerProgressForm({ 
  data,
  onTableItemChange, 
  onAddTableItem,
  onRemoveTableItem 
}: WorkerProgressFormProps) {
  const handleFieldChange = (field: string, value: string) => {
    // Update the regular field directly with the parent's state
    onTableItemChange(field, -1, field, value);
  };

  const handleRadioChange = (field: string, value: string) => {
    handleFieldChange(field, value);
  };

  const handleTextChange = (field: string, value: string) => {
    handleFieldChange(field, value);
  };

  return (
    <div>
      {/* Page 1 */}
      <div className="page bg-white mx-auto p-8 mb-8 shadow-md" style={{ maxWidth: "816px", minHeight: "1056px" }}>
        <FormHeader 
          title="Worker Progress Report" 
          claimNumber={`${data.claimNumber} WP`} 
        />
        
        <div className="mb-6">
          <p className="mb-4">
            <span className="font-medium">{data.workerName}</span> provided the following updates in relation to their claim:
          </p>
          
          {/* Return to Work section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Return to Work</h2>
            <p className="mb-2">Select one:</p>
            
            <div className="mb-4">
              <RadioGroup 
                value={data.workStatus || "returned"} 
                onValueChange={(value) => handleRadioChange("workStatus", value)}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <RadioGroupItem value="noMissedTime" id="noMissedTime" className="mt-1" />
                    <Label htmlFor="noMissedTime" className="text-sm ml-2">
                      I have not missed<br />time from work
                    </Label>
                  </div>
                  <div className="flex items-start">
                    <RadioGroupItem value="notReturned" id="notReturned" className="mt-1" />
                    <Label htmlFor="notReturned" className="text-sm ml-2">
                      I have not<br />returned to work
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="returned" id="returned" className="mt-1" />
                    <Label htmlFor="returned" className="text-sm ml-2">I returned to work on:</Label>
                    <Input 
                      value={data.returnToWorkDate || ""} 
                      onChange={(e) => handleTextChange("returnToWorkDate", e.target.value)}
                      className="ml-2 w-40"
                    />
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            <p className="mb-2">I am working:</p>
            
            <div className="mb-4">
              <RadioGroup 
                value={data.workingStatus || "fullDutiesRegular"} 
                onValueChange={(value) => handleRadioChange("workingStatus", value)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <RadioGroupItem value="fullDutiesRegular" id="fullDutiesRegular" className="mt-1" />
                    <Label htmlFor="fullDutiesRegular" className="text-sm ml-2">
                      Full duties,<br />regular hours
                    </Label>
                  </div>
                  <div className="flex items-start">
                    <RadioGroupItem value="fullDutiesReduced" id="fullDutiesReduced" className="mt-1" />
                    <Label htmlFor="fullDutiesReduced" className="text-sm ml-2">
                      Full duties,<br />reduced hours
                    </Label>
                  </div>
                  <div className="flex items-start">
                    <RadioGroupItem value="modifiedDutiesRegular" id="modifiedDutiesRegular" className="mt-1" />
                    <Label htmlFor="modifiedDutiesRegular" className="text-sm ml-2">
                      Modified duties,<br />regular hours
                    </Label>
                  </div>
                  <div className="flex items-start">
                    <RadioGroupItem value="modifiedDutiesReduced" id="modifiedDutiesReduced" className="mt-1" />
                    <Label htmlFor="modifiedDutiesReduced" className="text-sm ml-2">
                      Modified duties,<br />reduced hours
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <RadioGroup value={data.workingStatus === "otherWork" ? "otherWork" : ""}>
                  <div className="flex items-center">
                    <RadioGroupItem 
                      value="otherWork" 
                      id="otherWork" 
                      onClick={() => handleRadioChange("workingStatus", "otherWork")}
                    />
                    <Label htmlFor="otherWork" className="text-sm ml-2">Other:</Label>
                    {data.workingStatus === "otherWork" && (
                      <Input 
                        value={data.otherWorkingStatus || ""} 
                        onChange={(e) => handleTextChange("otherWorkingStatus", e.target.value)}
                        className="ml-2 w-64"
                      />
                    )}
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div className="mb-4">
              <Label className="block mb-1 text-sm">My return to work is going:</Label>
              <Textarea 
                value={data.returnToWorkComments || ""} 
                onChange={(e) => handleTextChange("returnToWorkComments", e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="mb-4">
              <Label className="block mb-1 text-sm">I expect to return to work on:</Label>
              <div className="flex items-center">
                <Input 
                  value={data.expectedReturnDate || ""} 
                  onChange={(e) => handleTextChange("expectedReturnDate", e.target.value)}
                  className="w-40"
                />
                <span className="text-xs text-gray-500 ml-2">Date</span>
              </div>
            </div>
            
            <div className="mb-4">
              <Label className="block mb-1 text-sm">I have the following concerns about returning to work:</Label>
              <Textarea 
                value={data.returnConcerns || ""} 
                onChange={(e) => handleTextChange("returnConcerns", e.target.value)}
                className="w-full min-h-[50px]"
              />
            </div>
            
            <div className="mb-4">
              <Label className="block mb-1 text-sm">I was most recently in contact with:</Label>
              <div className="flex items-center flex-wrap">
                <Input 
                  value={data.employerContact || ""} 
                  onChange={(e) => handleTextChange("employerContact", e.target.value)}
                  className="w-48"
                />
                <span className="text-xs text-gray-500 mx-2">(Name of employer contact)</span>
                <span className="mx-2">on</span>
                <Input 
                  value={data.employerContactDate || ""} 
                  onChange={(e) => handleTextChange("employerContactDate", e.target.value)}
                  className="w-32"
                />
                <span className="text-xs text-gray-500 ml-2">Date</span>
              </div>
            </div>
          </div>
          
          {/* Recovery section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Recovery</h2>
            <p className="mb-2">Select one:</p>
            
            <div className="mb-4">
              <RadioGroup 
                value={data.recoveryStatus || "notRecovered"} 
                onValueChange={(value) => handleRadioChange("recoveryStatus", value)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <RadioGroupItem value="notRecovered" id="notRecovered" className="mt-1" />
                    <Label htmlFor="notRecovered" className="text-sm ml-2">
                      I have not fully recovered from my workplace injury.
                    </Label>
                  </div>
                  <div className="flex items-start">
                    <RadioGroupItem value="fullyRecovered" id="fullyRecovered" className="mt-1" />
                    <Label htmlFor="fullyRecovered" className="text-sm ml-2">
                      I have fully recovered from my workplace injury.
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            <div className="mb-4">
              <Label className="block mb-1 text-sm">I have provided the following comments about my recovery:</Label>
              <Textarea 
                value={data.recoveryComments || ""} 
                onChange={(e) => handleTextChange("recoveryComments", e.target.value)}
                className="w-full min-h-[50px]"
              />
            </div>
          </div>
        </div>
        
        <FormFooter 
          workerId={data.workerId} 
          submissionDate={data.submissionDate}
          currentPage={1}
          totalPages={3}
        />
      </div>
      
      {/* Page 2 */}
      <div className="page bg-white mx-auto p-8 mb-8 shadow-md" style={{ maxWidth: "816px", minHeight: "1056px" }}>
        {/* Pain scale section */}
        <div className="mb-6">
          <Label className="block mb-1 text-sm">I rate my current pain/discomfort on a scale of 1-10, where 1 is no pain and 10 is severe pain out of 10.</Label>
          <RadioGroup 
            value={data.painScale || "3"} 
            onValueChange={(value) => handleRadioChange("painScale", value)}
            className="grid grid-cols-5 gap-2"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <div key={num} className="flex items-center justify-center border border-gray-300 p-2">
                <RadioGroupItem value={num.toString()} id={`pain${num}`} />
                <Label htmlFor={`pain${num}`} className="text-sm ml-1">{num}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        {/* Medical treatment section */}
        <div className="mb-6">
          <p className="mb-2">Select one:</p>
          
          <div className="mb-4">
            <RadioGroup 
              value={data.treatmentStatus || "noTreatment"} 
              onValueChange={(value) => handleRadioChange("treatmentStatus", value)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <RadioGroupItem value="noTreatment" id="noTreatment" className="mt-1" />
                  <Label htmlFor="noTreatment" className="text-sm ml-2">
                    I am not continuing to receive medical treatment for my workplace injury.
                  </Label>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start">
                    <RadioGroupItem value="receivingTreatment" id="receivingTreatment" className="mt-1" />
                    <Label htmlFor="receivingTreatment" className="text-sm ml-2">
                      I am continuing to receive medical treatment for my workplace injury from:
                    </Label>
                  </div>
                  {data.treatmentStatus === "receivingTreatment" && (
                    <div className="ml-6 mt-2">
                      <Input 
                        value={data.medicalProviderType || ""} 
                        onChange={(e) => handleTextChange("medicalProviderType", e.target.value)}
                        className="w-full md:w-64"
                      />
                      <span className="text-xs text-gray-500 block mt-1">(Medical Provider Type)</span>
                    </div>
                  )}
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="mb-4">
            <Label className="block mb-1 text-sm">My last medical treatment was</Label>
            <div className="flex items-center flex-wrap">
              <Input 
                value={data.lastTreatmentDate || ""} 
                onChange={(e) => handleTextChange("lastTreatmentDate", e.target.value)}
                className="w-32"
              />
              <span className="text-xs text-gray-500 mx-2">Date</span>
              <span className="mx-2">from</span>
              <Input 
                value={data.lastTreatmentProvider || ""} 
                onChange={(e) => handleTextChange("lastTreatmentProvider", e.target.value)}
                className="w-48"
              />
              <span className="text-xs text-gray-500 ml-2">(Medical Provider Name)</span>
            </div>
          </div>
          
          <div className="mb-4">
            <Label className="block mb-1 text-sm">My next medical treatment is</Label>
            <div className="flex items-center flex-wrap">
              <Input 
                value={data.nextTreatmentDate || ""} 
                onChange={(e) => handleTextChange("nextTreatmentDate", e.target.value)}
                className="w-32"
              />
              <span className="text-xs text-gray-500 mx-2">Date</span>
              <span className="mx-2">from</span>
              <Input 
                value={data.nextTreatmentProvider || ""} 
                onChange={(e) => handleTextChange("nextTreatmentProvider", e.target.value)}
                className="w-48"
              />
              <span className="text-xs text-gray-500 ml-2">(Medical Provider Name)</span>
            </div>
          </div>
          
          <div className="mb-4">
            <Label className="block mb-1 text-sm">I am attending a Chiropractor or Physiotherapist</Label>
            <div className="flex items-center">
              <Input 
                value={data.therapyFrequency || ""} 
                onChange={(e) => handleTextChange("therapyFrequency", e.target.value)}
                className="w-48"
              />
              <span className="text-xs text-gray-500 ml-2">(Frequency)</span>
            </div>
          </div>
          
          <p className="mb-2">Select one:</p>
          
          <div className="mb-4">
            <RadioGroup 
              value={data.medicationStatus || "noMedication"} 
              onValueChange={(value) => handleRadioChange("medicationStatus", value)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <RadioGroupItem value="noMedication" id="noMedication" className="mt-1" />
                  <Label htmlFor="noMedication" className="text-sm ml-2">
                    I am not taking medication for my workplace injury.
                  </Label>
                </div>
                <div className="flex items-start">
                  <RadioGroupItem value="takingMedication" id="takingMedication" className="mt-1" />
                  <Label htmlFor="takingMedication" className="text-sm ml-2">
                    I am taking medication for my workplace injury:
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-end">
              <Input 
                value={data.medicationName || ""} 
                onChange={(e) => handleTextChange("medicationName", e.target.value)}
                className="w-64"
                disabled={data.medicationStatus !== "takingMedication"}
              />
              <span className="text-xs text-gray-500 ml-2">(Name of prescribed medication)</span>
            </div>
          </div>
          
          <p className="mb-2">Select one:</p>
          
          <div className="mb-4">
            <RadioGroup 
              value={data.exerciseStatus || "noExercises"} 
              onValueChange={(value) => handleRadioChange("exerciseStatus", value)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <RadioGroupItem value="noExercises" id="noExercises" className="mt-1" />
                  <Label htmlFor="noExercises" className="text-sm ml-2">
                    I am not doing home exercises for my workplace injury.
                  </Label>
                </div>
                <div className="flex items-start">
                  <RadioGroupItem value="doingExercises" id="doingExercises" className="mt-1" />
                  <Label htmlFor="doingExercises" className="text-sm ml-2">
                    I am doing home exercises for my workplace injury.
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="mb-4">
            <Label className="block mb-1 text-sm">List the exercises you are doing:</Label>
            <Textarea 
              value={data.exerciseList || ""} 
              onChange={(e) => handleTextChange("exerciseList", e.target.value)}
              className="w-full min-h-[50px]"
              disabled={data.exerciseStatus !== "doingExercises"}
            />
          </div>
        </div>
        
        <FormFooter 
          workerId={data.workerId} 
          submissionDate={data.submissionDate}
          currentPage={2}
          totalPages={3}
        />
      </div>
      
      {/* Page 3 */}
      <div className="page bg-white mx-auto p-8 mb-8 shadow-md" style={{ maxWidth: "816px", minHeight: "1056px" }}>
        {/* Other Information section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Other Information</h2>
          
          <div className="mb-4">
            <Label className="block mb-1 text-sm">I would like to provide the following additional information about my claim/injury:</Label>
            <Textarea 
              value={data.additionalInfo || ""} 
              onChange={(e) => handleTextChange("additionalInfo", e.target.value)}
              className="w-full min-h-[60px]"
            />
          </div>
        </div>
        
        {/* Certification section */}
        <div className="mb-6 text-sm">
          <p className="mb-2">
            I certify that the information given on this form is true, correct and complete to the best of my knowledge. 
            I agree to notify the Workers Compensation Board of Manitoba (WCB) immediately once I return to any form of 
            work and/or employment. I understand that it is an offence to knowingly make a false statement to the WCB. I 
            also understand that it is an offence to withhold information from WCB which affects my entitlement to compensation 
            (e.g., full or partial recovery from injury, ability to return to work, sources of additional income, etc.). 
            I understand that refusing to co-operate with, or follow my treatment, may result in the WCB reducing or suspending my benefits.
          </p>
          
          <p className="mb-2">I understand that the Privacy Notice applies to the personal information collected in this document.</p>
        </div>
        
        <FormFooter 
          workerId={data.workerId} 
          submissionDate={data.submissionDate}
          currentPage={3}
          totalPages={3}
        />
      </div>
    </div>
  );
}
