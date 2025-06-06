import { View, Text } from "react-native";
import { Stack } from "expo-router";
import "../../global.css";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
        name='(shop)' 
        options={{ headerShown: false, title: 'Shop' }} 
      />
      <Stack.Screen 
        name='product' 
        options={{ headerShown: true, title: 'product' }} 
      />
      <Stack.Screen 
        name='categories' 
        options={{ headerShown: true, title: 'categories' }} />
      <Stack.Screen 
        name='cart' 
        options={{ presentation: 'modal', title: 'Shopping Cart' }} />
      <Stack.Screen 
        name='auth' 
        options={{ headerShown: true }} />
    </Stack>
  );
}

export default RootLayout;