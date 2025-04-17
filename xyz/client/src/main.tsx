import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add print styles to document
const style = document.createElement('style');
style.textContent = `
  @media print {
    .no-print {
      display: none !important;
    }
    
    .page {
      margin: 0;
      box-shadow: none;
      page-break-after: always;
    }
    
    body {
      background-color: white !important;
    }
  }
`;
document.head.appendChild(style);

// Add title
const title = document.createElement('title');
title.textContent = 'WCB Manitoba Forms';
document.head.appendChild(title);

createRoot(document.getElementById("root")!).render(<App />);
