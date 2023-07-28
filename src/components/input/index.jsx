const Input = (props) => {
  const { label, ...rest } = props;
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="max-price"
      >
        {label}
      </label>
      <input
        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-blue-500"
        {...rest}
      />
    </div>
  );
};

export default Input;
