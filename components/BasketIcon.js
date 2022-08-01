import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row items-center space-x-1">
        <Text>{items.length}</Text>
        <Text>View Basket</Text>
        <Text className="text-white font-extrabold">
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;

const styles = StyleSheet.create({});
