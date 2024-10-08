import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import CreateWorkoutContext from "../context/CreateWorkoutContext";
import { useState } from "react";
import React from "react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

export default function RootLayout() {

  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  })


  const [infoData, setInfoData] = useState<any>([]);

  return (
    <ConvexAuthProvider client={convex} storage={secureStorage}>
    <CreateWorkoutContext.Provider value={{infoData, setInfoData}}>
    <Stack screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="index" options={{headerShown: false}}/> */}
      <Stack.Screen name="(tabs)"/>
    </Stack>
    </CreateWorkoutContext.Provider>
    </ConvexAuthProvider>
  );
}
