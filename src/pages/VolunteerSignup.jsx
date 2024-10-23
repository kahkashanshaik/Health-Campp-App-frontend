import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/common/Spinner';
import BackButton from '../components/common/BackButton';
import { useFormik } from 'formik';
import IconMail from '../components/icons/IconMail';
import IconLockDots from '../components/icons/IconLockDots';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import EyeIcon from '../components/icons/Eye';
import Toaster from '../components/common/Toaster';
import { setAccessToken, setUser } from '../store/appConfigSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../services/endpoints/volunteers/auth';
const VolunteerSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { spinner, user, token } = useSelector((state) => state.appConfig);
  const [showPassword, setShowPassword] = useState(false);
  const [login, { data }] = useLoginMutation();
  // Form validation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      login({ email: values.email, password: values.password });
    },
  });
  // Redirect to home if user is already logged in
  useEffect(() => {
    if (user && token) {
      navigate('/');
    }
  }, [user, token]);
  // Redirect to home after successfull login
  useEffect(() => {
    if (data) {
      if (data) {
        dispatch(setUser(data.user));
        dispatch(setAccessToken(data.token));
        navigate('/');
      }
    }
  }, [data]);
  return (
    <>
      <Toaster />
      {spinner && <Spinner />}
      <div className="content__wrapper flex flex-col mt-0 p-0 w-full mb-28 justify-center items-center prose">
        <div className="signup__header h-70 bg-primary-light w-full p-0 absolute top-0  z-30">
          <div className="flex px-5 pt-5 pb-0">
            <BackButton color="#fff" />
          </div>
          <div className="signup__header">
            <div className="flex justify-center">
              <img src="./signup_illustration.png" className="w-64 mt-0" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-3xl mt-[235px] p-5 w-11/12 z-40  rounded-3xl">
          <div className="flex flex-col items-center">
            <h4 className="font-extrabold text-primary-dark mt-5 mb-0">Volunteer Signup</h4>
            <p className="text-sm text-center text-primary-dark mt-0 pt-0">Signin to start your session</p>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 w-full pb-5">
              <div>
                <label htmlFor="email">Email</label>
                <div className={`relative ${formik.errors.email && formik.touched.email ? 'has-error' : ''}`}>
                  <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} className="form-input ps-14" />
                  <span className="absolute start-4 top-1/2 -translate-y-1/2">
                    <IconMail color="#7cb14d" />
                  </span>
                </div>
                {formik.errors.email && <span className="text-red-300 text-xs font-bold">{formik.errors.email}</span>}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <div className={`relative ${formik.errors.password && formik.touched.password ? 'has-error' : ''}`}>
                  <input type={showPassword ? 'text' : 'password'} id="password" name="password" onChange={formik.handleChange} value={formik.values.password} className="form-input ps-14" />
                  <span className="absolute start-4 top-1/2 -translate-y-1/2">
                    <IconLockDots color="#7cb14d" />
                  </span>
                  <span className="absolute end-4 top-[3px] translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                    <EyeIcon size="18" color="#7cb14d" />
                  </span>
                </div>
                {formik.errors.password && <span className="text-red-300 text-xs font-bold">{formik.errors.password}</span>}
              </div>
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
              <p className="text-xs">
                Forgot you password ? <Link to="/register">Reset</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerSignup;
