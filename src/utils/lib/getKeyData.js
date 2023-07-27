/**
 * get unique key from array and how much it have values
 * @param array and any
 * @returns obj
 */

export const getKeyData = (data, key, count) => {
  const result = {};
  for (let i = 0; i < data.length; i++) {
    if (!result[data[i][key]]) {
      result[data[i][key]] = count ? data[i][count] : 1;
    } else {
      result[data[i][key]] =
        result[data[i][key]] + (count ? data[i][count] : 1);
    }
  }

  return result;
};
