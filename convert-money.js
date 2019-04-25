document.getElementById("convert").onclick = function() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromcurrency").value;
    let toCurrency = document.getElementById("tocurrency").value;
    document.getElementById("result").innerHTML = "Result: " + (amount * toCurrency) / fromCurrency;
};
