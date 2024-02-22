function scrollDown() {
  var footerCoordinates = document
    .getElementById("scrollIndicator")
    .getBoundingClientRect().top;

  window.scrollTo({
    top: footerCoordinates,
    behavior: "smooth",
  });
}

let totalClicks = 0;

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    if (totalClicks < 4) {
      if (!button.dataset.clicked) {
        button.dataset.clicked = true;
        totalClicks++;
        button.style.backgroundColor = "#1DD100";
        button.style.color = "white";

        const tr = document.createElement("tr");
        const buttonTd = document.createElement("td");
        const economyTd = document.createElement("td");
        const amountTd = document.createElement("td");
        buttonTd.innerText = button.innerText;
        economyTd.innerText = "Economy";
        amountTd.innerText = "550";
        const setCount = document.querySelector(".set-count");
        setCount.innerText = totalClicks;
        const setCount2 = document.querySelector(".set-count2");
        setCount2.innerText = totalClicks;
        tr.appendChild(buttonTd);
        tr.appendChild(economyTd);
        tr.appendChild(amountTd);
        const table = document.querySelector(".table");
        table.appendChild(tr);

        const ticketPrices = document.querySelectorAll(".ticket-price");

        ticketPrices.forEach((ticketPrice) => {
          ticketPrice.innerText = totalClicks * 550 + " BDT";
        });
        if (totalClicks == 4) {
          const ticketPrice = document.querySelector("#apply");
          ticketPrice.style.backgroundColor = "#1DD100";
          ticketPrice.disabled = false;
        }
      }
    }
  });
});

const couponCodeInput = document.getElementById("Coupon-Code");
const applyCouponButton = document.getElementById("apply");
const ticketPrice = document.querySelector(".ticket-price");
const grandTotal = document.getElementById("Grand-Total");

applyCouponButton.addEventListener("click", function () {
  const couponCode = couponCodeInput.value;

  if (couponCode === "NEW15") {
    if (ticketPrice) {
      const originalPrice = parseInt(ticketPrice.textContent);

      const discountedPrice = originalPrice * 0.85;

      grandTotal.textContent = discountedPrice + " BDT";
      couponCodeInput.style.display = "none";
      applyCouponButton.style.display = "none";
    }
  }
  if (couponCode === "Couple 20") {
    if (ticketPrice) {
      const originalPrice1 = parseInt(ticketPrice.textContent);

      const discountedPrice2 = originalPrice1 * 0.8;

      grandTotal.textContent = discountedPrice2 + " BDT";
      couponCodeInput.style.display = "none";
      applyCouponButton.style.display = "none";
    }
  } else {
    couponCodeInput.classList.add("input-error");
  }
});
function allremove() {
  const allRemove = document.getElementById("all-remove");
  allRemove.style.display = "none";
  const addSection = document.getElementById("addSection");
  addSection.classList.remove("hidden");
}
