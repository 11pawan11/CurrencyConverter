import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../components/screens/welcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import OptionsScreen from "../components/screens/options";
import CurrencyList from "../components/screens/currencyList";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { ConversionProvider } from "../util/conversionContext";

//for stacking the screens
const Stack = createStackNavigator();
// main component
const MainStackNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <ConversionProvider>
        <Stack.Navigator>
          {/* home Screen`` */}
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={WelcomeScreen}
          />
          <Stack.Screen name="Options" component={OptionsScreen} />
          <Stack.Screen
            name="Currency List"
            component={CurrencyList}
            // access it from the route also the design and styling fo teh header
            options={({ navigation, route }) => ({
              title: (route.params as { title: string })?.title, // Type assertion here
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: colors.black,
                fontSize: 22,
                textTransform: "capitalize",
              },
              headerLeft: () => null,
              //this is fo the cross sign to close
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.pop()}>
                  <Entypo
                    name="cross"
                    size={30}
                    color={colors.statusBarColor}
                    style={{ padding: 10 }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      </ConversionProvider>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
