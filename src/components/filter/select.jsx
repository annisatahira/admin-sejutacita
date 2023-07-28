import { useEffect, useState } from "react";
import { default as ReactSelect } from "react-select";
import Option from "./options";
import { filterArrByObj, getKeyData, objToArray } from "@/utils";

// dataTable --> data yg berubah hasil search dan filter
// options ---> keseluruhan data awal

const Select = (props) => {
  const { id, title, setDataTable, options, filterBy, initialValue } = props;
  const [optionSelected, setOptionSelected] = useState(null);
  const [optionData, setOptionData] = useState([]);

  const handleChange = (selected) => {
    setOptionSelected(selected);

    // get selected filter
    const conditions = getFillteredKey(selected);

    // filter data by selected filter
    const dataFiltered = filterArrByObj(options, conditions?.filter);

    setDataTable(dataFiltered);
  };

  const getFillteredKey = (selected) => {
    const allFilter = sessionStorage.getItem("product-filter");

    if (allFilter && allFilter !== null && allFilter !== "") {
      const objFilter = JSON.parse(allFilter);

      const newFilter = {
        [filterBy]: selected?.label,
      };

      if (selected == null) {
        delete objFilter["filter"][filterBy];
      } else {
        if (objFilter["filter"]) {
          objFilter["filter"][filterBy] = selected?.label;
        } else {
          objFilter["filter"] = newFilter;
        }
      }

      sessionStorage.setItem("product-filter", JSON.stringify(objFilter));

      return objFilter;
    } else {
      const savedFilter = {
        filter: {},
      };

      savedFilter["filter"][filterBy] = selected?.label;
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

    if (initialValue?.label) {
      setOptionSelected(initialValue);
    }
  }, [options]);

  return (
    <div>
      <h1 className="mb-2 font-medium">By {title}</h1>
      <ReactSelect
        id={id}
        instanceId={id}
        options={optionData}
        closeMenuOnSelect={true}
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
