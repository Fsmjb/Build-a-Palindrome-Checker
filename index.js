function check() {
    const input = document.querySelector("#text-input");
    const value = input.value.trim();
    const textLength = value.length;
    const result = document.querySelector("#result");



    if (textLength === 0) {
        alert("Please input a value");
        result.innerHTML = "";
    } else {
        result.classList.remove("hide");
        if (textLength === 1) {
            result.innerHTML = `${input.value} is a palindrome`;
        } else {

            const cleanedInput = value.toLowerCase().replace(/[^a-z0-9]/g, "");
            const reversedInput = cleanedInput.split("").reverse().join("");

            if (cleanedInput === reversedInput) {
                result.innerHTML = `${input.value} is a palindrome`;
            } else {
                result.innerHTML = `${input.value} is not a palindrome`;
            }
        }

    }
}