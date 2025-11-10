import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 20,
          paddingTop: 10,
          borderRadius: 25,
          marginHorizontal: 16,
          marginBottom: 20,
          position: "absolute",
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                ...(focused && {
                  backgroundColor: "#81c784",
                  borderRadius: 9999,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  minWidth: 70,
                }),
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={focused ? 22 : size}
                color={focused ? "#000000" : color}
              />
              {focused && (
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "700",
                    color: "#000000",
                    marginTop: 2,
                  }}
                >
                  Home
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "list",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                ...(focused && {
                  backgroundColor: "#81c784",
                  borderRadius: 9999,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  minWidth: 70,
                }),
              }}
            >
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={focused ? 22 : size}
                color={focused ? "#000000" : color}
              />
              {focused && (
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "700",
                    color: "#000000",
                    marginTop: 2,
                  }}
                >
                  list
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                ...(focused && {
                  backgroundColor: "#81c784",
                  borderRadius: 9999,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  minWidth: 70,
                }),
              }}
            >
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={focused ? 22 : size}
                color={focused ? "#000000" : color}
              />
              {focused && (
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "700",
                    color: "#000000",
                    marginTop: 2,
                  }}
                >
                  Profile
                </Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
