let btn = document.getElementById("pwdbtn");
let allData = [];
let localdata = JSON.parse(localStorage.getItem("userdata"));
let cont = document.getElementsByClassName("userpwd")[0];
let email = document.getElementById("email");
let password = document.getElementById("password");
// console.log(localdata);

if (localdata != null) {
  // console.log("if");
  allData = localdata;
} else {
  // console.log("else");
  allData = [];
  // console.log(allData);
}
btn.onclick = () => {
  let x = allData.find((element) => {
    return element.email == email.value;
  });
  // console.log(x);
  if (x != undefined) {
        cont.classList.remove("d-none");
        password.value = window.atob(x.password);
  } else {
    alert("No such user exists! Please create a new account.");
  }
};
