import React from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";
import tw from "twrnc";
import NavigationOptions from "../components/NavigationOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.mainLogo}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png?20180914002846",
          }}
        />

        <NavigationOptions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
