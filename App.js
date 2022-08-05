import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { store } from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Restaurant"
              component={RestaurantScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{
                presentation: "modal",
                animation: "slide_from_bottom",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PreparingOrderScreen"
              component={PreparingOrderScreen}
              options={{
                presentation: "fullScreenModal",
                animation: "slide_from_bottom",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{
                presentation: "fullScreenModal",
                animation: "slide_from_bottom",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
