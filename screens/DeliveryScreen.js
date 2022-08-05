import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import * as Icons_S from "react-native-heroicons/solid";
import { selectRestaurant } from "../features/restauranSlice";
import { useSelector } from "react-redux";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const resaurant = useSelector(selectRestaurant);

  return (
    <>
      <SafeAreaView
        className="z-50"
        style={[GlobalStyles.droidSafeArea, styles.additionalStyle]}
      >
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icons_S.XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View
          style={styles.addedShadow}
          className="bg-white mx-5 my-2 rounded-md p-6 z-50"
        >
          <View className="flex-row justify-between items-center space-x-2 mb-2">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>

            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              className="h-14 w-14"
            />
          </View>

          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at {resaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: resaurant.lat,
          longitude: resaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        className="flex-1 mt-10 z-0"
      >
        <Marker
          coordinate={{
            latitude: resaurant.lat,
            longitude: resaurant.long,
          }}
          title={resaurant.title}
          description={resaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-24">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-200 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Mehdi Javadzadeh</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-[#00ccbb] text-xl mr-6 font-bold">Call</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  additionalStyle: {
    backgroundColor: "#00ccbb",
    flex: 0.4,
  },
  addedShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default DeliveryScreen;
