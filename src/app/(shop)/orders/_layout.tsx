import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

const OrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: 'Orders',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
    </Stack>
  );
};

export default OrdersLayout;
