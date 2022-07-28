import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCart from "./CategoryCart";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      className="bg-white"
    >
      {/* CategoryCart */}

      <CategoryCart
        imgUrl="https://links.papareact.com/wru"
        title="Testing 1"
      />
      <CategoryCart
        imgUrl="https://links.papareact.com/wru"
        title="Testing 2"
      />
      <CategoryCart
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CategoryCart
        imgUrl="https://links.papareact.com/wru"
        title="Testing 1"
      />
      <CategoryCart
        imgUrl="https://links.papareact.com/wru"
        title="Testing 2"
      />
      <CategoryCart
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Categories;
