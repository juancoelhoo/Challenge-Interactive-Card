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

    document.addEventListener('submit', e => {
            e.preventDefault();

            validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = ' ';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isCardNumberValid = cardNumber => {
        const re = /^[0-9]{16}$/;
        return re.test(cardNumber);
    }

    const isNumberDateValid = monthInput => {
        const re = /^[0-9]{2}$/;
        return re.test(monthInput);
    }
    
    const isCvcValid = cvcInput => {
        const re = /^[0-9]{3}$/;
        return re.test(cvcInput);
    }

    const validateInputs = () => {
        let hasError = false;
    
        if(cardHolderNameInput.value === ''){
            setError(cardHolderNameInput, 'Name is required');
            hasError = true;
        } else {
            setSuccess(cardHolderNameInput);
        }
    
        if(cardNumberInput.value === ''){
            setError(cardNumberInput, 'Card number is required');
            hasError = true;
        } else if(!isCardNumberValid(cardNumberInput.value)){
            setError(cardNumberInput, 'Provide a valid card number');
            hasError = true;
        } else {
            setSuccess(cardNumberInput);
        }
    
        if(monthInput.value === ''){
            setError(monthInput, 'Exp. month is required');
            hasError = true;
        } else if(!isNumberDateValid(monthInput.value)){
            setError(monthInput, 'Provide a valid date');
            hasError = true;
        } else{
            setSuccess(monthInput);
        }
    
        if(yearInput.value === ''){
            setError(yearInput, 'Exp. month is required');
            hasError = true;
        } else if(!isNumberDateValid(yearInput.value)){
            setError(yearInput, 'Provide a valid date');
            hasError = true;
        } else{
            setSuccess(yearInput);
        }
    
        if(cvcInput.value === ''){
            setError(cvcInput, 'Exp. month is required');
            hasError = true;
        } else if(!isCvcValid(cvcInput.value)){
            setError(cvcInput, 'Provide a valid cvc number');
            hasError = true;
        } else{
            setSuccess(cvcInput);
        }
    
        if(!hasError){
            document.querySelector('.thank').style.display = 'block';
        } else {
            document.querySelector('.thank').style.display = 'none';
        }
    };
    
    
