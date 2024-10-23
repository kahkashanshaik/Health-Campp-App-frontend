import { NavLink } from 'react-router-dom';
import App from '../../App';
import Footer from '../common/footer';
import UserRounded from '../icons/UserRounded';
import { useSelector } from 'react-redux';
import Spinner from '../common/Spinner';
import BackButton from '../common/BackButton';

const BlankLayout = ({ children }) => {
  const { spinner } = useSelector((state) => state.appConfig);
  return (
    <>
      {spinner && <Spinner />}
      {/* Header */}
      <header className="p-3 px-5 flex justify-between">
        <BackButton />
        <NavLink to="/signup" className="svg-circle">
          <UserRounded />
        </NavLink>
      </header>
      <App>{children}</App>
      <Footer />
    </>
  );
};
export default BlankLayout;
