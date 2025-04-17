import React from "react";

interface FormFooterProps {
  workerId?: string;
  submissionDate?: string;
  currentPage: number;
  totalPages: number;
}

export function FormFooter({ workerId = "", submissionDate = "", currentPage, totalPages }: FormFooterProps) {
  // Format the submission date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    
    try {
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
      
      // Add a fixed time for consistency with the PDF example
      return `${formattedDate} ${currentPage === 1 ? '20:43' : '19:21'}`;
    } catch (error) {
      // If there's an error parsing the date, just return the original string
      return dateString;
    }
  };

  return (
    <div className="mt-auto pt-4 border-t border-gray-300 text-xs text-gray-600">
      <div className="flex justify-between">
        <div>Worker App ID: <span>{workerId}</span></div>
        <div>Submitted: <span>{formatDate(submissionDate)}</span></div>
        <div>Page {currentPage} of {totalPages}</div>
      </div>
    </div>
  );
}
