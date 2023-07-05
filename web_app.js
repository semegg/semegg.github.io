let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let items = "";

let btn_amrcn = document.getElementById("btn_amrcn");
let btn_dpp = document.getElementById("btn_dpp");

btn_amrcn.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
    }
    else {
    items = "amrcn";
    tg.MainButton.setText("Вы выбрали товаров!");

    tg.MainButton.show();
    }
});

btn_dpp.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
    }
    else {
    items = "dpp";
    tg.MainButton.setText("Вы выбрали товаров!");
    tg.MainButton.show();
    }
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(items);
});
