function topRatedRestaurant(restaurants) {
   if(!Array.isArray(restaurants) || restaurants.length <= 0){
      return "Invalid";
   }

   let topRated = restaurants[0]["rating"];
   let topRatedRestaurantName = restaurants[0]["name"];

   for(let i =0; i<restaurants.length; i++){
      if(restaurants[i]["rating"] > topRated){
         topRated = restaurants[i]["rating"];
         topRatedRestaurantName = restaurants[i]["name"];
      }
   }
   return topRatedRestaurantName.toUpperCase();
}

console.log(topRatedRestaurant([{"name":"Burger King","rating":3.9}]))