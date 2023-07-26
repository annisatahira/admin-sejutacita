import { useEffect, useState } from "react";

const SearchBar = (props) => {
  const { id, fetchAll, fetchSearch, searchBy } = props;
  const [inputText, setInputText] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    // autosaved
    const data = { title: inputText };
    sessionStorage.setItem(`${id}-filter`, JSON.stringify(data));
    // fetch data by given key
    fetchSearch(inputText);
  };

  useEffect(() => {
    const key = JSON.parse(sessionStorage.getItem(`${id}-filter`));

    if (key && key[searchBy] !== "") {
      setInputText(key[searchBy]);
      fetchSearch(key[searchBy]);
    }
  }, []);

  useEffect(() => {
    if (inputText == "") {
      // autosaved
      const filter = sessionStorage.getItem(`${id}-filter`);
      const objFilter = JSON.parse(filter);

      delete objFilter[searchBy];
      sessionStorage.setItem(`${id}-filter`, JSON.stringify(objFilter));

      fetchAll();
    }
  }, [inputText]);

  return (
    <form onSubmit={handleSearch} className="my-4">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          placeholder="Product Name"
          value={inputText || ""}
          onChange={(e) => setInputText(e.target.value)}
          required
        />

        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
