let password = "Tabinda";

if (password.length < 6) {
  console.log("Password is weak");
} else if (password.length > 6 && password.length < 10) {
  console.log("Password is medium");
} else {
  console.log("Password is strong");
}
