const FORM = document.querySelector("form");
const MISMATCH_MSG = createMismatchMsg();
const FIRST_PWD_DIV = document.querySelector("div.pwd");
const PWD_INPUTS = document.querySelectorAll("div.pwd > input");

FORM.addEventListener("submit", event => {
    const original = PWD_INPUTS[0].value;
    const copy = PWD_INPUTS[1].value;

    if (copy === original) return;
    FIRST_PWD_DIV.appendChild(MISMATCH_MSG);
    PWD_INPUTS.forEach(e => e.classList.add("error"));
    event.preventDefault();
});

function createMismatchMsg() {
    const element = document.createElement("p");
    element.classList.add("pwd-err");
    element.textContent = "* Passwords do not match";
    return element;
}