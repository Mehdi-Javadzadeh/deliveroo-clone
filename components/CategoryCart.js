import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCart = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className=" relative mr-2 items-center">
      <Image className="h-20 w-20 rounded" source={{ uri: imgUrl }} />
      <Text className="text-white absolute bottom-1 left-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCart;
