function getFieldValueById(id) {
  const value = document.getElementById(id).innerText;
  return parseFloat(value);
}

function getInputValueById(id) {
  const value = document.getElementById(id).value;
  return parseFloat(value);
}

function getTimeData() {
  const currentTime = new Date();
  return currentTime.toString();
}

function getTextData(area) {
  if (area === "Feni") {
    return "Taka is Donated for famine-2024 at Feni, Bangladesh";
  } else if (area === "Noakhali") {
    return "Taka is Donated for Flood Relief in Noakhali, Bangladesh";
  } else if (area === "Quota") {
    return "Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh";
  } else {
    return "Taka is Donated for General Relief Efforts in Bangladesh";
  }
}

function setFieldValueById(displayId, inputId, localArea) {
  const currentAmount = getFieldValueById(displayId);
  const donateAmount = getInputValueById(inputId);

  const total = currentAmount + donateAmount;
  document.getElementById(displayId).innerText = total.toFixed(2);

  const textData = getTextData(localArea);
  const time = getTimeData();

  const historySection = document.getElementById("History");
  const donationInfo = document.createElement("div");

  donationInfo.innerHTML = `
    <p>${donateAmount} ${textData}</p>
    <p>Date : ${time}</p>
    <hr/>
  `;

  historySection.appendChild(donationInfo);
}

// Event listener
document
  .getElementById("noakhali-donate-button")
  .addEventListener("click", function () {
    setFieldValueById(
      "noakhali-current-amount",
      "noakhali-donate-field",
      "Noakhali"
    ); // You can also use "Feni" or "Quota"
  });
