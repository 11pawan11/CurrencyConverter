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
  onChangeText: (text:string) => void;
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
    borderRightColor: "black",
  },
  button: {
    backgroundColor: "white",
    padding: 5,
    borderRightWidth: 1,
    borderColor: "gray",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  currencyInputValue: {
    padding: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  textButton: {
    fontWeight: "medium",
    fontSize: 15,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  containerDisabled: {
    // backgroundColor: "#f0f0f0",
    backgroundColor: "red",
  },
});
export default InputText;
