const phoneData = [
  {
    brand: "Apple",
    model: "iPhone 15 Pro",
    storage: "256GB",
    color: "Natural Titanium",
    price: 1099,
    isAvailable: true
  },
  {
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    storage: "512GB",
    color: "Titanium Black",
    price: 1299,
    isAvailable: true
  },
  {
    brand: "Google",
    model: "Pixel 8 Pro",
    storage: "128GB",
    color: "Bay Blue",
    price: 999,
    isAvailable: true
  },
  {
    brand: "OnePlus",
    model: "OnePlus 12",
    storage: "256GB",
    color: "Silky Black",
    price: 799,
    isAvailable: false
  },
  {
    brand: "Xiaomi",
    model: "14 Ultra",
    storage: "512GB",
    color: "White",
    price: 1199,
    isAvailable: true
  }
];

// Expensive Phone 500 <=
// Chipest Phone: 500 >= 

let expensivePhones = phoneData.filter((el) => {
    if(el.price >= 500){
        return true;
    }

})

console.log(expensivePhones);