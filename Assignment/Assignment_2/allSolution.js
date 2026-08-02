//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
        return "Invalid";
    }
    if(teamAGoals > teamBGoals){
        return "Team A Won";
    }else if(teamBGoals > teamAGoals){
        return "Team B Won";
    }else{
        return "Draw";
    }
}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    if(!Array.isArray(weights)){
        return "Invalid";
    }
    let totalWeight = 0;
    for(let i =0; i<weights.length; i++){
        totalWeight += weights[i];
    }
    if(totalWeight <= 400){
        return true
    }else{
        return false
    }
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== "number" || tokensUsed < 0){
        return "Invalid";
    }
    let totalCost = 0; 
    if(tokensUsed > 500){
        let extraTokenUsed = tokensUsed - 500;
        let usedTokenBlock = Math.floor(extraTokenUsed / 100);
        totalCost = usedTokenBlock * 5;
    }
    return totalCost;
}

//Problem-04: Top Rated Restaurant Finder
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

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length <= 0) {
        return "Invalid";
   }
   
   let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i] !== "number"){
            return "Invalid";
        }
        total += times[i];
    }

  return total / times.length;
}


