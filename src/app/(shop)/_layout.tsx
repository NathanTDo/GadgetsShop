import { Redirect, Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../../providers/auth-provider';
import { ActivityIndicator } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} {...props} style={{ color: '#1BC464' }} />;
}

const TabsLayout = () => {
  const { mounting, session } = useAuth();

  if (mounting) {
    return <ActivityIndicator />;
  }
  if (!session) {
    return <Redirect href="/auth" />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#1BC464',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            paddingTop: 5,
            height: 70,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            borderTopWidth: 1,
            borderTopColor: '#ddd',
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Shop',
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="shopping-cart" />;
            },
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: 'Orders',
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="book" />;
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;
