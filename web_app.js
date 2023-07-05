let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let items = "";

let buttons = document.querySelectorAll('[id^="btn_"]');
buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      items = button.id.slice(4); // Получаем значение после "btn_" в id кнопки
      tg.MainButton.setText(items);
      tg.MainButton.show();
    }
  });
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
  tg.sendData(items);
});