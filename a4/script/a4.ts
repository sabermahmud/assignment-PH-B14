/*
Problem 1 — Battery Level Status
তোমাকে এমন একটি function বানাতে হবে যেখানে battery percentage দিলে সেটার ওপর ভিত্তি করে একটি status text ফেরত দেবে।
যেমন:
10% হলে → "Low"
35% হলে → "Medium"
75% হলে → "High"
100% হলে → "Full"
অর্থাৎ percentage-এর কোন range-এ পড়ছে, তার ওপর নির্ভর করে একটি নির্দিষ্ট status return করতে হবে।
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
এখানে একটি restaurant booking-এর তথ্য থাকবে:
customer's name
কতজন guests
booking-এর time
এই তিনটি তথ্য ব্যবহার করে একটি সম্পূর্ণ confirmation sentence return করতে হবে।
যেমন booking-এর তথ্য যদি হয়:
Aisha, 4 guests, 7:00 PM
তাহলে return হবে:
Aisha's table for 4 guests is confirmed at 7:00 PM.
গুরুত্বপূর্ণ বিষয় হলো, sentence-এর মধ্যে দেওয়া তথ্যগুলো booking object থেকেই আসতে হবে। নিজের মতো করে "Aisha" বা "4" লিখে দেওয়া যাবে না।
*/
interface Booking {
    name : string;
    guests: number;
    time: string;
}
const formatBookingConfirmation = (booking : Booking):string => {
return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}
console.log(formatBookingConfirmation({ name: "Aisha", guests: 4, time: "7:00 PM" }

))
/*
Problem 3 — Weekly Expense Tracker
এখানে সপ্তাহের বিভিন্ন খরচ একটি array হিসেবে দেওয়া হবে।
তোমার function-এর কাজ হলো সবগুলো expense যোগ করে মোট খরচ return করা।
যেমন:
[200, 450, 100]
এর মোট হবে:
750
আর যদি কোনো expense না থাকে:
[]
তাহলে মোট হবে:
0
*/

/*
Problem 4 — Traffic Light Action
এখানে traffic light-এর তিনটি possible color আছে:
"red" → "Stop"
"yellow" → "Slow Down"
"green" → "Go"
তোমার function একটি traffic light color পাবে এবং সেই color অনুযায়ী নির্দিষ্ট action return করবে।
আর assignment-এর বিশেষ requirement হলো, Light নামে একটি union type আগে তৈরি করতে হবে।
*/

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
