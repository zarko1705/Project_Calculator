function display(value) {
    document.getElementById("inputField").value += value;
}

function clearInput() {
    document.getElementById("inputField").value = "";
}

function calculate() {
    let input = document.getElementById("inputField").value;
    let result = eval(input);
    document.getElementById("inputField").value = result;
    let orderList = document.querySelector(".ordered-list");
    let listItem = document.createElement("li");
    listItem.textContent = input + " = " + result;
    orderList.appendChild(listItem);
}

document.querySelector(".deleteBtn").addEventListener("click", () => {
    let orderList = document.querySelector(".ordered-list");
    orderList.innerHTML = "";
});
