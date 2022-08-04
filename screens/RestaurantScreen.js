import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import GlobalStyles from "../components/GlobalStyles";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import * as Icons_S from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketTotal } from "../features/basketSlice";
import { setRestaurant } from "../features/restauranSlice";

const RestaurantScreen = () => {
  const {
    params: {
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
    },
  } = useRoute();

  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, []);

  return (
    <>
      <BasketIcon />

      <ScrollView className="flex-1 bg-white ">
        <View className="relative">
          <Image
            className="w-full h-56 white"
            source={{ uri: urlFor(imgUrl).url() }}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full "
          >
            <Icons_S.ArrowLeftIcon size={20} color={"#00ccbb"} />
          </TouchableOpacity>
        </View>

        <View>
          <View className="px-4 pt-4">
            <Text className="text-2xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Icons_S.StarIcon size={22} color={"green"} opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Icons_S.LocationMarkerIcon
                  size={22}
                  color={"gray"}
                  opacity={0.4}
                />
                <Text className="text-gray-500">Nearby . {address}</Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4 text-justify">
              {short_description}
            </Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <Icons_S.QuestionMarkCircleIcon
              size={20}
              color={"gray"}
              opacity={0.6}
            />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <Icons_S.ChevronRightIcon size={20} color={"#00ccbb"} />
          </TouchableOpacity>
        </View>

        <View className="pb-40">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* Dish-Rows */}

          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
