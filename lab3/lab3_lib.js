function getFormattedCurrentDate() {
  const now = new Date();

  const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];

  const days = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота",
  ];

  const dayOfMonth = now.getDate();
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();
  const dayName = days[now.getDay()];

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `<b>Дата:</b> ${dayOfMonth} ${monthName} ${year} року<br>
            <b>День тижня:</b> ${dayName}<br>
            <b>Час:</b> ${hours}:${minutes}`;
}

/**
 * ЗАВДАННЯ 6: Виведення заданої дати у форматі ДД.ММ.РРРР
 */
function formatSimpleDate(dateObj) {
  if (!(dateObj instanceof Date) || isNaN(dateObj)) return "Невірна дата";

  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();

  return `${day}.${month}.${year}`;
}
