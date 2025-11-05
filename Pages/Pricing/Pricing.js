/* This is the javascript file for pricing */


// Select all buttons with the "buy-btn" class
const buyButtons = document.querySelectorAll("button.priceButton");
const modal = document.getElementById("buy-modal");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");

let selectedItem = null;
let selectedPrice = 0;

// Add the same click listener to all of them
buyButtons.forEach(buttonPrice => {
  buttonPrice.addEventListener("click", () => {
    selectedItem = buttonPrice.dataset.item;   // read data-item
    selectedPrice = buttonPrice.dataset.price; // read data-price

    modal.style.display = "flex";

    document.getElementById("item-info").textContent =
      `You're buying: ${selectedItem} (${selectedPrice})`;
  });
});

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

confirmBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;

  if (name.trim() === "" || address.trim() === ""){
    alert("Please fill out all details!");
    return;
  }
  //check for "valid" adress
  if (!address.includes("@")){
    alert("Please enter a valid address!");
    return;
  }

  modal.style.display = "none";
  alert(`Thank you, ${name}! Your Purchase Ticket of ${selectedItem} for ${selectedPrice} has been confirmed.`);
});