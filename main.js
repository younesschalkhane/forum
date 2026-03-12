function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

const correctEmail = "younessly@gmail.com";
const correctPassword = "98765ly";





if(email !== correctEmail){
message.innerText = "Email incorrect";
}

let message = document.getElementById("message");


if(password !== correctPassword){
message.innerText = "Password incorrect";
}

let message = document.getElementById("message");



else{
message.innerText = "Login successful";
}

}