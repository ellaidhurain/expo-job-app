import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Welcome,
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
} from "../components";

const Home = () => {
  const router = useRouter();
  return (
    // safe area view used to show view without status bar or notches
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        {/* A stack navigator allows users to navigate between screens in a "stack" or a LIFO (Last In, First Out) order. */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite},
          headerShadowVisible:false,
          headerLeft:()=>(
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight:()=>(
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle:""
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1,padding:SIZES.medium}}>
            <Welcome/>
            <Popularjobs/>
            <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
