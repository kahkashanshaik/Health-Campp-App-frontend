import { NavLink, useNavigate } from 'react-router-dom';
import FiltersIcon from '../icons/Filters';
import Magnifier from '../icons/Magnifier';
import UserRounded from '../icons/UserRounded';
import SiteLogo from './Logo';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Settings from '../icons/Settings';

const Header = () => {
  const [search, setSearch] = useState('');
  const { user } = useSelector((state) => state.appConfig);
  const navigate = useNavigate();
  const handleSearch = () => {
    if (search.trim()) {
      navigate({ pathname: '/campaigns/', search: `?s=${search}` });
    }
  };
  return (
    <header className="z-40 lg:px-28 px-4">
      <div className="flex py-2 font-bold text-base justify-between items-center">
        <div className="flex gap-2 items-end">
          <SiteLogo />
          <span className="mb-3 text-sm font-medium">{user && `Hi, ${user.name}`}</span>
        </div>
        <ul className="lg:hidden flex items-center gap-3">
          <li>
            <NavLink to="/signup" className="svg-circle">
              {user ? <Settings /> : <UserRounded />}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="global__search">
        <div className="search_icon">
          <Magnifier size="16" color="#929597" />
        </div>
        <input type="text" placeholder="Search Campaigns" defaultValue={search} onChange={(event) => setSearch(event.target.value)} />
        <button onClick={() => handleSearch()} className="search_btn">
          <FiltersIcon />
        </button>
      </div>
    </header>
  );
};
export default Header;
