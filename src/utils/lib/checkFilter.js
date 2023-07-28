import { filterArrByObj } from "./filterArrByObj";
import { filterMinMax } from "./filterMinMax";

export const checkFilter = (data) => {
  const filters = JSON.parse(sessionStorage.getItem("product-filter"));
  let filteredProducts = data;
  if (filters && Object.keys(filters).length !== 0) {
    // for brand, category, product
    if (filters?.filter) {
      const filterData = filterArrByObj(data, filters?.filter);
      filteredProducts = filterData;
    }

    // for min max
    if (filters?.range) {
      const filteredProductWIthRange = filterMinMax({
        data: filteredProducts,
        filterBy: "price",
        minValue: parseInt(filters?.range?.minValue),
        maxValue: parseInt(filters?.range?.maxValue),
      });

      filteredProducts = filteredProductWIthRange;
    }
  }

  return filteredProducts;
};
