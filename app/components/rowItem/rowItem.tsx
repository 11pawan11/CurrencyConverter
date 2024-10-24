import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface RowItemsProps {
  title: string;
  onPress: () => void;
  rightIcons: any;
}
const RowItem: React.FC<RowItemsProps> = ({ title, onPress, rightIcons }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.rightIcons}>{rightIcons}</View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  rightIcons: {
    padding: 0,
  },
  text: {
    fontSize: 18,
  },
});
export default RowItem;

export const RowSeperator = () => (
  <View
    style={{
      height: 1,
      backgroundColor: "#ccc",
    }}
  />
);
