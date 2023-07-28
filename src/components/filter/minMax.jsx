import { useEffect, useState } from "react";
import Button from "../button";
import { checkFilter, filterMinMax } from "@/utils";
import Input from "../input";

const MinMax = (props) => {
  const { id, dataTable, setDataTable, allData, filterBy } = props;

  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);

  useEffect(() => {
    if (minValue === "" && maxValue === "") {
      const currentData = checkFilter(allData);
      setDataTable(currentData);
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
      minValue: minValue ? parseInt(minValue) : "",
      maxValue: maxValue ? parseInt(maxValue) : "",
    };

    handleAutoSave(range);

    // filter data
    const filteredData = filterMinMax({
      data: dataTable,
      filterBy,
      minValue: minValue ? parseInt(minValue) : "",
      maxValue: maxValue ? parseInt(maxValue) : "",
    });

    setDataTable(filteredData);
  };

  const handleAutoSave = (range) => {
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
  };

  const handleReset = () => {
    const range = {
      minValue: "",
      maxValue: "",
    };

    handleAutoSave(range);

    setMinValue("");
    setMaxValue("");
  };

  return (
    <div id={id} className="flex items-center gap-3 mt-1 border rounded-md p-3">
      <div className="mb-4">
        <Input
          label="Price Min"
          type="number"
          min={0}
          value={minValue || ""}
          onChange={(e) => setMinValue(e.target.value)}
          placeholder="0"
        />
      </div>
      <div className="mb-4">
        <Input
          label="Price Max"
          type="number"
          value={maxValue || ""}
          onChange={(e) => setMaxValue(e.target.value)}
          placeholder="10000"
        />
      </div>
      <div>
        <Button type="submit" title="Apply" onClick={handleSubmit} />
        <Button type="submit" title="Reset" onClick={handleReset} />
      </div>
    </div>
  );
};

export default MinMax;
