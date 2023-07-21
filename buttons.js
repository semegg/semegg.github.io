const items = document.body.getElementsByClassName("item");

for (let item of Array.from(items)) {
  const counter = item.getElementsByClassName("counter")[0];
  counter.style.setProperty("visibility", "hidden");

  const table = item.getElementsByClassName("table")[0];
  table.style.setProperty("display", "none");
  const row = table.getElementsByClassName("row")[0];

  const inc = row.getElementsByClassName("plus")[0];
  inc.addEventListener("click", () => increment(item));

  const dec = row.getElementsByClassName("minus")[0];
  dec.addEventListener("click", () => decrement(item));

  const add = item.getElementsByClassName("add")[0];
  add.addEventListener("click", () => increment(item));

  const initialValue = localStorage.getItem(`counter_${item.id}`);

  if (initialValue > 0) {
    counter.style.setProperty("visibility", "visible");
    counter.textContent = Number(initialValue);
    item.getElementsByClassName("table")[0].style.setProperty("display", "block");
    item.getElementsByClassName("add")[0].style.setProperty("display", "none");
  }
}

const increment = (item) => {
  const counter = item.getElementsByClassName("counter")[0];
  let value = Number(counter.textContent);  

  if (!value) {
    counter.style.setProperty("visibility", "visible");
    item.getElementsByClassName("table")[0].style.setProperty("display", "block");
    item.getElementsByClassName("add")[0].style.setProperty("display", "none");
  }

  value += 1;
  counter.textContent = value;
  localStorage.setItem(`counter_${item.id}`, value);
};

const decrement = (item) => {
  const counter = item.getElementsByClassName("counter")[0];
  let value = Number(counter.textContent);

  if (!(value - 1)) {
    counter.style.setProperty("visibility", "hidden");
    item.getElementsByClassName("table")[0].style.setProperty("display", "none");
    item.getElementsByClassName("add")[0].style.setProperty("display", "block");
  }

  value -= 1;
  counter.textContent = value;
  localStorage.setItem(`counter_${item.id}`, value);
};
