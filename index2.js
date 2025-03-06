// 1. The if...else Statement

let number = 10;

if (number > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is not positive.");
}


// 2. The if...else if...else Statement

let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}


// 3. Switch-Case with Multiple Cases

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Day " + day + " is " + dayName);


// 4. While Loop & Do-While Loop

// While Loop
let i = 1;
while (i <= 5) {
  console.log("While loop: " + i);
  i++;
}

// Do-While Loop
let j = 6;
do {
  console.log("Do-while loop: " + j);
  j++;
} while (j <= 10);