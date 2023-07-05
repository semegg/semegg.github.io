let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let items = "";

let btn_amrcn = document.getElementById("btn_amrcn");
let btn_esprss = document.getElementById("btn_esprss");
let btn_dpp = document.getElementById("btn_dpp");
let btn_ltt = document.getElementById("btn_ltt");

btn_amrcn.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
    }
    else {
    items = "amrcn";
    tg.MainButton.setText("Вы выбрали " items "товаров!");

    tg.MainButton.show();
    }
});

btn_esprss.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
    }
    else {
    items = "amrcn";
    tg.MainButton.setText("Вы выбрали " items "товаров!");
    tg.MainButton.show();
    }
});

btn_dpp.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
    }
    else {
    items = "amrcn";
    tg.MainButton.setText("Вы выбрали товаров!");
    tg.MainButton.show();
    }
});

btn_ltt.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
    }
    else {
    items = "amrcn";
    tg.MainButton.setText("Вы выбрали " items "товаров!");
    tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(items);
});



let usercard = document.getElementById("usercard");
let p = document.createElement("p");

p.innerText = `${tg.initDateUnsafe.user.first_name} 
${tg.initDateUnsafe.user.last_name}`;

usercard.appendChild(p);
