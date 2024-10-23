import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// Css Toaster
import 'react-toastify/dist/ReactToastify.css';
// Routes
import router from './router/index.jsx';
import { RouterProvider } from 'react-router-dom';
// Store
import store from './store/index.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </StrictMode>
);
