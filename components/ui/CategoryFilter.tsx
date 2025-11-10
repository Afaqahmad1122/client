import React from "react";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import { Category } from "../../types";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
}) => {
  return (
    <View className="mb-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        className="flex-row"
        contentContainerStyle={{ paddingHorizontal: 4, gap: 8 }}
      >
        {categories.map((category) => {
          const isSelected = category.id === selectedCategoryId;
          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => onSelectCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                isSelected ? "bg-primary-500" : "bg-gray-200"
              }`}
            >
              <Text
                className={`${
                  isSelected
                    ? "text-white font-semibold"
                    : "text-gray-700 font-medium"
                } text-sm`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
