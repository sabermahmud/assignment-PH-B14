/*
Problem 1 — Battery Level Status
*/
const getBatteryStatus = (batteryLife: number): string => {
  if (batteryLife <= 20) {
    return "Low";
  } else if (batteryLife <= 50) {
    return "Medium";
  } else if (batteryLife <= 90) {
    return "High";
  }
  return "Full";
};
/*
Problem 2 — Table Booking Confirmation
*/
interface Booking {
  name: string;
  guests: number;
  time: string;
}
const formatBookingConfirmation = (booking: Booking): string => {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};

/*
Problem 3 — Weekly Expense Tracker
*/
const calculateWeeklyTotal = (expenses: number[]): number => {
  const totalExpenses:number = expenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return totalExpenses;
};

/*
Problem 4 — Traffic Light Action
*/
type Light = "red" | "yellow" | "green";
const getTrafficAction = (light: Light): string => {
  if (light === "red") {
    return "Stop";
  } else if (light === "yellow") {
    return "Slow Down";
  }
  return "Go";
};

/*
Problem 5 — Quiz Score Summary
*/
interface QuizScores {
  total: number;
  average: number;
}
const getQuizSummary = (scores: number[]): QuizScores => {
  const totalScores: number = scores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const scoreAverage: number = totalScores / scores.length;

  if (scores.length === 0) {
    return {
      total: totalScores,
      average: 0
    };
  } else {
    return {
      total: totalScores,
      average: scoreAverage
    };
  }
};
