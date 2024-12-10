import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack screenOptions={{ headerStyle: { backgroundColor: theme.headerBackground }, headerTintColor: theme.text, headerShadowVisible: false }}>
        <Stack.Screen name="index" options={{ headerShown: true, title: 'Home', headerTitle: 'Home' }} />
        <Stack.Screen name="contact" options={{ headerShown: true, title: 'Contact Me', headerTitle: 'Contact Me' }} />
        <Stack.Screen name="spritesheet" options={{ headerShown: true, title: 'Sprite Selector', headerTitle: 'Sprite Selector' }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    
  );
}
