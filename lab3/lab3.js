function showTask1() {
  const resultElement = document.getElementById("result1");

  if (!resultElement) return;

  resultElement.innerHTML = getFormattedCurrentDate();
}

function showTask6() {
  const dateInput = document.getElementById("dateInput6");
  const resultElement = document.getElementById("result6");

  if (!dateInput || !resultElement) return;

  if (!dateInput.value) {
    resultElement.innerText = "Будь ласка, оберіть дату";
    return;
  }

  const selectedDate = new Date(dateInput.value);

  resultElement.innerText =
    "Форматована дата: " + formatSimpleDate(selectedDate);
}
