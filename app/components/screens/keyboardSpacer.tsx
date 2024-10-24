import { useEffect, useState } from "react";
import {
  Dimensions,
  Keyboard,
  Platform,
  StyleSheet,
  View,
  KeyboardEvent,
} from "react-native";

interface KeyBoardSpacerProps {
  style?: object; // Define type for style prop
  onToggle?: (keyboardVisible: boolean, keyboardHeight: number) => void;
}

const KeyBoardSpacer: React.FC<KeyBoardSpacerProps> = ({
  style,
  onToggle = () => null,
}) => {
  const [keyBoardHeight, setKeyBoardHeight] = useState(0);

  // adjusting the height dynamically
  useEffect(() => {
    const updateKeyboardSpace = (event: KeyboardEvent) => {
      if (!event.endCoordinates) {
        return;
      }
      const screenHeight = Dimensions.get("window").height;
      // get fron teh event height
      const endHeightY = event.endCoordinates.screenY;
      const newKeyboardHeight = screenHeight - endHeightY;
      setKeyBoardHeight(newKeyboardHeight);
      // toggling set to be true and setting new height
      onToggle(true, newKeyboardHeight);
    };
    // for the event lister
    const showEvent =
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow";
    const showListener = Keyboard.addListener(showEvent, updateKeyboardSpace);

    // resetting teh keyboard space after user  is done typing
    const resetKeyboardSpace = () => {
      setKeyBoardHeight(0);
      onToggle(false, 0);
    };

    // for hiding the liseter``
    const hideEvent =
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide";
    const hideListener = Keyboard.addListener(hideEvent, resetKeyboardSpace);

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, [onToggle]);

  return (
    <View
      style={[keyboardStyle.container, { height: keyBoardHeight }, style]}
    />
  );
};

const keyboardStyle = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default KeyBoardSpacer;
