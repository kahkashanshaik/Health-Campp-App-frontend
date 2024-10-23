import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import DefaultLayout from '../components/layouts/DefaultLayout';
import AuthLayout from '../components/layouts/AuthLayout';
import BlankLayout from '../components/layouts/BlankLayouts';
const finalRoutes = routes.map((route) => {
  return {
    ...route,
    element: !route.layout ? (
      route.element
    ) : route.layout == 'auth' ? (
      <AuthLayout>{route.element}</AuthLayout>
    ) : route.layout == 'blank' ? (
      <BlankLayout>{route.element}</BlankLayout>
    ) : (
      <DefaultLayout>{route.element}</DefaultLayout>
    ),
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
