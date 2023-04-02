const cart = document.getElementById("cart");
const cartItems = cart.getElementsByTagName("li");
const totalValue = document.getElementById("total-value");
const discountBtn = document.getElementById("discount-btn");

let total = 650;
let discountApplied = false;

function calculateTotal() {
  let sum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const priceText = cartItems[i].querySelector(".price").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    sum += price;
  }
  return sum;
}

function updateTotal() {
  const newTotal = calculateTotal();
  totalValue.textContent = "$" + newTotal;
  total = newTotal;
}

function applyDiscount() {
  if (!discountApplied) {
    total *= 0.8;
    totalValue.textContent = "$" + total;
    discountApplied = true;
    discountBtn.disabled = true;
    discountBtn.textContent = "Купон применен";
    discountBtn.style.backgroundColor = "#4caf50";
  }
}

for (let i = 0; i < cartItems.length; i++) {
  const addToCartBtn = cartItems[i].querySelector(".add-to-cart");
  addToCartBtn.addEventListener("click", () => {
    updateTotal();
    addToCartBtn.textContent = "В корзине";
    addToCartBtn.style.backgroundColor = "#4caf50";
  });
}

discountBtn.addEventListener("click", () => {
  applyDiscount();
});

//перейти на сайт Википедия
const wikiButton = document.getElementById("wikiButton");

wikiButton.addEventListener("click", function () {
  window.open("https://ru.wikipedia.org/wiki/");
});
