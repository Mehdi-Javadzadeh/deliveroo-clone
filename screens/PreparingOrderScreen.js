import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import GlobalStyles from "../components/GlobalStyles";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  }, []);
  return (
    <SafeAreaView style={[styles.additionalStyle, GlobalStyles]}>
      <View className="bg-gray-100 opacity-95 w-full h-80 justify-center items-center rounded-full">
        <Animatable.Image
          source={require("../assets/wait.gif")}
          animation="slideInUp"
          iterationCount={1}
          className="h-64 w-80 opacity-95"
        />
      </View>
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-base my-10 text-white font-extrabold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={45} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({
  additionalStyle: {
    backgroundColor: "#00ccbb",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
