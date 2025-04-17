import { FormHeader } from "./FormHeader";
import { FormFooter } from "./FormFooter";
import { Button } from "@/components/ui/button";
import { PrescriptionDrug, OTCDrug, MedicalSupply, ParkingExpense, MileageExpense, TransportationExpense, FormData } from "../data/types";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2 } from "lucide-react";

interface MedicalExpenseFormProps {
  data: FormData;
  onTableItemChange: (tableField: string, index: number, field: string, value: string) => void;
  onAddTableItem: (tableField: string) => void;
  onRemoveTableItem: (tableField: string, index: number) => void;
}

export function MedicalExpenseForm({ 
  data, 
  onTableItemChange,
  onAddTableItem,
  onRemoveTableItem
}: MedicalExpenseFormProps) {
  return (
    <div>
      {/* Page 1 */}
      <div className="page bg-white mx-auto p-8 mb-8 shadow-md" style={{ maxWidth: "816px", minHeight: "1056px" }}>
        <FormHeader 
          title="Medical & Travel Expense Request" 
          claimNumber={data.claimNumber} 
        />
        
        <div className="mb-6">
          <p className="mb-4">
            <span className="font-medium">{data.workerName}</span> requested reimbursement for the following medical and/or travel expenses:
          </p>
          
          {/* Section: Prescription Drugs */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Prescription Drugs</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead>Drug Name</TableHead>
                    <TableHead>Prescription Date</TableHead>
                    <TableHead>Date Purchased</TableHead>
                    <TableHead>Healthcare Provider Name</TableHead>
                    <TableHead>Paid Amount</TableHead>
                    <TableHead className="no-print">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.prescriptionDrugs && (data.prescriptionDrugs as PrescriptionDrug[]).map((drug, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Input 
                          value={drug.name} 
                          onChange={(e) => onTableItemChange("prescriptionDrugs", index, "name", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={drug.prescriptionDate} 
                          onChange={(e) => onTableItemChange("prescriptionDrugs", index, "prescriptionDate", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={drug.purchaseDate} 
                          onChange={(e) => onTableItemChange("prescriptionDrugs", index, "purchaseDate", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={drug.provider} 
                          onChange={(e) => onTableItemChange("prescriptionDrugs", index, "provider", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={drug.amount} 
                          onChange={(e) => onTableItemChange("prescriptionDrugs", index, "amount", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell className="no-print">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => onRemoveTableItem("prescriptionDrugs", index)}
                          className="px-2"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-2 no-print">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAddTableItem("prescriptionDrugs")}
                className="flex items-center gap-1"
              >
                <Plus size={16} /> Add Prescription Drug
              </Button>
            </div>
          </div>
          
          {/* Section: Over-the-Counter Drugs */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Over-the-Counter Drugs</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead>Drug Name</TableHead>
                    <TableHead>Date Purchased</TableHead>
                    <TableHead>Paid Amount</TableHead>
                    <TableHead>Seller's Name</TableHead>
                    <TableHead>Reason for Purchasing</TableHead>
                    <TableHead className="no-print">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.otcDrugs && (data.otcDrugs as OTCDrug[]).map((drug, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Input 
                          value={drug.name} 
                          onChange={(e) => onTableItemChange("otcDrugs", index, "name", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={drug.purchaseDate} 
                          onChange={(e) => onTableItemChange("otcDrugs", index, "purchaseDate", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={drug.amount} 
                          onChange={(e) => onTableItemChange("otcDrugs", index, "amount", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={drug.seller} 
                          onChange={(e) => onTableItemChange("otcDrugs", index, "seller", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={drug.reason} 
                          onChange={(e) => onTableItemChange("otcDrugs", index, "reason", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell className="no-print">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => onRemoveTableItem("otcDrugs", index)}
                          className="px-2"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-2 no-print">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAddTableItem("otcDrugs")}
                className="flex items-center gap-1"
              >
                <Plus size={16} /> Add OTC Drug
              </Button>
            </div>
          </div>
          
          {/* Section: Medical Supplies */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Bandages, Braces or Other Medical Supplies</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead>Item Purchased</TableHead>
                    <TableHead>Date Purchased</TableHead>
                    <TableHead>Was this Prescribed?</TableHead>
                    <TableHead>Healthcare Provider Name</TableHead>
                    <TableHead>Paid Amount</TableHead>
                    <TableHead>Seller's Name</TableHead>
                    <TableHead className="no-print">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.medicalSupplies && (data.medicalSupplies as MedicalSupply[]).map((supply, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Input 
                          value={supply.item} 
                          onChange={(e) => onTableItemChange("medicalSupplies", index, "item", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={supply.purchaseDate} 
                          onChange={(e) => onTableItemChange("medicalSupplies", index, "purchaseDate", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={supply.prescribed} 
                          onChange={(e) => onTableItemChange("medicalSupplies", index, "prescribed", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={supply.provider} 
                          onChange={(e) => onTableItemChange("medicalSupplies", index, "provider", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={supply.amount} 
                          onChange={(e) => onTableItemChange("medicalSupplies", index, "amount", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={supply.seller} 
                          onChange={(e) => onTableItemChange("medicalSupplies", index, "seller", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell className="no-print">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => onRemoveTableItem("medicalSupplies", index)}
                          className="px-2"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-2 no-print">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAddTableItem("medicalSupplies")}
                className="flex items-center gap-1"
              >
                <Plus size={16} /> Add Medical Supply
              </Button>
            </div>
          </div>
          
          {/* Section: Parking */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Parking for Medical Appointments</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead>Address of Healthcare Provider/Medical Facility</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Paid Amount</TableHead>
                    <TableHead>Meter Used?</TableHead>
                    <TableHead>Meter Number</TableHead>
                    <TableHead className="no-print">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.parkingExpenses && (data.parkingExpenses as ParkingExpense[]).map((parking, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Input 
                          value={parking.address} 
                          onChange={(e) => onTableItemChange("parkingExpenses", index, "address", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={parking.date} 
                          onChange={(e) => onTableItemChange("parkingExpenses", index, "date", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={parking.amount} 
                          onChange={(e) => onTableItemChange("parkingExpenses", index, "amount", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={parking.meter} 
                          onChange={(e) => onTableItemChange("parkingExpenses", index, "meter", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={parking.meterNumber} 
                          onChange={(e) => onTableItemChange("parkingExpenses", index, "meterNumber", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell className="no-print">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => onRemoveTableItem("parkingExpenses", index)}
                          className="px-2"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-2 no-print">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAddTableItem("parkingExpenses")}
                className="flex items-center gap-1"
              >
                <Plus size={16} /> Add Parking Expense
              </Button>
            </div>
          </div>
          
          {/* Section: Mileage */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Mileage to Medical Appointments</h2>
            <p className="text-sm mb-2">
              The WCB will generally reimburse only those transportation costs which are in excess of costs that would be
              incurred by the worker while travelling to and from work.
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead>Appointment Date</TableHead>
                    <TableHead>Address of Healthcare Provider/Medical Facility</TableHead>
                    <TableHead>Address of Workplace</TableHead>
                    <TableHead>Number of km (Round Trip)</TableHead>
                    <TableHead className="no-print">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.mileageExpenses && (data.mileageExpenses as MileageExpense[]).map((mileage, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Input 
                          value={mileage.date} 
                          onChange={(e) => onTableItemChange("mileageExpenses", index, "date", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={mileage.facilityAddress} 
                          onChange={(e) => onTableItemChange("mileageExpenses", index, "facilityAddress", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={mileage.workplaceAddress} 
                          onChange={(e) => onTableItemChange("mileageExpenses", index, "workplaceAddress", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <Input 
                          value={mileage.distance} 
                          onChange={(e) => onTableItemChange("mileageExpenses", index, "distance", e.target.value)}
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell className="no-print">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => onRemoveTableItem("mileageExpenses", index)}
                          className="px-2"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-2 no-print">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAddTableItem("mileageExpenses")}
                className="flex items-center gap-1"
              >
                <Plus size={16} /> Add Mileage Expense
              </Button>
            </div>
          </div>
        </div>
        
        <FormFooter 
          workerId={data.workerId} 
          submissionDate={data.submissionDate}
          currentPage={1}
          totalPages={2}
        />
      </div>
      
      {/* Page 2 */}
      <div className="page bg-white mx-auto p-8 mb-8 shadow-md" style={{ maxWidth: "816px", minHeight: "1056px" }}>
        {/* Bus or Taxi Fare section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Bus or Taxi Fare for Medical Appointments*</h2>
          <p className="text-sm mb-2">*Note: Pre-approval is required from your WCB representative to claim taxi fare(s).</p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead>Appointment Date</TableHead>
                  <TableHead>Address of Starting Point</TableHead>
                  <TableHead>Address of Healthcare Provider/Medical Facility</TableHead>
                  <TableHead>Bus or Taxi (indicate one)</TableHead>
                  <TableHead>Total Fare Paid</TableHead>
                  <TableHead className="no-print">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.transportationExpenses && (data.transportationExpenses as TransportationExpense[]).map((transport, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input 
                        value={transport.date} 
                        onChange={(e) => onTableItemChange("transportationExpenses", index, "date", e.target.value)}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        value={transport.startingPoint} 
                        onChange={(e) => onTableItemChange("transportationExpenses", index, "startingPoint", e.target.value)}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        value={transport.facilityAddress} 
                        onChange={(e) => onTableItemChange("transportationExpenses", index, "facilityAddress", e.target.value)}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        value={transport.transportType} 
                        onChange={(e) => onTableItemChange("transportationExpenses", index, "transportType", e.target.value)}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell>
                      <Input 
                        value={transport.fare} 
                        onChange={(e) => onTableItemChange("transportationExpenses", index, "fare", e.target.value)}
                        className="w-full"
                      />
                    </TableCell>
                    <TableCell className="no-print">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => onRemoveTableItem("transportationExpenses", index)}
                        className="px-2"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-2 no-print">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onAddTableItem("transportationExpenses")}
              className="flex items-center gap-1"
            >
              <Plus size={16} /> Add Transportation Expense
            </Button>
          </div>
        </div>
        
        {/* Privacy notice */}
        <div className="mb-6 mt-16">
          <p className="text-sm">I understand that the Privacy Notice applies to the personal information collected in this document.</p>
        </div>
        
        <FormFooter 
          workerId={data.workerId} 
          submissionDate={data.submissionDate}
          currentPage={2}
          totalPages={2}
        />
      </div>
    </div>
  );
}
