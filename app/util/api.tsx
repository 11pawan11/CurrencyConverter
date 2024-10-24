import axios from "axios";
import { Alert } from "react-native";
export const apiRequestForRates = async () => {
  try {
    const response = await axios(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_y4Mkjrp6q658Inbs8WqYUKF7ha5AJD6Uihtk4zVA`
    );
    return response.data;
  } catch (error: any) {
    Alert.alert("Something went wrong", error.message);
  }
};
