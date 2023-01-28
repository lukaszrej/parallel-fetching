import { createContext, FC, useContext, useState } from "react";
import { useFetchData } from "../useFetchData";
import { CONTENT_URL } from "../urlRepository";
import { AllDataType, ContextProps } from "../types";

const ContentContext = createContext<AllDataType | undefined>(
  {} as AllDataType
);

export const ContentProvider: FC<ContextProps> = ({ children }) => {
  const [content, setContent] = useState<AllDataType>();
  useFetchData(CONTENT_URL as string, setContent);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
