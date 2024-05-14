document.addEventListener("DOMContentLoaded", function() {
    const cardNumber = document.getElementById("inp-number");
    const cardName = document.getElementById("inp-name");
    const cardMonth = document.getElementById("inp-month");
    const cardYear = document.getElementById("inp-year");
    const cardCvc = document.getElementById("inp-cvc");

    const cardHolderNameInput = document.getElementById("card-holder-name");
    const cardNumberInput = document.getElementById("card-number");
    const monthInput = document.getElementById("month-input");
    const yearInput = document.getElementById("year-input");
    const cvcInput = document.getElementById("cvc-input");

    cardHolderNameInput.addEventListener("input", function() {
        cardName.textContent = this.value || "Jane Appleseed";
    });

    cardNumberInput.addEventListener("input", function() {
        cardNumber.textContent = formatCardNumber(this.value);
    });

    monthInput.addEventListener("input", function() {
        cardMonth.textContent = this.value.padStart(2, "0");
    });

    yearInput.addEventListener("input", function() {
        cardYear.textContent = this.value.slice(-2);
    });

    cvcInput.addEventListener("input", function() {
        cardCvc.textContent = this.value;
    });

    function formatCardNumber(number) {
        // Format card number with spaces every 4 digits
        return number.replace(/\D/g, "")
                     .replace(/(.{4})/g, "$1 ")
                     .trim();
    }
});
