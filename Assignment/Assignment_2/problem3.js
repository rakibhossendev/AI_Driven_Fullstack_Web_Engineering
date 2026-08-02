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
console.log(calculateAiCost([100]))