let email = document.getElementById("email");
let pwd = document.getElementById("password");
let btn = document.getElementById("loginbtn");
let validemail = false;
let validpwd = false;
let allData = [];
let user =  {};
let localdata = JSON.parse(localStorage.getItem("userdata"));
// console.log(localdata);

if (localdata != null) {
  // console.log("if");
  allData = localdata;
} else {
  // console.log("else");
  allData = [];
  // console.log(allData);
}
// console.log(allData);
// allData.push(1);
// console.log(allData);
// console.log(typeof allData);
// allData = JSON.parse(localStorage.getItem("userdata"))
// console.log(typeof allData);
email.onblur = () => {
  let useremail = email.value;
  let x = allData.find((element) => {
    return element.email == useremail;
  });
  // console.log(x);
  if (x == undefined) {
    let div = document.createElement("div");
    div.innerHTML = "invalid username!";
    email.after(div);
    setTimeout(() => {
      div.remove();
    }, 5000);
    validemail = false;
  } else {
    validemail = true;
  }
};
pwd.onblur = () => {
  let userpwd = password.value;
  let x = allData.find((element) => {
    return element.email == email.value;
  });
  // console.log(x);
  if (x == undefined) {
    let div = document.createElement("div");
    div.innerHTML = "invalid username!";
    email.after(div);
    setTimeout(() => {
      div.remove();
    }, 5000);
    validpwd = false;
  } else {
    if (userpwd != window.atob(x.password)) {
      let div = document.createElement("div");
      div.innerHTML = "invalid password!";
      password.after(div);
      setTimeout(() => {
        div.remove();
      }, 5000);
      validpwd = false;
    } else {
      user =x;
      validpwd = true;
    }
  }
};
btn.onclick = () => {
  if (email.value == "" || pwd.value == "") {
    alert("please fill all fields!");
    return;
  }
  if (validemail && validpwd) {
    // console.log(user);
    sessionStorage.setItem("user",JSON.stringify(user));
    window.location.href = "home.html";
  } else {
    alert("Invalid username or password!");
  }
  // console.log(email.value,pwd.value);
};
