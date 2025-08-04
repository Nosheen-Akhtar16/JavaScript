// 1. Constant for expected oven time
export const EXPECTED_MINUTES_IN_OVEN = 40;

// 2. Returns how many minutes are left in the oven
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// 3. Returns preparation time per layer (example: 2 minutes per layer)
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

export function totalPreparationTime(numberOfLayers) {
  return numberOfLayers * preparationTimeInMinutes(); // 2 * 2 = 4
}


// ✅ Final Function: total time = preparation + oven time
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
totalPreparationTime(2);