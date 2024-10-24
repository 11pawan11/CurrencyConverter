import colors from "@/app/constants/colors";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface InputProps {
  text: string;
  value: string;
  onButtonPress: () => void;
  onChangeText: (text: string) => void;
  editable: boolean;
  keyboardType: any;
}

const InputText: React.FC<InputProps> = ({
  text,
  onButtonPress,
  onChangeText,
  ...props
}) => {
  const containerStyles = [inputType.container];
  if (props.editable === false) {
    containerStyles.push({
      ...inputType.container,
      ...inputType.containerDisabled,
    });
  }
  return (
    //view the button and input field
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={inputType.button}>
        <Text style={inputType.textButton}>{text}</Text>
      </TouchableOpacity>
      <TextInput
        style={inputType.currencyInputValue}
        onChangeText={onChangeText}
        {...props} //this takes all the other  props and applies them to the TextInput
      />
    </View>
  );
};
// styling teh  input field and the whole this
const inputType = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 5,
    color: "white",
  },
  button: {
    backgroundColor: "white",
    padding: 20,
    borderRightWidth: 1,
    borderColor: "gray",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: "center",
  },
  currencyInputValue: {
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 0,
    fontSize: 16,
    width: "60%",
    color: "black",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
  },
  containerDisabled: {
    backgroundColor:colors.somegray
  },
});
export default InputText;
