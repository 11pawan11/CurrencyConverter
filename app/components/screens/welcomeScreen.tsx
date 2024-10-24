import {
  Image,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import InputText from "./inputText";
import { format } from "date-fns";
import Buttons from "./button";
import React, { useState } from "react";
import KeyBoardSpacer from "./keyboardSpacer";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "@/app/constants/colors";
import { useConversionContext } from "@/app/util/conversionContext";

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [inputValue, setInputValue] = useState("1");
  const { baseCurrency, quoteCurrency, swapCurrency, conversionRate } =
    useConversionContext();

  const date = new Date();
  const text = "Reverse the currency";
  const conversionRateCurrency = conversionRate[quoteCurrency];

  // Calculate the converted value based on input value and conversion rate
  const convertedValue =
    inputValue && conversionRate[baseCurrency]
      ? (
          (parseFloat(inputValue) * conversionRateCurrency) /
          conversionRate[baseCurrency]
        ).toFixed(2)
      : "0";

  return (
    <SafeAreaView style={welcomeScreen.container}>
      {/* //change the color of the status bar  */}
      <StatusBar barStyle={"light-content"} backgroundColor={"brown"} />

      {/* //show the icons  */}
      <SafeAreaView style={welcomeScreen.icons}>
        <TouchableOpacity onPress={() => navigation.push("Options")}>
          <Entypo name="cog" size={32} color={colors.whiteColor} />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView scrollEnabled={isScrolled}>
        <View style={welcomeScreen.content}>
          {/* //adding the image  */}
          <Image
            style={welcomeScreen.imageDesign}
            source={require("../../../assets/images/currencyConverter.png")}
            resizeMode="contain"
          />
          <Text style={welcomeScreen.textScreen}>Currency Converter</Text>

          <View style={welcomeScreen.inputField}>
            <View>
              <InputText
                text={baseCurrency}
                value={inputValue}
                onButtonPress={() =>
                  navigation.push("Currency List", {
                    title: "Base Currency",
                    isBaseCurrency: true,
                  })
                }
                onChangeText={(text: any) => setInputValue(text)}
                keyboardType="numeric"
                editable={true}
              />
            </View>

            <View>
              <InputText
                text={quoteCurrency}
                value={convertedValue}
                onButtonPress={() =>
                  navigation.push("Currency List", {
                    title: "Quote Currency",
                    isBaseCurrency: false,
                  })
                }
                onChangeText={(text: any) => ""}
                editable={false}
                keyboardType="numeric"
              />
            </View>
          </View>
          <Text style={welcomeScreen.textScreen}>
            1 {baseCurrency} = {conversionRateCurrency} {quoteCurrency} on{" "}
            {format(date, "MMMM do, yyyy")}
          </Text>

          <Buttons text={text} onPressButton={() => swapCurrency()} />
          <KeyBoardSpacer
            onToggle={(keyboardIsVisible: any) => {
              setIsScrolled(keyboardIsVisible);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// get it from the dimensions``
const screen = Dimensions.get("window");

// styling the welcomscreen
const welcomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    padding: 10,
  },
  textScreen: {
    fontSize: 16,
    color: colors.textColor,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginVertical: 15,
  },
  imageDesign: {
    width: 200,
    height: 300,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  inputField: {
    gap: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  content: {
    paddingTop: screen.height * 0.01,
  },
  icons: {
    alignItems: "flex-end",
  },
});

export default WelcomeScreen;
