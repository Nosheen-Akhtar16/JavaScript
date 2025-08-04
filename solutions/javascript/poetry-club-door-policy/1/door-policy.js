let l1 = 'Stands so high ';
let l2 = 'Huge hooves too';
let l3 = 'Impatiently waits for';
let l4 = 'Reins and harness';
let l5 = 'Eager to leave';

export function frontDoorResponse(line) {
  if (!line) return '';
  return line.trim()[0];
}

export function frontDoorPassword(line) {
  let firstChar = frontDoorResponse(line).toUpperCase();
  let rest = line.trim().slice(1).toLowerCase();
  return firstChar + rest;
}

export function backDoorResponse(ll) {
  if (typeof ll !== 'string') {
    return ''; // or handle error as needed
  }
  let trimmedLine = ll.trim();
  return trimmedLine[trimmedLine.length - 1];
}

export function backDoorPassword(line) {
  let trimmedLine = line.trim();
  let firstChar = trimmedLine[0].toUpperCase();
  let middlePart = trimmedLine.slice(1, 5).toLowerCase();
  return firstChar + middlePart + ', please';
}
