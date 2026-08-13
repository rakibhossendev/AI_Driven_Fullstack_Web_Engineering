const products = [
  {
    id: "p_101",
    name: "Ultra-Bright LED Desk Lamp",
    price: 34.99,
    quantity: 45,
    description: "Features 5 color modes, 6 brightness levels, and a built-in USB charging port for devices.",
    category: "Office Supplies",
    rating: 4.6,
    sku: "LMP-LED-01"
  },
  {
    id: "p_102",
    name: "Premium Matcha Green Tea Powder",
    price: 21.50,
    quantity: 120,
    description: "Ceremonial grade, 100% organic stone-ground green tea sourced directly from Uji, Japan.",
    category: "Grocery",
    rating: 4.8,
    sku: "TEA-MTC-02"
  },
  {
    id: "p_103",
    name: "Heavy-Duty Resistance Bands",
    price: 18.95,
    quantity: 85,
    description: "Set of 5 natural latex fitness loops varying from light to extra-heavy resistance.",
    category: "Fitness",
    rating: 4.4,
    sku: "BND-FIT-03"
  },
  {
    id: "p_104",
    name: "Minimalist Leather Backpack",
    price: 110.00,
    quantity: 15,
    description: "Water-resistant, top-grain leather bag with a dedicated 15-inch protective laptop sleeve.",
    category: "Apparel & Bags",
    rating: 4.7,
    sku: "BPK-LTH-04"
  },
  {
    id: "p_105",
    name: "Wireless Charging Pad 15W",
    price: 24.99,
    quantity: 200,
    description: "Qi-certified fast charging mat compatible with all modern Apple and Android smartphones.",
    category: "Electronics",
    rating: 4.2,
    sku: "CHG-WRL-05"
  },
  {
    id: "p_106",
    name: "Ergonomic Memory Foam Pillow",
    price: 45.00,
    quantity: 0,
    description: "Contoured design tailored to support side, back, and stomach sleepers by aligning the spine.",
    category: "Home & Bedding",
    rating: 4.5,
    sku: "PLW-MEM-06"
  },
  {
    id: "p_107",
    name: "Chef's Grade Stainless Steel Skillet",
    price: 69.99,
    quantity: 22,
    description: "Triple-ply bonded construction ensures even heat distribution across the entire cooking surface.",
    category: "Kitchenware",
    rating: 4.9,
    sku: "SKL-SST-07"
  },
  {
    id: "p_108",
    name: "Hydrating Hyaluronic Acid Serum",
    price: 15.50,
    quantity: 140,
    description: "Pure formula locks in skin surface moisture, reducing visible fine lines and dry patches.",
    category: "Beauty & Personal Care",
    rating: 4.3,
    sku: "SRM-HA-08"
  },
  {
    id: "p_109",
    name: "Portable Bluetooth Speaker Mini",
    price: 39.95,
    quantity: 65,
    description: "Compact IPX7 waterproof body delivers punchy bass and up to 12 hours of playtime.",
    category: "Electronics",
    rating: 4.6,
    sku: "SPK-BT-09"
  },
  {
    id: "p_110",
    name: "Organic Arabica Coffee Beans (1kg)",
    price: 28.00,
    quantity: 90,
    description: "Medium roast whole beans boasting subtle chocolate notes and a smooth citrus finish.",
    category: "Grocery",
    rating: 4.7,
    sku: "COF-ARB-10"
  }
];

const getCartTotal = (arrayOfObject) => {
    let total = arrayOfObject.reduce((accumulator,value) => {
        return accumulator + (value.price * value.quantity);
    },0);

    return total;
}

console.log(getCartTotal(products));