function query(collection) {
  let result = JSON.parse(JSON.stringify(collection));

  const operations = Array.from(arguments).slice(1);

  let filters = {};
  let selectFields = null;

  operations.forEach((op) => {
    const data = typeof op === "function" ? op() : null;
    if (!data) return;

    const [type, field, values] = data;

    if (type === "filter") {
      if (!filters[field]) {
        filters[field] = values;
      } else {
        filters[field] = filters[field].filter((val) => values.includes(val));
      }
    }

    if (type === "select") {
      if (selectFields === null) {
        selectFields = [...field];
      } else {
        selectFields = selectFields.filter((f) => field.includes(f));
      }
    }
  });

  Object.keys(filters).forEach((field) => {
    result = result.filter((item) => filters[field].includes(item[field]));
  });

  if (selectFields !== null) {
    result = result.map((item) => {
      let newItem = {};

      selectFields.forEach((f) => {
        if (Object.prototype.hasOwnProperty.call(item, f)) {
          newItem[f] = item[f];
        }
      });

      return newItem;
    });
  }

  return result;
}

function select() {
  const fields = Array.from(arguments);

  return function () {
    return ["select", fields];
  };
}

function filterIn(field, values) {
  return function () {
    return ["filter", field, values];
  };
}
