import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Black.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
