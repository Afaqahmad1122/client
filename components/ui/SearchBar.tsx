import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = "Search products...",
  onClear,
}) => {
  return (
    <View className="relative">
      <View className="absolute left-3 top-0 bottom-0 z-10 items-center justify-center">
        <Ionicons name="search" size={20} color="#6b7280" />
      </View>
      <TextInput
        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-base pl-10 pr-10"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {value.length > 0 && (
        <TouchableOpacity
          onPress={onClear}
          className="absolute right-3 top-0 bottom-0 items-center justify-center"
        >
          <Ionicons name="close-circle" size={20} color="#9ca3af" />
        </TouchableOpacity>
      )}
    </View>
  );
};
