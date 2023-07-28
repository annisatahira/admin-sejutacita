export const filterMinMax = ({ data, filterBy, minValue, maxValue }) => {
  const result = [...data].filter((item) => {
    // if minValue is EMpty then replace it w/ 0
    let defaultMinValue = minValue == "" ? 0 : minValue;

    // if maxValue is Empty then just filter by min value
    let condition =
      maxValue == ""
        ? item[filterBy] >= defaultMinValue
        : item[filterBy] >= defaultMinValue && item[filterBy] <= maxValue;

    return condition;
  });

  return result;
};
