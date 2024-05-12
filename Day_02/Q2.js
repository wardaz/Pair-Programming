let ticket;
let age = 15;
let isWednesday = false;

if (isWednesday) {
  if (age < 18) {
    ticket = 8 - 2;
    console.log("Ticket price for children on Wednesday is", ticket, "$");
  } else {
    ticket = 12 - 2;
    console.log("Ticket price for adults on Wednesday is", ticket, "$");
  }
} else {
  if (age < 18) {
    ticket = 8;
    console.log("Ticket price for children is", ticket, "$");
  } else {
    ticket = 12;
    console.log("Ticket price for adults is", ticket, "$");
  }
}
