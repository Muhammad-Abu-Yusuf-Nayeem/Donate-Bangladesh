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

function updateTargetAmount(amount) {
  const targetAmount = document.getElementById("targetAmount").innerText;
  let currentAmount = parseFloat(targetAmount);
  currentAmount -= amount;
  document.getElementById("targetAmount").innerText = currentAmount;
}

function openModal() {
  const closeBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  modal.classList.remove("hidden");
  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
}

function setFieldValueById(displayId, inputId, localArea) {
  const currentAmount = getFieldValueById(displayId);
  const donateAmount = getInputValueById(inputId);

  if (isNaN(donateAmount) || donateAmount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  const total = currentAmount + donateAmount;
  document.getElementById(displayId).innerText = total.toFixed(2);
  document.getElementById(inputId).value = ""; // Clear input field

  const textData = getTextData(localArea);
  const time = getTimeData();

  const historySection = document.getElementById("History");
  const donationInfo = document.createElement("div");
  donationInfo.classList.add(
    "p-6",
    "my-4",
    "border",
    "rounded-xl", // smooth corners
    "shadow-md", // light shadow for depth
    "bg-white", // background (useful if on a gray section)
    "text-gray-800" // better readability
  );

  donationInfo.innerHTML = `
    <p>${donateAmount.toFixed(2)} ${textData}</p>
    <p>Date : ${time}</p>
  `;

  historySection.appendChild(donationInfo);
  updateTargetAmount(donateAmount);
  console.log("Modal is being called");
  openModal();
}

// Event listener noakhali
document
  .getElementById("noakhali-donate-button")
  .addEventListener("click", function (Event) {
    Event.preventDefault();

    setFieldValueById(
      "noakhali-current-amount",
      "noakhali-donate-field",
      "Noakhali"
    ); // You can also use "Feni" or "Quota"
  });
// Event listener Feni
document
  .getElementById("feni-donate-button")
  .addEventListener("click", function (Event) {
    Event.preventDefault();
    setFieldValueById("feni-current-amount", "feni-donate-field", "Feni"); // You can also use "Feni" or "Quota"
  });
// Event listener Quota
document
  .getElementById("quota-donate-button")
  .addEventListener("click", function (Event) {
    Event.preventDefault();
    setFieldValueById("quota-current-amount", "quota-donate-field", "Quota"); // You can also use "Feni" or "Quota"
  });

document.getElementById("btn-donation").addEventListener("click", function () {
  document.getElementById("donate-page").classList.remove("hidden");
  document.getElementById("History").classList.add("hidden");

  document.getElementById("btn-history").classList.add("bg-[#ffffff]");
  document.getElementById("btn-history").classList.remove("bg-[#B4F461]");
  document.getElementById("btn-donation").classList.add("bg-[#B4F461]");
  document.getElementById("btn-donation").classList.remove("bg-[#ffffff]");
});
document.getElementById("btn-history").addEventListener("click", function () {
  document.getElementById("donate-page").classList.add("hidden");
  document.getElementById("History").classList.remove("hidden");
  document.getElementById("btn-history").classList.remove("bg-[#ffffff]");
  document.getElementById("btn-history").classList.add("bg-[#B4F461]");
  document.getElementById("btn-donation").classList.remove("bg-[#B4F461]");
  document.getElementById("btn-donation").classList.add("bg-[#ffffff]");
});
