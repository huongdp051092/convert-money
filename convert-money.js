document.getElementById("convert").onclick = function() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromcurrency").value;
    let toCurrency = document.getElementById("tocurrency").value;
    let factor = 1;
    if (fromCurrency == "VND" && toCurrency == "USD") {
        factor = 1/23000;
    }
    if (fromCurrency == "USD" && toCurrency == "VND") {
        factor = 23000;
    }
    document.getElementById("result").innerHTML = "Result: " + amount * factor + " " + toCurrency;
};