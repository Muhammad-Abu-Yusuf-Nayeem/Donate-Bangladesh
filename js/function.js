function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

document
  .getElementById("noakhali-input")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donate_value = parseFloat(getInputFieldValueById("noakhali-value"));

    if (!isNaN(donate_value) && donate_value > 0) {
      
        alert("Success money added");
      
    } else {
      alert("Failed: Value must be a positive number and not blank");
    }
  });
