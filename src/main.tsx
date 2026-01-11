import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ContentProvider } from "./hooks/ContentProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ContentProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContentProvider>
);
