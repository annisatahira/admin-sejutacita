import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = (props) => {
  const { id, fetchAll, fetchSearch, searchBy, placeholder } = props;
  const [inputText, setInputText] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    // autosaved
    const data = {
      filter: { title: inputText },
    };
    const filters = sessionStorage.getItem(`${id}-filter`);

    if (filters) {
      const filterJson = JSON.parse(filters);
      filterJson["filter"][searchBy] = inputText;
      sessionStorage.setItem(`${id}-filter`, JSON.stringify(filterJson));
    } else {
      sessionStorage.setItem(`${id}-filter`, JSON.stringify(data));
    }

    // fetch data by given key
    fetchSearch(inputText);
  };

  useEffect(() => {
    const key = sessionStorage.getItem(`${id}-filter`);

    if (key && key["filter"]) {
      setInputText(JSON.parse(key)["filter"][searchBy]);
      fetchSearch(JSON.parse(key)["filter"][searchBy]);
    }
  }, []);

  useEffect(() => {
    if (inputText == "") {
      // autosaved
      const filter = sessionStorage.getItem(`${id}-filter`);
      if (filter) {
        const objFilter = JSON.parse(filter);

        delete objFilter["filter"][searchBy];
        sessionStorage.setItem(`${id}-filter`, JSON.stringify(objFilter));

        fetchAll();
      }
    }
  }, [inputText]);

  return (
    <form onSubmit={handleSearch} className="my-4 flex gap-2">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FiSearch className="text-xl" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full py-6 md:p-4 pl-10 md:pl-10 text-sm text-gray-900 shadow-md border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder={placeholder}
          value={inputText || ""}
          onChange={(e) => setInputText(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 md:py-2"
      >
        <span className="hidden md:block">Search</span>
        <FiSearch className="md:hidden text-xl" />
      </button>
    </form>
  );
};

export default SearchBar;
