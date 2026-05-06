console.log("--- Демонстрація Лабораторної роботи №2 ---");

// Перевірка на існування функцій (щоб не падало з помилкою)
if (typeof addClass === "function") {
  let obj1 = { className: "open menu" };
  addClass(obj1, "new");
  addClass(obj1, "open");
  console.log("Завдання 1 (addClass):", obj1.className);
} else {
  console.log("addClass не визначена");
}

if (typeof camelize === "function") {
  console.log("Завдання 2 (camelize):", camelize("-webkit-transition"));
} else {
  console.log("camelize не визначена");
}

if (typeof removeClass === "function") {
  let obj3 = { className: "my menu menu" };
  removeClass(obj3, "menu");
  console.log("Завдання 3 (removeClass):", obj3.className);
} else {
  console.log("removeClass не визначена");
}

if (typeof filterRangeInPlace === "function") {
  let arr4 = [5, 3, 8, 1];
  filterRangeInPlace(arr4, 1, 4);
  console.log("Завдання 4 (filterRange):", arr4);
} else {
  console.log("filterRangeInPlace не визначена");
}

if (typeof sortByAge === "function") {
  const people = [
    { name: "John", age: 23 },
    { name: "Bill", age: 18 },
    { name: "Donald", age: 6 },
  ];

  sortByAge(people);
  console.log("Завдання 8 (sortByAge): наймолодший -", people[0].name);
} else {
  console.log("sortByAge не визначена");
}

if (typeof unique === "function") {
  const strings = ["C++", "C#", "C++", "C", "JavaScript", "C++"];
  console.log("Завдання 10 (unique):", unique(strings));
} else {
  console.log("unique не визначена");
}
