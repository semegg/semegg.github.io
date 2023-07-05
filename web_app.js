let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let items = [];

let buttons = document.querySelectorAll('[id^="btn_"]');
buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      const buttonId = button.id.slice(4);
      items.push(buttonId);

      // Проверка текущего URL
      if (window.location.pathname === "/menu.html") {
        window.location.href = "/index.html";
      } else if (window.location.pathname === "/index.html") {
        tg.sendData(items);
      }
    }
  });
});