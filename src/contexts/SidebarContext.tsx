import { createContext, FC, useContext, useState } from "react";
import { useFetchData } from "../useFetchData";
import { SIDEBAR_URL } from "../urlRepository";
import { AllDataType, ContextProps } from "../types";

const SidebarContext = createContext<AllDataType | undefined>(
  {} as AllDataType
);

export const SidebarProvider: FC<ContextProps> = ({ children }) => {
  const [sidebar, setSidebar] = useState<AllDataType>();
  useFetchData(SIDEBAR_URL as string, setSidebar);

  return (
    <SidebarContext.Provider value={sidebar}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
