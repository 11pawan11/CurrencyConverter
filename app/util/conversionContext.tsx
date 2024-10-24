import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { apiRequestForRates } from "./api";

interface ConversionContextProps {
  quoteCurrency: string;
  baseCurrency: string;
  setQuoteCurrency: (value: string) => void;
  setBaseCurrency: (value: string) => void;
  swapCurrency: () => void;
  conversionRate: Record<string, number>;
}

//create a context with default Value
const ConversionContext = createContext<ConversionContextProps | undefined>(
  undefined
);

//create a provider to wrap the app
export const useConversionContext = () => {
  const context = useContext(ConversionContext);
  if (!context) {
    throw new Error(
      "useConversionContext must be used within a ConversionProvider"
    );
  }
  return context;
};

export const ConversionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("AUD");
  const [conversionRate, setConversionRate] = useState<Record<string, number>>(
    {}
  );

  //swap teh cureencies
  const swapCurrency = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency); // swap the currencies
  };

  // The context value that will be provided to the children
  const contextValue = {
    swapCurrency,
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    conversionRate,
  };

  useEffect(() => {
    fetchData();
  }, [baseCurrency, quoteCurrency]);

  const fetchData = async () => {
    //fetch data from API
    try {
      const response = await apiRequestForRates();
      const { data } = response;
      setConversionRate(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
