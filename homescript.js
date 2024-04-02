let message = document.getElementById("message");
let user= JSON.parse(sessionStorage.getItem("user")) || {};
// console.log(user);
let x = user.email.indexOf("@");
let name =  user.email.slice(0,x);
// console.log(x);
message.innerHTML=`Hello ${name}!`