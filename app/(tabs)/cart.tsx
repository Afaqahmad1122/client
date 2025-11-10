import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { CartItem } from "../../components/ui/CartItem";
import { CartItem as CartItemType } from "../../types";
import { mockProducts } from "../../data/mockData";

// Mock cart data
const mockCartItems: CartItemType[] = [
  {
    product: mockProducts[2], // Cotton T-Shirt
    quantity: 1,
  },
  {
    product: mockProducts[3], // Running Shoes
    quantity: 1,
  },
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState<CartItemType[]>(mockCartItems);
  const [discountCode, setDiscountCode] = useState("");

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemove = (productId: string) => {
    setCartItems((items) =>
      items.filter((item) => item.product.id !== productId)
    );
  };

  const handleEdit = (productId: string) => {
    // TODO: Navigate to product detail or show edit modal
    console.log("Edit product:", productId);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const total = subtotal;

  return (
    <SafeAreaView className="flex-1 bg-green-light" edges={["top"]}>
      {/* Header */}
      <View className="bg-white rounded-b-3xl px-4 py-4 mb-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-lg items-center justify-center">
            <Ionicons name="menu" size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-900">Shipping list</Text>
          <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-lg items-center justify-center">
            <Ionicons name="ellipsis-vertical" size={24} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Cart Items */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemove}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <View className="bg-white rounded-2xl p-8 items-center">
            <Ionicons name="cart-outline" size={64} color="#9ca3af" />
            <Text className="text-lg font-semibold text-gray-900 mt-4">
              Your cart is empty
            </Text>
            <Text className="text-sm text-gray-500 mt-2">
              Add some products to get started
            </Text>
          </View>
        )}

        {/* Discount Code Section */}
        {cartItems.length > 0 && (
          <View className="bg-white rounded-2xl p-4 mb-4 mt-2">
            <View className="flex-row items-center">
              <TextInput
                placeholder="Enter your discount code"
                placeholderTextColor="#9ca3af"
                value={discountCode}
                onChangeText={setDiscountCode}
                className="flex-1 bg-gray-100 rounded-lg px-4 py-3 text-base text-gray-900"
              />
              <TouchableOpacity className="ml-3 bg-gray-200 rounded-lg px-6 py-3">
                <Text className="text-base font-semibold text-gray-900">
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Order Summary */}
        {cartItems.length > 0 && (
          <View className="bg-white rounded-2xl p-4 mb-4">
            <View className="flex-row justify-between mb-2">
              <Text className="text-base text-gray-900">Subtotal</Text>
              <Text className="text-base font-semibold text-gray-900">
                {subtotal.toFixed(2)} €
              </Text>
            </View>
            <View className="flex-row justify-between mt-2 pt-2 border-t border-gray-200">
              <Text className="text-lg font-bold text-gray-900">Total</Text>
              <Text className="text-lg font-bold text-gray-900">
                {total.toFixed(2)} €
              </Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Make a Purchase Button */}
      {cartItems.length > 0 && (
        <View className="px-4 pb-4 pt-2 bg-green-light">
          <TouchableOpacity className="bg-green-accent rounded-2xl py-4 items-center">
            <Text className="text-lg font-bold text-gray-900">
              Make a purchase
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
