import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import * as Icons_S from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  // const items = useSelector(selectBasketItems);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  console.log(items);
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400 text-justify">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#f3f3f4" }}
              className="h-20 w-20 rounded-3xl bg-gray-300 p-4"
              source={{ uri: urlFor(image).url() }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-3 pt-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <Icons_S.MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00ccbb" : "gray"}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <Icons_S.PlusCircleIcon size={40} color={"#00ccbb"} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
