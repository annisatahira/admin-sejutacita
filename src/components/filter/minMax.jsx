import { useEffect, useState } from "react";
import Button from "../button";
import { filterMinMax } from "@/utils";

const MinMax = (props) => {
  const { id, dataTable, setDataTable, allData, filterBy } = props;

  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);

  useEffect(() => {
    if (minValue === "" && maxValue === "") {
      setDataTable(allData);
    }
  }, [minValue, maxValue]);

  useEffect(() => {
    const key = sessionStorage.getItem(`${id}-filter`);

    if (key) {
      const keyJson = JSON.parse(key);

      if (keyJson["range"]) {
        setMinValue(parseInt(keyJson["range"]["minValue"]));
        setMaxValue(parseInt(keyJson["range"]["maxValue"]));
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // autosaved
    const range = {
      minValue,
      maxValue,
    };

    // get current filter
    const filters = sessionStorage.getItem(`product-filter`);

    if (filters) {
      const filtersJson = JSON.parse(filters);
      filtersJson["range"] = range;
      sessionStorage.setItem(
        `product-filter`,
        JSON.stringify({ ...filtersJson })
      );
    } else {
      sessionStorage.setItem(`product-filter`, JSON.stringify({ range }));
    }

    // filter data
    const filteredData = filterMinMax({
      data: dataTable,
      filterBy,
      minValue,
      maxValue,
    });

    setDataTable(filteredData);
  };

  return (
    <form id={id} onSubmit={handleSubmit} className="flex items-center gap-3">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="min-price"
        >
          Min
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="min-price"
          type="number"
          min={0}
          value={minValue || ""}
          onChange={(e) => setMinValue(e.target.value)}
          placeholder="0"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="max-price"
        >
          Max
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="max-price"
          type="number"
          value={maxValue || ""}
          onChange={(e) => setMaxValue(e.target.value)}
          placeholder="10000"
        />
      </div>
      <Button type="submit" title="OK" />
    </form>
  );
};

export default MinMax;
