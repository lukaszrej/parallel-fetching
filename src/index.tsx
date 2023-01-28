import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import { BreadcrumbsProvider } from "./contexts/BreadcrumbsContext";
import { ContentProvider } from "./contexts/ContentContext";
import { HeaderProvider } from "./contexts/HeaderContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContentProvider>
      <BreadcrumbsProvider>
        <SidebarProvider>
          <HeaderProvider>
            <App />
          </HeaderProvider>
        </SidebarProvider>
      </BreadcrumbsProvider>
    </ContentProvider>
  </React.StrictMode>
);
