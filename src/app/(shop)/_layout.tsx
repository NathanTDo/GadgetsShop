import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const TabsLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <Tabs screenOptions={{
          tabBarActiveTintColor: "#1BC464",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            borderRadius: 50,
            paddingTop: 5,
            marginHorizontal: 20,
            marginBottom: 30,
            height: 70,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
          },
          headerShown: false,
        }}
        >
            <Tabs.Screen name="index" options={{ headerShown: false }} />
            <Tabs.Screen name="orders" options={{ headerShown: false }} />
        </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;