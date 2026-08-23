"use strict";
/*
Problem 1 — Battery Level Status
*/
const getBatteryStatus = (batteryLife) => {
    if (batteryLife <= 20) {
        return "Low";
    }
    else if (batteryLife <= 50) {
        return "Medium";
    }
    else if (batteryLife <= 90) {
        return "High";
    }
    return "Full";
};
const formatBookingConfirmation = (booking) => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};
/*
Problem 3 — Weekly Expense Tracker
*/
const calculateWeeklyTotal = (expenses) => {
    const totalExpenses = expenses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return totalExpenses;
};
const getTrafficAction = (light) => {
    if (light === "red") {
        return "Stop";
    }
    else if (light === "yellow") {
        return "Slow Down";
    }
    return "Go";
};
const getQuizSummary = (scores) => {
    const totalScores = scores.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    const scoreAverage = totalScores / scores.length;
    if (scores.length === 0) {
        return {
            total: totalScores,
            average: 0
        };
    }
    else {
        return {
            total: totalScores,
            average: scoreAverage
        };
    }
};
