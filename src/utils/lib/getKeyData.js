/**
 * get unique key from array and how much it have values
 * @param array and any
 * @returns obj
 */

export const getKeyData = (data, key) => {
  const result = {};
  for (let i = 0; i < data.length; i++) {
    if (!result[data[i][key]]) {
      result[data[i][key]] = 1;
    } else {
      result[data[i][key]] = result[data[i][key]] + 1;
    }
  }

  return result;
};
