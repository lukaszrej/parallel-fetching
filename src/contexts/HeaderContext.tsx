import { createContext, FC, useContext, useState } from "react";
import { useFetchData } from "../useFetchData";
import { HEADER_URL } from "../urlRepository";
import { AllDataType, ContextProps } from "../types";

const HeaderContext = createContext<AllDataType | undefined>({} as AllDataType);

export const HeaderProvider: FC<ContextProps> = ({ children }) => {
  const [header, setHeader] = useState<AllDataType>();
  useFetchData(HEADER_URL as string, setHeader);

  return (
    <HeaderContext.Provider value={header}>{children}</HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
