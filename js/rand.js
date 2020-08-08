function takeRandomHex() {
    var chars = "0123456789abcdef";
    var hex = "#";
    for (let i = 0; i < 6; i++) {
        var randChar = chars[Math.floor(Math.random() * chars.length)];
        hex += randChar;
    }
    document.querySelector("body").style.backgroundColor = hex;
    var show = hex;
    document.querySelector("body p").textContent = "Hex: " + show;
}
takeRandomHex();
document.querySelector("#btn").addEventListener("click", takeRandomHex);
// AlirezaLotfiMoghaddam
for (let i = 0; i <= 5000; i++) {
    document.querySelector("#line").textContent += "-";
    document.querySelector("#vline").textContent += "-";
}
