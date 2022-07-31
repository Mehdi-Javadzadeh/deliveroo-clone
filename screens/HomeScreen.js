import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import GlobalStyles from "../components/GlobalStyles";
import React, { useEffect, useState } from "react";
import * as Icons from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"] {
      ...,
      restaurants[]->{
      ...,
      dishes[]->,
    },
  }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="font-bold text-xl">Current Location</Text>
            <Icons.ChevronDownIcon size={20} color="#00ccbb" />
          </View>
        </View>
        <Icons.UserIcon size={35} color="#00ccbb" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2  px-4">
        <View className="flex-1 flex-row items-center space-x-2 bg-gray-100 p-1.5">
          <Icons.SearchIcon size={20} color="gray" />
          <TextInput
            keyboardType="default"
            placeholder="Restaurants and cuisines"
          />
        </View>
        <Icons.AdjustmentsIcon color="#00ccbb" />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}

        {featuredCategories?.map((Category) => (
          <FeaturedRow
            key={Category._id}
            id={Category._id}
            title={Category.name}
            description={Category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
