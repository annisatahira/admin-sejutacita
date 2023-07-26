import { useEffect, useState } from "react";
import { default as ReactSelect } from "react-select";
import Option from "./options";
import { filterArrByObj, getKeyData, objToArray } from "@/utils";

// dataTable --> data yg berubah hasil search dan filter
// options ---> keseluruhan data awal

const Select = (props) => {
  const { id, title, dataTable, setDataTable, options, filterBy } = props;
  const [optionSelected, setOptionSelected] = useState(null);
  const [optionData, setOptionData] = useState([]);

  console.log({ optionSelected });

  const handleChange = (selected) => {
    console.log({ options });
    setOptionSelected(selected);

    // get selected filter
    const conditions = getFillteredKey(selected);

    // filter data by selected filter
    const dataFiltered = filterArrByObj(options, conditions);

    setDataTable(dataFiltered);
  };

  const getFillteredKey = (selected) => {
    const allFilter = sessionStorage.getItem("product-filter");

    if (allFilter && allFilter !== null && allFilter !== "") {
      const objFilter = JSON.parse(allFilter);

      if (selected == null) {
        delete objFilter[filterBy];
      } else {
        objFilter[filterBy] = selected?.label;
      }

      sessionStorage.setItem("product-filter", JSON.stringify(objFilter));

      console.log({ objFilter });

      return objFilter;
    } else {
      const savedFilter = {};

      savedFilter[filterBy] = selected?.label;
      sessionStorage.setItem("product-filter", JSON.stringify(savedFilter));

      return savedFilter;
    }
  };

  useEffect(() => {
    if (options.length > 0) {
      const objProducts = getKeyData(options, filterBy);
      const data = objToArray(objProducts);
      setOptionData(data);
    }
  }, [options]);

  useEffect(() => {
    const allFilter = sessionStorage.getItem("product-filter");
    console.log({ options, allFilter });
  }, []);

  return (
    <div>
      <h1 className="mb-2">By {title}</h1>
      <ReactSelect
        id={id}
        instanceId={id}
        options={optionData}
        closeMenuOnSelect={false}
        isClearable={true}
        hideSelectedOptions={false}
        components={{
          Option,
        }}
        onChange={handleChange}
        value={optionSelected}
      />
    </div>
  );
};

export default Select;
