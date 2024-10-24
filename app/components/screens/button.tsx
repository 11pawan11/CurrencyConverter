import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  text: string;
  onPressButton: () => void;
}

const Buttons: React.FC<ButtonProps> = ({ text, onPressButton }) => {
  return (
    <TouchableOpacity onPress={onPressButton}>
      <View style={buttons.container}>
        <Image
          style={buttons.buttonImage}
          source={require("../../../assets/images/currencyConverter.png")}
          resizeMode="contain"
        />
        <Text style={buttons.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const buttons = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "lightgray",
    marginHorizontal: 68,
    borderRadius: 5,
  },
  buttonImage: {
    width: 25,
    height: 25,
  },
  textButton: {
    fontSize: 18,
  },
});
export default Buttons;
