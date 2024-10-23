import { ToastContainer, toast } from 'react-toastify';
const Toaster = ({ type, data }) => {
  return (
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"></ToastContainer>
  );
};

export default Toaster;
