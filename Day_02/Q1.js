let age = 50;

if (age <= 90) {
  if (age < 13) {
    console.log("Child");
  } else if (age >= 13 && age <= 19) {
    console.log("Teenager");
  } else if (age >= 20 && age <= 59) {
    console.log("Adult");
  } else {
    console.log("Senior");
  }
} else {
  console.log("Please write a valid age");
}
