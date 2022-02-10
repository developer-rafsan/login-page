let frombtnhover = document.getElementById("from-btn-hover");
let loginformbtn = document.getElementById("login-form-btn");
let regformbtn = document.getElementById("reg-form-btn");
let inputlog = document.getElementById("input-group-log");
let inputreg = document.getElementById("input-group-reg");


regformbtn.onclick = function(){

    inputreg.style.left= "50px";
    inputlog.style.left= "-440px";
    frombtnhover.style.marginLeft="51%";
    regformbtn.style.color= "#FFF";
    loginformbtn.style.color= "black";

}
loginformbtn.onclick = function(){

    inputreg.style.left= "450px";
    inputlog.style.left= "40px";
    frombtnhover.style.marginLeft="0%";
    loginformbtn.style.color= "#FFF";
    regformbtn.style.color= "black";
}


let btndark = document.getElementById("btn-dark");
let btnlite = document.getElementById("btn-lite");
let darkbtnhover = document.getElementById("dark-btn-hover");

btndark.onclick = function() {
    document.body.classList.add("dork-mode");
    darkbtnhover.style.marginLeft = "51%";
    btndark.style.color= "#FFF";
    btnlite.style.color= "black";
}
btnlite.onclick = function() {
    document.body.classList.remove("dork-mode");
    darkbtnhover.style.marginLeft = "0%";
    btndark.style.color= "black";
    btnlite.style.color= "#FFF";
}
