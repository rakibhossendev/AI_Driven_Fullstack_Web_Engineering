const getStockStatus = (inStock: number): string => {
    if(inStock === 0){
        return "Out Of Stock";
    }else if(inStock >= 1 && inStock <= 5){
        return "Almost Sold Out";
    }else if(inStock >= 6 && inStock <= 20){
        return "Available";
    }

    return "In Stock"
}

console.log(getStockStatus(5))
console.log(getStockStatus(6)); 
console.log(getStockStatus(20)); 
console.log(getStockStatus(21));
