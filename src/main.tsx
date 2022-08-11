import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// context
import { TimeListProvider } from "./contexts/TimeListContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TimeListProvider>
        <App />
      </TimeListProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
