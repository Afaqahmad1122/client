import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-1 px-4 py-6">
        <Text className="text-3xl font-bold text-gray-900 mb-6">Profile</Text>
        <View className="bg-gray-50 rounded-lg p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-900 mb-2">
            User Information
          </Text>
          <Text className="text-gray-600">Name: John Doe</Text>
          <Text className="text-gray-600">Email: john@example.com</Text>
        </View>
        <View className="bg-gray-50 rounded-lg p-4">
          <Text className="text-lg font-semibold text-gray-900 mb-2">
            Orders History
          </Text>
          <Text className="text-gray-600">No orders yet</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
