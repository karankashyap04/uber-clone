import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";

const data = [
  {
    key: "1",
    title: "Get a ride",
    screen: "MapScreen",
    image: "https://links.papareact.com/3pn",
  },
  {
    key: "2",
    title: "Order food",
    screen: "EatsScreen",
    image: "https://links.papareact.com/28w",
  },
];

export default function NavigationOptions() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 w-40 m-2`}>
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 mt-4 w-10 bg-black rounded-full`}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
