import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { CartItem as CartItemType } from "../../types";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onEdit: (productId: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
  onEdit,
}) => {
  const { product, quantity } = item;
  const translateX = useSharedValue(0);
  const SWIPE_THRESHOLD = -80;

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationX < 0) {
        translateX.value = e.translationX;
      }
    })
    .onEnd((e) => {
      if (e.translationX < SWIPE_THRESHOLD) {
        translateX.value = withSpring(-80);
      } else {
        translateX.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleRemove = () => {
    onRemove(product.id);
  };

  return (
    <View className="mb-3">
      {/* Delete Action Background */}
      <View className="absolute right-0 top-0 bottom-0 w-20 bg-red-500 rounded-2xl items-center justify-center">
        <TouchableOpacity onPress={handleRemove}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Swipeable Content */}
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={animatedStyle}
          className="bg-white rounded-2xl overflow-hidden"
        >
          <View className="flex-row items-center p-4">
            {/* Product Image */}
            <Image
              source={{ uri: product.image }}
              className="w-16 h-16 rounded-xl mr-3"
              resizeMode="cover"
            />

            {/* Product Info */}
            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-900 mb-1">
                {product.name}
              </Text>
              <View className="flex-row items-center mb-2">
                <Ionicons name="time-outline" size={14} color="#6b7280" />
                <Text className="text-xs text-gray-500 ml-1">02.01-07.01</Text>
              </View>

              {/* Quantity Selector */}
              <View className="flex-row items-center bg-gray-100 rounded-lg w-24 justify-between px-2 py-1">
                <TouchableOpacity
                  onPress={() => {
                    if (quantity > 1) {
                      onUpdateQuantity(product.id, quantity - 1);
                    }
                  }}
                  className="w-6 h-6 items-center justify-center"
                >
                  <Text className="text-gray-900 text-lg font-semibold">-</Text>
                </TouchableOpacity>
                <Text className="text-gray-900 font-semibold">{quantity}</Text>
                <TouchableOpacity
                  onPress={() => onUpdateQuantity(product.id, quantity + 1)}
                  className="w-6 h-6 items-center justify-center"
                >
                  <Text className="text-gray-900 text-lg font-semibold">+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Price and Edit Icon */}
            <View className="items-end">
              <TouchableOpacity
                onPress={() => onEdit(product.id)}
                className="mb-2"
              >
                <Ionicons name="pencil-outline" size={18} color="#6b7280" />
              </TouchableOpacity>
              <Text className="text-base font-semibold text-gray-900">
                {(product.price * quantity).toFixed(2)} €
              </Text>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};
