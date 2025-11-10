import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  const handlePress = () => {
    // TODO: Create product detail page
    // router.push(`/product/${product.id}` as any);
    console.log("Navigate to product:", product.id);
  };

  const handleAddToCart = (e: any) => {
    e.stopPropagation();
    onAddToCart?.(product);
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4"
      activeOpacity={0.7}
    >
      {/* Product Image */}
      <View className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-100">
        <Image
          source={{ uri: product.image }}
          className="w-full h-full"
          resizeMode="cover"
        />
        {!product.inStock && (
          <View className="absolute inset-0 bg-black/50 items-center justify-center">
            <Text className="text-white font-semibold">Out of Stock</Text>
          </View>
        )}
      </View>

      {/* Product Info */}
      <View className="mb-2">
        <Text
          className="text-lg font-semibold text-gray-800 mb-1"
          numberOfLines={2}
        >
          {product.name}
        </Text>
        <Text className="text-lg font-semibold text-primary-600">
          {formatPrice(product.price)}
        </Text>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity
        onPress={handleAddToCart}
        disabled={!product.inStock}
        className={`flex-row items-center justify-center gap-2 rounded-lg px-6 py-3 ${
          product.inStock ? "bg-primary-500" : "bg-gray-300"
        }`}
      >
        <Ionicons
          name="cart-outline"
          size={18}
          color={product.inStock ? "#ffffff" : "#9ca3af"}
        />
        <Text
          className={`font-semibold text-base ${
            product.inStock ? "text-white" : "text-gray-500"
          }`}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
