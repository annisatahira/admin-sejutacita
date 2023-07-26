export const filterArrByObj = (data, obj) => {
  const results = data?.filter((item) => {
    return Object.keys(obj).every((key) => {
      return item[key].toLowerCase().includes(obj[key].toLowerCase());
    });
  });

  return results;
};
