let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let items = [];

// Восстановление значения items при загрузке страницы
const savedItems = localStorage.getItem("items");
if (savedItems) {
  items = JSON.parse(savedItems);
  if (window.location.pathname === "/index.html") {
    tg.MainButton.setText("Continue");
    tg.MainButton.show();
  }
  else {
      const count = items.length;
    tg.MainButton.setText(`Вы выбрали ${count} товаров!`);
    tg.MainButton.show();
  }


}

let buttons = document.querySelectorAll('[id^="btn_"]');
buttons.forEach(button => {
  button.addEventListener("click", function() {
    const buttonId = button.id.slice(4);
    items.push(buttonId);
    const count = items.length;
    tg.MainButton.setText(`Вы выбрали ${count} товаров!`);
    tg.MainButton.show();
  });
});


Telegram.WebApp.onEvent("mainButtonClicked", function() {
  if (window.location.pathname === "/menu.html") {
    localStorage.setItem("items", JSON.stringify(items));
    window.location.href = "/";
  } else if (window.location.pathname === "/index.html") {
    tg.sendData(items);
    items = [];
  }
});
