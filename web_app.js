 let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let buttons = document.querySelectorAll('[id^="btn"]');
const choice = [];

buttons.forEach(button => {
  button.addEventListener("click", function() {
    console.log("HUINA");
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      choice.push(button.id.slice(-1));
      tg.MainButton.setText("Вы выбрали  " + choice.length + " позиций!");
      item = button.id.slice(-1);
      tg.MainButton.show();
    }
  });
});


let usercard = document.getElementById("usercard");
let p = document.createElement("p");

p.innerText = `${tg.initDateUnsafe.user.first_name} 
${tg.initDateUnsafe.user.last_name}`;

usercard.appendChild(p);
