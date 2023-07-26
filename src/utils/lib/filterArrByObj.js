export const filterArrByObj = (data, obj) => {
  console.log({ data, obj });
  const results = data?.filter((item) => {
    return Object.keys(obj).every((key) => {
      console.log({ a: obj[key], b: item[key] });
      return item[key].toLowerCase().includes(obj[key].toLowerCase());
    });
  });

  return results;
};
