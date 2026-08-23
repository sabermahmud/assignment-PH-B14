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
  const totalExpenses = expenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return totalExpenses;
};

/*
Problem 4 — Traffic Light Action
এখানে traffic light-এর তিনটি possible color আছে:
"red" → "Stop"
"yellow" → "Slow Down"
"green" → "Go"
তোমার function একটি traffic light color পাবে এবং সেই color অনুযায়ী নির্দিষ্ট action return করবে।
আর assignment-এর বিশেষ requirement হলো, Light নামে একটি union type আগে তৈরি করতে হবে।
*/
type Light = "red" | "yellow" | "green"
const getTrafficAction = (light: Light): string => {
    if(light === "red"){
        return "Stop"
    }
    else if (light === "yellow"){
        return "Slow Down"
    }
  return "Go";
};
console.log(getTrafficAction("red"));
/*
Problem 5 — Quiz Score Summary
এখানে একজন student's quiz-এর সব score একটি array হিসেবে দেওয়া হবে।
তোমাকে দুটি তথ্যসহ একটি result return করতে হবে:
total → সব score-এর যোগফল
average → scoreগুলোর গড়
যেমন:
[8, 9, 7, 10]
এর ক্ষেত্রে:
total = 34
average = 8.5
আর array যদি empty হয়:
[]
তাহলে:
total = 0
average = 0
*/
