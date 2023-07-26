import { components } from "react-select";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export default Option;
