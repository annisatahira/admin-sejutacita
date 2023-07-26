import { useEffect, useState } from "react";
import { default as ReactSelect } from "react-select";
import Option from "./options";
import { filterArrByObj, getKeyData, objToArray } from "@/utils";

const Select = (props) => {
  const { id, title, setDataTable, options, filterBy } = props;
  const [optionSelected, setOptionSelected] = useState(null);
  const [optionData, setOptionData] = useState([]);

  const handleChange = (selected) => {
    setOptionSelected(selected);

    // get selected filter
    const conditions = getFillteredKey(selected);

    // filter data by selected filter
    const dataFiltered = filterArrByObj(options, conditions);

    setDataTable(dataFiltered);
  };

  const getFillteredKey = (selected) => {
    const allFilter = sessionStorage.getItem("filter");

    if (allFilter && allFilter !== null && allFilter !== "") {
      const objFilter = JSON.parse(allFilter);

      if (selected == null) {
        delete objFilter[filterBy];
      } else {
        objFilter[filterBy] = selected?.label;
      }

      sessionStorage.setItem("filter", JSON.stringify(objFilter));

      return objFilter;
    } else {
      const savedFilter = {};

      savedFilter[filterBy] = selected?.label;
      sessionStorage.setItem("filter", JSON.stringify(savedFilter));

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
