import { useSelector } from 'react-redux';
import App from '../../App';
import Footer from '../common/footer';
import Header from '../common/header';
import Spinner from '../common/Spinner';

const DefaultLayout = ({ children }) => {
  const { spinner } = useSelector((state) => state.appConfig);
  return (
    <div>
      {spinner && <Spinner />}
      <Header />
      <App>{children}</App>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
