import colors from "@/app/constants/colors";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Pressable,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import InputText from "./inputText";

const WelcomeScreen = () => {
  return (
    <View style={welcomeScreen.container}>
      {/* //change the color of the status bar  */}
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.statusBarColor}
      />
      {/* //adding the image  */}
      <Image
        style={welcomeScreen.imageDesign}
        source={require("../../assets/currencyConverter.png")}
        resizeMode="contain"
      />
      <Text style={welcomeScreen.textScreen}>Currency Converter</Text>

      <View style={welcomeScreen.inputField}>
        <View>
          <InputText
            text="USD"
            value="123"
            onButtonPress={() => alert("To do")}
            onChangeText={(text: any) => console.log(text)}
            keyboardType="numeric"
            editable={true}
          />
        </View>

        <View>
          <InputText
            text="GBP"
            value="123"
            onButtonPress={() => alert("To do")}
            onChangeText={(text: any) => console.log(text)}
            editable={false}
            keyboardType="numeric"
          />
        </View>
      </View>
      <Text style={welcomeScreen.textScreen}>
        1 USD is equal to 0.8356 as on{" "}
      </Text>
    </View>
  );
};
const welcomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    justifyContent: "center",
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
});
export default WelcomeScreen;
