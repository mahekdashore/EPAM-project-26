const hoverText = document.getElementById("hoverText");
const registerBtn = document.getElementById("registerBtn");
const validateBtn = document.getElementById("validateBtn");
const couponBtn = document.getElementById("couponBtn");

const instructions = document.getElementById("instructions");
const steps = document.getElementById("steps");

const customerIDInput = document.getElementById("custID");
const message = document.getElementById("message");

document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f4f6f8";
document.body.style.color = "#172033";

const header = document.getElementById("header");

header.style.backgroundColor = "#0b1f3a";
header.style.color = "white";
header.style.padding = "20px 8%";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.boxSizing = "border-box";

const bankLogo = document.getElementById("bankLogo");

bankLogo.style.fontSize = "24px";
bankLogo.style.fontWeight = "bold";
bankLogo.style.letterSpacing = "2px";

const bankTagline = document.getElementById("bankTagline");

bankTagline.style.fontSize = "14px";
bankTagline.style.opacity = "0.8";

const mainContainer = document.getElementById("mainContainer");

mainContainer.style.maxWidth = "850px";
mainContainer.style.margin = "50px auto";
mainContainer.style.padding = "0 20px";
mainContainer.style.boxSizing = "border-box";

const welcomeSection = document.getElementById("welcomeSection");

welcomeSection.style.textAlign = "center";
welcomeSection.style.marginBottom = "35px";

const welcomeLabel = document.getElementById("welcomeLabel");

welcomeLabel.style.color = "#b58b2a";
welcomeLabel.style.fontSize = "13px";
welcomeLabel.style.fontWeight = "bold";
welcomeLabel.style.letterSpacing = "2px";

hoverText.style.color = "#0b1f3a";
hoverText.style.fontSize = "38px";
hoverText.style.margin = "10px 0";

const welcomeDescription =
    document.getElementById("welcomeDescription");

welcomeDescription.style.color = "#5d6675";
welcomeDescription.style.fontSize = "16px";

const instructionCard =
    document.getElementById("instructionCard");

const customerCard =
    document.getElementById("customerCard");

const cards = [instructionCard, customerCard];

cards.forEach(function (card) {
    card.style.backgroundColor = "white";
    card.style.padding = "30px";
    card.style.marginBottom = "25px";
    card.style.borderRadius = "12px";
    card.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.08)";
    card.style.boxSizing = "border-box";
});

const cardHeadings = document.querySelectorAll("section h2");

cardHeadings.forEach(function (heading) {
    heading.style.color = "#0b1f3a";
    heading.style.marginTop = "0";
});

instructions.style.color = "#5d6675";
instructions.style.lineHeight = "1.6";

steps.style.lineHeight = "2";
steps.style.color = "#424b5a";
steps.style.paddingLeft = "25px";

const buttons = [registerBtn, validateBtn, couponBtn];

buttons.forEach(function (button) {
    button.style.border = "none";
    button.style.padding = "12px 20px";
    button.style.borderRadius = "7px";
    button.style.cursor = "pointer";
    button.style.fontSize = "14px";
    button.style.fontWeight = "bold";
    button.style.marginTop = "15px";
});

registerBtn.style.backgroundColor = "#0b1f3a";
registerBtn.style.color = "white";

const inputLabel = document.querySelector("label");

inputLabel.style.display = "block";
inputLabel.style.fontWeight = "bold";
inputLabel.style.marginBottom = "8px";

customerIDInput.style.width = "100%";
customerIDInput.style.padding = "13px";
customerIDInput.style.border = "1px solid #ccd2da";
customerIDInput.style.borderRadius = "7px";
customerIDInput.style.boxSizing = "border-box";
customerIDInput.style.fontSize = "15px";
customerIDInput.style.outline = "none";

const buttonContainer =
    document.getElementById("buttonContainer");

buttonContainer.style.display = "flex";
buttonContainer.style.gap = "12px";
buttonContainer.style.flexWrap = "wrap";

validateBtn.style.backgroundColor = "#0b1f3a";
validateBtn.style.color = "white";

couponBtn.style.backgroundColor = "#b58b2a";
couponBtn.style.color = "white";

const messageBox =
    document.getElementById("messageBox");

messageBox.style.marginTop = "20px";
messageBox.style.padding = "12px";
messageBox.style.backgroundColor = "#f4f6f8";
messageBox.style.borderRadius = "7px";

message.style.margin = "0";
message.style.color = "#424b5a";

const footer = document.getElementById("footer");

footer.style.textAlign = "center";
footer.style.padding = "25px";
footer.style.color = "#707887";
footer.style.fontSize = "13px";

hoverText.addEventListener("mouseover", function () {
    hoverText.style.color = "#b58b2a";
    alert("Welcome to XYZ Bank Customer Portal!");
});

hoverText.addEventListener("mouseout", function () {
    hoverText.style.color = "#0b1f3a";
});

registerBtn.addEventListener("click", function () {
    instructions.style.display = "none";
    steps.style.display = "none";
    registerBtn.innerHTML = "Registered ✓";
    message.innerHTML =
        "Registration successful. Please enter your Customer ID.";
});

validateBtn.addEventListener("click", validateCustomer);

function validateCustomer() {
    const customerID =
        customerIDInput.value.trim();

    if (customerID === "") {
        message.innerHTML =
            "Please enter your Customer ID.";
        message.style.color = "#b00020";
        return;
    }

    if (customerID.includes("XYZ")) {
        message.innerHTML =
            "Customer ID is valid ✓";
        message.style.color = "green";
    } else {
        message.innerHTML =
            "Invalid Customer ID. Customer ID must contain XYZ.";
        message.style.color = "#b00020";
    }
}

couponBtn.addEventListener("click", generateCoupon);

function generateCoupon() {
    const customerID =
        customerIDInput.value.trim();

    if (customerID === "") {
        message.innerHTML =
            "Please enter your Customer ID.";
        message.style.color = "#b00020";
        return;
    }

    if (customerID.includes("XYZ")) {
        const couponNumber =
            Math.floor(Math.random() * 9000) + 1000;

        message.innerHTML =
            "Congratulations! Your Diwali Coupon is XYZ"
            + couponNumber;

        message.style.color = "green";
    } else {
        message.innerHTML =
            "Please enter a valid Customer ID before generating a coupon.";
        message.style.color = "#b00020";
    }
}