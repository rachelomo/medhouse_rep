import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Dummy data with the components and their URLs
  const dummyData = [
    { name: 'Dropdown', url: '/dropdown' },
    { name: 'Dropdown_sec', url: '/dropdown-sec' },
    { name: 'Dropdown_Thrd', url: '/dropdown-thrd' },
    { name: 'Price', url: '/price' },
    { name: 'Faq', url: '/faq' },
    { name: 'BLog', url: '/blog' },
    { name: 'AboutUs', url: '/about-us' },
    { name: 'Adds', url: '/adds' },
  ];

  // Handle the search logic
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      const foundComponent = dummyData.find((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      if (foundComponent) {
        navigate(foundComponent.url);  // Redirect to the URL of the found component
      } else {
        alert('No matching Search found!');
      }
    }
  };

  return (
    <div className="search-container flex justify-center items-center mt-5 leading-none ">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="relative w-[69vw] right-8 p-3 bg-gray-200 text-white rounded-lg placeholder:text-gray-400 border-none "
          placeholder="Search"
        />
        <div
          onClick={handleSearch}
          className="absolute right-7 top-0 p-3"
        >
         <IoSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
