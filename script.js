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

// adding date and time

function updateDateAndTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent = time;
}

setInterval(updateDateAndTime, 1000);
