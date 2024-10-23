import { NavLink } from 'react-router-dom';
import Home from '../icons/Home';
import CheckList from '../icons/Checklist';
import Call from '../icons/Call';
import Magnifier from '../icons/Magnifier';

const Footer = () => {
  return (
    <footer className="default__footer">
      <div className="footer__wrapper">
        {/* Home */}
        <NavLink to="/">
          <Home size={25} color="#fff" />
        </NavLink>

        {/* Campaigns */}
        <NavLink to="/campaigns">
          <CheckList size={25} color="#fff" />
        </NavLink>

        {/* Patient Search */}
        <NavLink to="/profile">
          <Magnifier size={25} color="#fff" />
        </NavLink>

        {/* Help */}
        <NavLink to="/signup">
          <Call size={25} color="#fff" />
        </NavLink>
      </div>
    </footer>
  );
};
export default Footer;
