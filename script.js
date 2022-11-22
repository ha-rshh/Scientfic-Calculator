const number = document.querySelectorAll(".number");
const equals = document.querySelector(".equals");
const result = document.querySelector("#result");


equals.addEventListener('click', () => {
    result.innerText = number.innerText;
})
