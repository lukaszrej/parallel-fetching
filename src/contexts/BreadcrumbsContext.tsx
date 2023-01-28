import { createContext, FC, useContext, useState } from "react";
import { useFetchData } from "../useFetchData";
import { BREADCRUMBS_URL } from "../urlRepository";
import { AllDataType, ContextProps } from "../types";

const BreadcrumbsContext = createContext<AllDataType | undefined>(
  {} as AllDataType
);

export const BreadcrumbsProvider: FC<ContextProps> = ({ children }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<AllDataType>();
  useFetchData(BREADCRUMBS_URL as string, setBreadcrumbs);

  return (
    <BreadcrumbsContext.Provider value={breadcrumbs}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};

export const useBreadcrumbs = () => useContext(BreadcrumbsContext);
