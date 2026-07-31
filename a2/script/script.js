
// Problem 1 
function matchWinner(teamAGoals, teamBGoals) {
    if (typeof (teamAGoals) !== "number" || typeof (teamBGoals) !== "number") {
        return "Invalid"
    }
    if (teamAGoals > teamBGoals) {
        return "Team A Won"
    }
    else if (teamAGoals < teamBGoals) {
        return "Team B Won"
    }
    else if (teamAGoals === teamBGoals) {
        return "Draw"
    }
}





// Problem 2 
function isElevatorSafe(weights) {
    let weightSummery = 0
    if (!Array.isArray(weights)) {
        return "Invalid"
    }
    for (let weight of weights) {
        weightSummery += weight;
    }
    return weightSummery <= 400 ? true : false
}





// Problem 3 —
function calculateAiCost(tokensUsed) {
    if (typeof (tokensUsed) !== "number" || tokensUsed < 0) {
        return "Invalid";
    }
    let cost = 0;
    if (tokensUsed <= 500) {
        cost += 0;
    } else {
        const extraTokens = (tokensUsed - 500)
        cost = Math.floor(extraTokens / 100) * 5;
    }
    return cost
}





// Problem 4 — 
function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length <= 0) {
        return "Invalid"
    }
    let bestRestaurant = restaurants[0];
    for (let restaurant of restaurants) {
        if (restaurant.rating > bestRestaurant.rating) {
            bestRestaurant = restaurant
        }
    }
    return bestRestaurant.name.toUpperCase()
}





// Problem 5 
function averageResponseTime(times) {
    if (Array.isArray(times) === false) {
        return "Invalid";
    }

    if (times.length === 0) {
        return "Invalid";
    }

    let total = 0;

    for (let i = 0; i < times.length; i++) {
        if (typeof (times[i]) !== "number") {
            return "Invalid"
        }
        total += times[i]
    }

    let averageTime = total / times.length;

    return averageTime
}
