import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      onClick={handlePrint}
      className="bg-gray-700 hover:bg-gray-800 text-white flex items-center gap-2"
    >
      <Printer size={18} />
      Print Form
    </Button>
  );
}
