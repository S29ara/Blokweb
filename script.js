// JavaScript Document
console.log("hi");


const openMenu = document.querySelector("nav section");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const openIcon = document.querySelector(".openIcon");

/* //OPEN MENU & CLOSE MENU //*/

openIcon.addEventListener("click", function () {
    openMenu.classList.toggle("hidden");
});

closeIcon.addEventListener("click", function () {
    openMenu.classList.toggle("hidden");   
})

/* //ANIMATIE SHOPPING BAG // */

var shopButtons = document.querySelectorAll(".fall_collection_twoitems ol button, .allwoman_section ul li button");

for (let i = 0; i < shopButtons.length; i++) {
    shopButtons[i].onclick = addToShoppingCart;
}

function addToShoppingCart() {
    let shoppingCartAmount = document.querySelector(".shopping_bag span");
    let currentAmount = shoppingCartAmount.innerHTML;
    currentAmount = parseInt(currentAmount);
    let newAmount = currentAmount + 1;
    shoppingCartAmount.innerHTML = newAmount;
}
