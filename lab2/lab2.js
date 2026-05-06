function addClass(obj, cls) {
  let classes = obj.className ? obj.className.split(" ") : [];
  if (!classes.includes(cls)) {
    classes.push(cls);
    obj.className = classes.join(" ");
  }
}

// ✔ покращення: захист від пустого рядка
function removeClass(obj, cls) {
  if (!obj.className) return;

  let classes = obj.className.split(" ");
  obj.className = classes.filter((item) => item !== cls).join(" ");
}

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join("");
}

// ✔ краще працює зі змішаними масивами
function reverseSort(arr) {
  return arr.sort((a, b) => b - a);
}

// ✔ уникнення мутації (зручніше ніж мутувати оригінал)
function arraySort(arr) {
  return [...arr].sort();
}

// ✔ краще не використовувати Math.random() -0.5 (нестабільно)
function randomSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function sortByAge(people) {
  people.sort((a, b) => a.age - b.age);
}

// ✔ захист від null
function printList(list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

function printListRec(list) {
  if (!list) return;
  console.log(list.value);
  if (list.next) printListRec(list.next);
}

function printReverseListRec(list) {
  if (!list) return;
  if (list.next) printReverseListRec(list.next);
  console.log(list.value);
}

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
