import { useEffect, Dispatch, SetStateAction } from "react";
import { AllDataType } from "./types";

export const useFetchData = (
  URL: string,
  setState: Dispatch<SetStateAction<AllDataType | undefined>>
) => {
  useEffect(() => {
    const fetchData = async () => {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setState(data));
    };

    fetchData();
  }, []);
};
