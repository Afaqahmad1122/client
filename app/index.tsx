import React, { useState, useMemo } from "react";
import { View, FlatList, Text, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../components/ui/SearchBar";
import { CategoryFilter } from "../components/ui/CategoryFilter";
import { ProductCard } from "../components/ui/ProductCard";
import { EmptyState } from "../components/ui/EmptyState";
import { categories, mockProducts } from "../data/mockData";
import { Product } from "../types";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [refreshing, setRefreshing] = useState(false);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    let products = mockProducts;

    // Filter by category
    if (selectedCategory !== "all") {
      products = products.filter(
        (product) => product.categoryId === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    return products;
  }, [searchQuery, selectedCategory]);

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart logic
    console.log("Add to cart:", product.name);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    // TODO: Fetch products from API
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View className="w-1/2 px-2">
      <ProductCard product={item} onAddToCart={handleAddToCart} />
    </View>
  );

  const ListHeaderComponent = () => (
    <>
      {/* Header Section */}
      <View className="px-4 py-6 pb-4 bg-white border-b border-gray-200">
        <View className="mb-4">
          <Text className="text-3xl font-bold text-gray-900">Shop</Text>
          <Text className="text-sm text-gray-500 mt-1">
            Discover amazing products
          </Text>
        </View>

        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={handleClearSearch}
        />
      </View>

      {/* Category Filter */}
      <View className="px-4 pt-4 pb-2 bg-white">
        <CategoryFilter
          categories={categories}
          selectedCategoryId={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </View>
    </>
  );

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListHeaderComponent={ListHeaderComponent}
          contentContainerStyle={{
            padding: 16,
            paddingBottom: 32,
          }}
          columnWrapperStyle={{ gap: 8 }}
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={["#0ea5e9"]}
            />
          }
        />
      ) : (
        <View className="flex-1 bg-gray-50">
          <ListHeaderComponent />
          <EmptyState
            icon="search-outline"
            title="No products found"
            message={
              searchQuery
                ? `No products match "${searchQuery}"`
                : "Try selecting a different category"
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
}
