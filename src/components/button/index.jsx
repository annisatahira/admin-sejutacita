const Button = (props) => {
  const { title, icon, ...rest } = props;
  return (
    <button
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full 
    shadow-lg"
      {...rest}
    >
      {icon}
      {title}
    </button>
  );
};

export default Button;
