import colors from "@/app/constants/colors";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import RowItem, { RowSeperator } from "../rowItem/rowItem";
import currencies from "../../data/currencies.json";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useConversionContext } from "@/app/util/conversionContext";

const CurrencyList = ({ navigation, route }: any) => {
  const { baseCurrency, setBaseCurrency, quoteCurrency, setQuoteCurrency } =
    useConversionContext();
  // this is for the dynamic height beyond the internall software
  const insets = useSafeAreaFrame();
  //   extract from route
  const params = route.params || {};
  const { isBaseCurrency } = params;

  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusBarColor}
      />
      {/* for listinf the currency  */}
      <FlatList
        //   fetched from the api
        data={currencies}
        renderItem={({ item }) => {
          // comparing the activeCUrrency withe the selected item
          let selected = false;
          if (isBaseCurrency && item === baseCurrency) {
            selected = true;
          } else if (!isBaseCurrency && item === quoteCurrency) {
            selected = true;
          }

          return (
            <RowItem
              title={item}
              //   onclicking bring back to the initail screen and selecting teh selected value
              onPress={() => {
                if (isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                // params.onChange(item);
                navigation.pop();
              }}
              rightIcons={
                // show only if the user clicked  on the currency
                selected && (
                  <View style={currency.icons}>
                    <Entypo
                      name="check"
                      size={20}
                      color={colors.statusBarColor}
                    />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeperator />}
        ListFooterComponent={() => <View style={{ paddingBottom: insets.y }} />}
      />
    </View>
  );
};
// providing the style``
const currency = StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    backgroundColor: colors.whiteColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
export default CurrencyList;
