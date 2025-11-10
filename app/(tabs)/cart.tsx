import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EmptyState } from "../../components/ui/EmptyState";

export default function CartScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-1 px-4 py-6">
        <Text className="text-3xl font-bold text-gray-900 mb-6">Cart</Text>
        <EmptyState
          icon="cart-outline"
          title="Your cart is empty"
          message="Add some products to get started"
        />
      </View>
    </SafeAreaView>
  );
}
