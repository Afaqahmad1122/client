import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface EmptyStateProps {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = "search-outline",
  title,
  message,
}) => {
  return (
    <View className="flex-1 items-center justify-center py-20 px-4">
      <Ionicons name={icon} size={64} color="#d1d5db" />
      <Text className="text-xl font-semibold text-gray-800 mt-4 text-center">
        {title}
      </Text>
      {message && (
        <Text className="text-sm text-gray-500 mt-2 text-center">
          {message}
        </Text>
      )}
    </View>
  );
};
