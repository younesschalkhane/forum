function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const correctEmail = "chal.youness@gmail.com";
  const correctPassword = "98765ly";

  let message = document.getElementById("message");

  // Email check with 
  if (email === correctEmail) {
    message.innerText = "Email is correct"; // Email is correct
  } else {
    message.innerText = "Email is incorrect"; // Email is incorrect
  }


  // Password check with 
  if (password === correctPassword) {
    message.innerText = "Password is correct"; // Password is correct
  } else {
    message.innerText = "Password is incorrect"; // Password is incorrect
  }

   if (email === correctEmail && password === correctPassword) {
    message.innerText = "Login successful"; // Both are correct
  }
}

