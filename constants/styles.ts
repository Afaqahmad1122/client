// Common style objects jo baar baar use honge

export const commonStyles = {
  // Container styles
  container: "flex-1 bg-gray-50",
  screenContainer: "flex-1 bg-white",

  // Padding
  padding: {
    screen: "px-4 py-6",
    card: "p-4",
    button: "px-6 py-3",
  },

  // Flexbox
  flex: {
    row: "flex-row",
    col: "flex-col",
    center: "items-center justify-center",
    between: "flex-row items-center justify-between",
    start: "items-start",
  },

  // Text styles
  text: {
    heading: "text-2xl font-bold text-gray-900",
    subheading: "text-xl font-semibold text-gray-800",
    body: "text-base text-gray-700",
    caption: "text-sm text-gray-500",
    price: "text-lg font-bold text-primary-600",
    error: "text-sm text-error",
  },

  // Button styles
  button: {
    primary: "bg-primary-500 rounded-lg px-6 py-3",
    primaryText: "text-white font-semibold text-base",
    secondary: "bg-gray-200 rounded-lg px-6 py-3",
    secondaryText: "text-gray-800 font-semibold text-base",
    outline: "border-2 border-primary-500 rounded-lg px-6 py-3",
    outlineText: "text-primary-600 font-semibold text-base",
    disabled: "bg-gray-300 rounded-lg px-6 py-3",
    disabledText: "text-gray-500 font-semibold text-base",
  },

  // Card styles
  card: {
    base: "bg-white rounded-xl shadow-sm border border-gray-200",
    elevated: "bg-white rounded-xl shadow-md border border-gray-100",
  },

  // Input styles
  input: {
    base: "bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-base",
    focused: "bg-white border-primary-500",
    error: "bg-white border-error",
  },

  // Badge/Chip styles
  badge: {
    primary: "bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm",
    success: "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm",
    error: "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm",
  },

  // Spacing
  spacing: {
    xs: "gap-2",
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
  },

  // Shadow
  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  },
};
