import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";
import * as Icons_Solid from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestauranCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Restaurant", {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    });
  };

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={handleNavigation}
    >
      <Image
        className="w-64 h-36 rounded-sm"
        source={{ uri: urlFor(imgUrl).url() }}
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Icons_Solid.StarIcon size={22} color={"green"} opacity={0.5} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-start space-x-1">
          <Icons.LocationMarkerIcon color={"gray"} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestauranCard;
