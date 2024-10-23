import { useSelector } from 'react-redux';
import App from '../../App';
import BackButton from '../common/BackButton';

const AuthLayout = ({ children }) => {
  const { spinner } = useSelector((state) => state.appConfig);
  return (
    <>
      {spinner && <Spinner />}
      <header className="p-3 px-5 flex justify-between">
        <BackButton />
      </header>
      <App>{children}</App>
    </>
  );
};

export default AuthLayout;
