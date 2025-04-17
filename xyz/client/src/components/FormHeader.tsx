import React from "react";
import { WCBLogo } from "./WCBLogo";

interface FormHeaderProps {
  title: string;
  claimNumber: string;
}

export function FormHeader({ title, claimNumber }: FormHeaderProps) {
  return (
    <div className="flex justify-between items-start border-b border-gray-300 pb-4 mb-6">
      <div className="flex items-start">
        <div className="mr-6">
          <WCBLogo />
        </div>
        <div className="mt-8">
          <div className="text-sm text-gray-600">333 Broadway</div>
          <div className="text-sm text-gray-600">Winnipeg, MB R3C 4W3</div>
          <div className="text-sm text-gray-600">Phone: (204) 954-4321</div>
          <div className="text-sm text-gray-600">Toll Free: 1-855-954-4321</div>
          <div className="text-sm text-gray-600">wcb.mb.ca</div>
        </div>
      </div>
      <div className="text-right mt-8">
        <h1 className="text-xl font-bold text-blue-900">{title}</h1>
        <div className="text-sm mt-2">
          Claim No. <span>{claimNumber}</span>
        </div>
      </div>
    </div>
  );
}
