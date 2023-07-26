export const objToArray = (obj) => {
  const data = [];
  let idx = 0;
  for (let key in obj) {
    data.push({
      value: idx++,
      label: key,
      total: obj[key],
    });
  }

  return data;
};
