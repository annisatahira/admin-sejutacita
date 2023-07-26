export const filterArrByObj = (data, obj) => {
  const results = data.filter((item) => {
    return Object.keys(obj).every((key) => {
      return obj[key] === item[key];
    });
  });

  return results;
};
