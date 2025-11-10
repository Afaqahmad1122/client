E-commerce Store

Features:

Product listings, search, and categories

Cart and checkout

Supabase + Stripe integration via Edge Functions

Admin dashboard (could be a web app using Supabase as backend)

Learn:
Stripe integration, secure backend logic, multi-platform data sharing.

- total screens will be
  1- 1. Home/Products screen (app/(tabs)/index.tsx)
  Kya hoga:
  Top: Search bar
  Categories: Horizontal scroll (All, Electronics, Clothing, etc.)
  Products grid: 2 columns, product cards
  Bottom navigation: Home, Cart, Profile
  Components needed:
  SearchBar.tsx - Top search input
  CategoryFilter.tsx - Horizontal category chips
  ProductCard.tsx - Product image, name, price, "Add to Cart" button

2. Product detail screen (app/product/[id].tsx)
   Kya hoga:
   Product image (swipeable/carousel)
   Product name, price
   Description
   Quantity selector
   "Add to Cart" button
   Back button
   Components needed:
   ProductImage.tsx - Image carousel
   QuantitySelector.tsx - +/- buttons
   AddToCartButton.tsx - Add button with cart icon
3. Cart screen (app/(tabs)/cart.tsx)
   Kya hoga:
   Cart items list (image, name, price, quantity)
   Quantity update (+/-)
   Remove item button
   Subtotal, Tax, Total
   "Checkout" button (bottom)
   Components needed:
   CartItem.tsx - Single cart item row
   CartSummary.tsx - Price breakdown
   CheckoutButton.tsx - Bottom checkout button
4. Profile screen (app/(tabs)/profile.tsx)
   Kya hoga:
   User info (name, email)
   Orders history (list)
   Settings
   Logout button
   Components needed:
   UserInfo.tsx - Profile header
   OrderHistory.tsx - Past orders list
   SettingsList.tsx - Settings options
5. Checkout screen (app/checkout.tsx)
   Kya hoga:
   Order summary (items, prices)
   Shipping address form
   Payment method (Stripe placeholder)
   "Place Order" button
   Components needed:
   OrderSummary.tsx - Items list
   AddressForm.tsx - Shipping form
   PaymentSection.tsx - Payment UI

Shared components (reusable)
Header.tsx - Top navigation bar
BottomTabs.tsx - Bottom navigation (Home, Cart, Profile)
Button.tsx - Reusable button
LoadingSpinner.tsx - Loading indicator
EmptyState.tsx - Empty cart/products message
