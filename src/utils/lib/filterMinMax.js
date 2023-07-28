export const filterMinMax = ({ data, filterBy, minValue, maxValue }) => {
  let min = minValue ? parseInt(minValue) : "";
  let max = maxValue ? parseInt(maxValue) : "";

  const result = [...data].filter((item) => {
    // if minValue is EMpty then replace it w/ 0
    let defaultMinValue = min == "" ? 0 : min;

    // if maxValue is Empty then just filter by min value
    let condition =
      max == ""
        ? item[filterBy] >= defaultMinValue
        : item[filterBy] >= defaultMinValue && item[filterBy] <= max;

    return condition;
  });

  return result;
};
