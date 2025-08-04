
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}


let fixeBubget = 20000;
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}
console.log(daysInBudget);

let monthBill = 22;
function monthlyCost (){
  return dayRate * monthBill;
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dayRateAmount = dayRate(ratePerHour); // 8 hours per day
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;

  const discountedMonthlyCost = fullMonths * dayRateAmount * 22 * (1 - discount);
  const fullDayCost = remainingDays * dayRateAmount;

  return Math.ceil(discountedMonthlyCost + fullDayCost);
}