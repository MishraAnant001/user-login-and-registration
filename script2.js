let email = document.getElementById("email");
let pwd = document.getElementById("password");
let btn = document.getElementById("signupbtn")
let validemail = false;
let validpwd=false;
let allData = [];
let localdata = JSON.parse(localStorage.getItem("userdata"));
// console.log(localdata);

if (localdata != null){
    // console.log("if");
    allData = localdata;
}
else{
    // console.log("else");
    allData=[];
    // console.log(allData);
}
// console.log(allData);
// allData.push(1);
// console.log(allData);
// console.log(typeof allData);
// allData = JSON.parse(localStorage.getItem("userdata"))
// console.log(typeof allData);
email.onblur = ()=>{
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/
    let useremail = email.value;
    if(!regex.test(useremail)){
        let div = document.createElement('div');  
        div.innerHTML="Invalid Email Format";  
        email.after(div);
        setTimeout(() => {
            div.remove();
        }, 5000);    
        validemail = false;
    }
    else{
        validemail = true;
    }
}
pwd.onblur = ()=>{
    let len =  pwd.value.length;
    if (len <8 || len >16){
        let div = document.createElement('div');    
        div.innerHTML='Password should be between 8 and 16 characters';            
        pwd.after(div);        
        setTimeout(() => {
            div.remove();
        }, 5000);                           
        validpwd =false;
    }else{validpwd=true;}
}
btn.onclick =()=>{
    if(email.value=="" || password.value==""){
        alert("please fill all fields!");
        return;
    }
    if(validemail && validpwd){
        let data = {
            email : email.value,
            password : window.btoa(pwd.value)
        };
        let x = allData.find((element)=>{
            return element.email == data.email;
        });
        // console.log(x);
        if(x!=undefined){
            alert("User already exists");
        }
        else{
            allData.push(data);
            localStorage.setItem("userdata",JSON.stringify(allData))
            alert("user registered successfully")
            window.location.href= "index.html"
        }
        // console.log(data);
        // console.log(allData);
        // allData.push(data);
        // console.log(allData);
        // console.log(allData);
        // localStorage.setItem("userdata",JSON.stringify(allData))
        // window.location.href= "index.html"
    }
    else{
        alert("Please check your inputs again!");
    }
    // console.log(email.value,pwd.value);
}