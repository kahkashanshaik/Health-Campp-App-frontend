import { useState } from 'react';
import FiltersIcon from '../icons/Filters';
import Magnifier from '../icons/Magnifier';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    if (search.trim()) {
      navigate({ pathname: '/campaigns/', search: `?s=${search}` });
    }
  };
  return (
    <div className="global__search">
      <div className="search_icon">
        <Magnifier size="16" color="#929597" />
      </div>
      <input type="text" placeholder="Search Campaigns" defaultValue={search} onChange={(event) => setSearch(event.target.value)} />
      <button onClick={() => handleSearch()} className="search_btn">
        <FiltersIcon />
      </button>
    </div>
  );
};

export default Search;
