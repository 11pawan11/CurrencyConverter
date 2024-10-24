import { Alert, Linking, StatusBar, Text, View } from "react-native";
import colors from "../../constants/colors";
import RowItem, { RowSeperator } from "../rowItem/rowItem";
import { Entypo } from "@expo/vector-icons";

const OptionsScreen = () => {
  const openlink = (url: any) =>
    Linking.openURL(url).catch(() =>
      Alert.alert("Something might wrong", "Please try again")
    );
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusBarColor}
      />
      <RowItem
        title={"Themes"}
        onPress={() => alert("TO do!")}
        rightIcons={<Entypo name="chevron-right" size={25} colors={"white"} />}
      />
      <RowSeperator />

      <RowItem
        title={"React Native"}
        onPress={() => openlink("https://pawanupreti.com.np/")}
        rightIcons={<Entypo name="export" size={25} colors={"white"} />}
      />
      <RowSeperator />
      <RowItem
        title={"Practice example"}
        onPress={() => openlink("https://pawanupreti.com.np/")}
        rightIcons={<Entypo name="attachment" size={25} colors={"white"} />}
      />
    </View>
  );
};
export default OptionsScreen;
