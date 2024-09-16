
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
});
// About section

// about
function myColor() {

    var color = document.getElementById('controlpanel').value; 
    

    document.body.style.backgroundColor = color;
    document.getElementById('box').value = color;
}
// Menu section

// start item 1

var basePrice1 = 180; 


var mitem1 = document.querySelector('#minusitem1');
mitem1.addEventListener('click', () => {
    var ct = parseInt(document.querySelector('#qtyitem1').innerHTML);
    if (ct > 1) {
        ct--;
        document.querySelector('#qtyitem1').innerHTML = ct;

    
        var totalprice = basePrice1 * ct;
        document.querySelector("#spanprice1").innerHTML = totalprice;
    }
});


var pltem1 = document.querySelector('#plusitem1');
pltem1.addEventListener('click', () => {
    var ct = parseInt(document.querySelector('#qtyitem1').innerHTML);
    ct++;
    document.querySelector('#qtyitem1').innerHTML = ct;

    
    var totalprice = basePrice1 * ct;
    document.querySelector("#spanprice1").innerHTML = totalprice;
});
// end item1

// start item 2

var basePrice2 = 200; 


var mitem2 = document.querySelector('#minusitem2');
mitem2.addEventListener('click', () => {
    var ab = parseInt(document.querySelector('#qtyitem2').innerHTML);
    if (ab > 1) {
        ab--;
        document.querySelector('#qtyitem2').innerHTML = ab;

    
        var totalprice2 = basePrice2 * ab;
        document.querySelector("#spanprice2").innerHTML = totalprice2;
    }
});


var pltem2 = document.querySelector('#plusitem2');
pltem2.addEventListener('click', () => {
    var ab = parseInt(document.querySelector('#qtyitem2').innerHTML);
    ab++;
    document.querySelector('#qtyitem2').innerHTML = ab;

    
    var totalprice2 = basePrice2 * ab;
    document.querySelector("#spanprice2").innerHTML = totalprice2;
});
// end item2

// start item 3

var basePrice3 = 240; 


var mitem3 = document.querySelector('#minusitem3');
mitem3.addEventListener('click', () => {
    var ef = parseInt(document.querySelector('#qtyitem3').innerHTML);
    if (ef > 1) {
        ef--;
        document.querySelector('#qtyitem3').innerHTML = ef;

    
        var totalprice3 = basePrice3 * ef;
        document.querySelector("#spanprice3").innerHTML = totalprice3;
    }
});


var pltem3 = document.querySelector('#plusitem3');
pltem3.addEventListener('click', () => {
    var ef = parseInt(document.querySelector('#qtyitem3').innerHTML);
    ef++;
    document.querySelector('#qtyitem3').innerHTML = ef;

    
    var totalprice3 = basePrice3 * ef;
    document.querySelector("#spanprice3").innerHTML = totalprice3;
});
// end item3

// start item 4

var basePrice4 = 210; 


var mitem4 = document.querySelector('#minusitem4');
mitem4.addEventListener('click', () => {
    var gh = parseInt(document.querySelector('#qtyitem4').innerHTML);
    if (gh > 1) {
        gh--;
        document.querySelector('#qtyitem4').innerHTML = gh;

    
        var totalprice4 = basePrice4 * gh;
        document.querySelector("#spanprice4").innerHTML = totalprice4;
    }
});


var pltem4 = document.querySelector('#plusitem4');
pltem4.addEventListener('click', () => {
    var gh = parseInt(document.querySelector('#qtyitem4').innerHTML);
    gh++;
    document.querySelector('#qtyitem4').innerHTML = gh;

    
    var totalprice4 = basePrice4 * gh;
    document.querySelector("#spanprice4").innerHTML = totalprice4;
});
// end item4

// start item 5

var basePrice5 = 190; 


var mitem5 = document.querySelector('#minusitem5');
mitem5.addEventListener('click', () => {
    var ij = parseInt(document.querySelector('#qtyitem5').innerHTML);
    if (ij > 1) {
        ij--;
        document.querySelector('#qtyitem5').innerHTML = ij;

    
        var totalprice5 = basePrice5 * ij;
        document.querySelector("#spanprice5").innerHTML = totalprice5;
    }
});


var pltem5 = document.querySelector('#plusitem5');
pltem5.addEventListener('click', () => {
    var ij = parseInt(document.querySelector('#qtyitem5').innerHTML);
    ij++;
    document.querySelector('#qtyitem5').innerHTML = ij;

    
    var totalprice5 = basePrice5 * ij;
    document.querySelector("#spanprice5").innerHTML = totalprice5;
});
// end item5

// start item 6

var basePrice6 = 220; 


var mitem6 = document.querySelector('#minusitem6');
mitem6.addEventListener('click', () => {
    var kl = parseInt(document.querySelector('#qtyitem6').innerHTML);
    if (kl > 1) {
        kl--;
        document.querySelector('#qtyitem6').innerHTML = kl;

    
        var totalprice6 = basePrice6 * kl;
        document.querySelector("#spanprice6").innerHTML = totalprice6;
    }
});


var pltem6 = document.querySelector('#plusitem6');
pltem6.addEventListener('click', () => {
    var kl = parseInt(document.querySelector('#qtyitem6').innerHTML);
    kl++;
    document.querySelector('#qtyitem6').innerHTML = kl;

    
    var totalprice6 = basePrice6 * kl;
    document.querySelector("#spanprice6").innerHTML = totalprice6;
});
// end item6

var opnbtn = document.querySelector("#carttoggle");
opnbtn.addEventListener('click',() => {
    document.querySelector(".carttab").style.display = "block";
});


var clsbtn = document.querySelector("#closechkout");
clsbtn.addEventListener('click',()=>{
document.querySelector(".carttab").style.display = "none";
});
var totalpriceof6 =document.querySelector('#chckout').addEventListener('click', () => {
    alert('Checkout clicked!');
 
});
// menu section ends

// login form
function func(){
    var email = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(email == 'nathiya@gmail.com' && pass == '61816181'){
        alert("login successful!");
        // document.querySelector('.loginpage').style.display = "none";
    
        
    }
    else{
        alert("please enter valid mail ")
    } 


} 
// booking

function tablebook(){
    var name =  document.querySelector("#name").value;
    var email =  document.querySelector("#email").value;
    var phone =  document.querySelector("#phone").value;
    var date =  document.querySelector("#date").value;
    var time =  document.querySelector("#time").value;

    if(name == "") {
        alert("name is empty");
    }else if(email == ""){
        alert("email is empty");
    }else if(phone == ""){
        alert("phone is empty");
    }else if(date == ""){
        alert("date is empty");
    }else if(time == ""){
        alert("time is empty");
    }else{
        alert("Table Reserved Successfully");
    }
    
}
// sign up contact

function submitForm() {
    var username1 = document.querySelector("#username1").value;
    var mail1 = document.querySelector("#mail1").value;
    var password1 = document.querySelector("#password1").value;
    var password2 = document.querySelector("#password2").value;
    var mess = document.querySelector("#mess").value;

    if(username1 == "") {
        alert("username is empty");
    }else if(mail1 == ""){
        alert("email is empty");
    }else if(password1 != password2){
        alert("password not match");
    }else if(mess == ""){
        alert("Enter any message");
    }
    else{
        alert("sign up Successfully");
    }

}
// todo
var ul=document.getElementById("listcontainer");
var input=document.getElementById("input");
function add(){
var listitem = document.createElement("li");
listitem.innerHTML=input.value + "<button onclick='deleteitem(event)'>Delete</button>";
ul.append(listitem);
}
function deleteitem(event){
event.target.parentElement.remove();
}