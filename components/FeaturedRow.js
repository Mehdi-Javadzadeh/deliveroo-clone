import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import * as Icons from "react-native-heroicons/outline";
import RestauranCard from "./RestauranCard";
import Sanityclient from "../sanity";

const FeaturedRow = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    Sanityclient.fetch(
      `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
      ...,
      dishes[]->,
      type-> {
        name
      }
    },
  }[0]
    `,
      { id }
    ).then((data) => {
      setRestaurants(data?.restaurants);
    });
  }, [id]);
  // console.log(restaurants);
  return (
    <View className="bg-white">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{title}</Text>
        <Icons.ArrowRightIcon size={20} color="#00ccbb" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <RestauranCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
