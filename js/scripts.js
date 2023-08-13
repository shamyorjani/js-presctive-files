// for open window

// var win; 
// function openWindow() {
//   win = window.open("registration.html", "width = 100px", "height = 500px");
// }
// function closeWindow() {
//   win.close();
// }

// for addEventListener
// var numbers = 1;
// document.getElementById("sub").addEventListener("click", function(){
//   document.getElementById("values").innerHTML = numbers;
//   numbers ++;
// });

// document.getElementById("clear").addEventListener("click", function(){
//   numbers = 0;
//   document.getElementById("values").innerHTML = numbers;
//   numbers = 1;
// });

// document.getElementById("sub").addEventListener("mouseenter", mouseEnt);
// function mouseEnt(){
//   document.getElementById("values").style.color = "Red";
// }

// document.getElementById("sub").addEventListener("mouseleave", mouseleave);
// function mouseleave(){
//   document.getElementById("values").style.color = "black";
// }


// number validation
// function val(object){
//     document.getElementById("res").innerHTML = object.value;
//     document.getElementById("res").style.color = "red";
//     if(isNaN(object.value)){
//       document.getElementById("res").innerHTML = "Please number only";
//     }
//     else{
//       document.getElementById("res").innerHTML = "";
//       if(object.value.length > 10){
//         document.getElementById("res").innerHTML = "Number should be just 11";
//       }
//       else{
//         document.getElementById("res").innerHTML = "";  
//       }
//     }
// }

// function move(){
//   var redBox = document.getElementById("red");
//   var moveValue = 0;
//   var moves = setInterval(function(){
//     if (moveValue == 350){
//         clearInterval(moves);
//     }
//     else{
//         moveValue ++;
//         redBox.style.top = moveValue + "px";
//         redBox.style.left = moveValue + "px";
//     }
//   }, 5);
// }

// function check(){
//     number = document.getElementById("number").value;
//     // document.getElementById("res").innerHTML = number;
//     try{
//         if(isNaN(number)){
//             throw ("It is not a number");
//         }
//         else{
//             if(number.length != 11){
//                 throw ("Number is not correct");
//             }
//             else{
//                 throw("");
//             }
//         }
//     }
//     catch(errMessage){
//         document.getElementById("res").innerHTML = errMessage;
//     }
//     finally{
//         number = ("");
//     }
// }



// document.getElementById("col").setAttribute("id", "col2");
// var text = document.getElementById("col");
// function getSet(){
//     var getAtt = text.getAttribute("id");
//     if(getAtt === "col"){
//         text.setAttribute("id", "col2");
//     }
//     else{
//         text.setAttribute("id", "col");
//     }
// }

// var password = document.getElementById("password");
// function toggle(element){
//     if(password.type === "password"){
//         password.setAttribute("type", "text");
//         element.innerHTML = "Hide Password";
//     }
//     else{
//         password.setAttribute("type", "password");
//         element.innerHTML = "Show Password";
//     }
// }

// password validation
var massage = document.getElementById("res");
var password = document.getElementById("password");
// var flag = 1;
// function confirmPass(element){
//     if(element.value.length > 0){
//         if(element.value != password.value){
//             massage.innerHTML = "Please Enter Correct password";
//             flag = 0;
//         }
//         else{
//             massage.innerHTML = "";
//             flag = 1;
//          }
//     }
//     else{
//         massage.innerHTML = "Please Enter Password";
//         flag = 0;    
//     }
// } 
// function validate(){
//     if(flag === 1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// window.addEventListener('keyup', event => {
//     var isCaps = event.getModifierState('CapsLock');
//     if(isCaps){
//         massage.innerHTML = "WARNING: CAPSLOCK IS ON";
//     }
//     else{
//         massage.innerHTML = "";
//     }
// })

// var pattern = /\s/g;
// function whiteSpace(value){
//     var isSpace = pattern.test(value);
//     if(isSpace){
//         massage.innerHTML =  "Space is not allowed";
//     }
//     else{
//         massage.innerHTML =  "";
//     }
// }

// RegExp
var pattern = /[a-z][0-9]/i;
var str = "EhtishamFarman09";
console.log(pattern.test(str));
