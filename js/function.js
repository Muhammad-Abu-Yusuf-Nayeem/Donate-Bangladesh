function getFieldValueById(id) {
  const value = document.getElementById(id).innerText;
  return parseFloat(value);
}

function getInputValueById(id) {
  const value = document.getElementById(id).value;
  return parseFloat(value);
}

function getTextData(string) {
  if (string === "Feni") {
    let textData = "Taka is Donated for famine-2024 at Feni, Bangladesh";
    return textData;
  } else if (string === "Noakhali") {
    let textData = "TTaka is Donated for Flood Relief in Noakhali,Bangladesh";
    return textData;
  } else if (string === "Quota") {
    let textData = " Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh";
    return textData;
  }
}

function setFieldValueById(displayId, inputId, localArea) {
  const currentAmount = getFieldValueById(displayId); // Get displayed number
  const donateAmount = getInputValueById(inputId); // Get number from input

  const total = currentAmount + donateAmount;
  document.getElementById(displayId).innerText = total.toFixed(2); // Optional: format to 2 decimals
  const textData = getTextData(localArea);
}

// Event listener
document
  .getElementById("noakhali-donate-button")
  .addEventListener("click", function () {
    setFieldValueById(
      "noakhali-current-amount",
      "noakhali-donate-field",
      "Feni"
    ); // Noakhali, Feni, Quota
  });
