import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import '../../global.css';
import { ToastProvider } from 'react-native-toast-notifications';

const RootLayout = () => {
  return (
    <ToastProvider>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{ headerShown: false, title: 'Shop' }}
        />
        <Stack.Screen
          name="product"
          options={{ headerShown: false, title: 'product' }}
        />
        <Stack.Screen
          name="categories"
          options={{ headerShown: false, title: 'categories' }}
        />
        <Stack.Screen
          name="cart"
          options={{ presentation: 'modal', title: 'Shopping Cart' }}
        />
        <Stack.Screen name="auth" options={{ headerShown: true }} />
      </Stack>
    </ToastProvider>
  );
};

export default RootLayout;
