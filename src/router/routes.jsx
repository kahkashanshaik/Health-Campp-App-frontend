import { lazy } from 'react';

const IndexPage = lazy(() => import('../pages/index.jsx'));
const CampaignsPage = lazy(() => import('../pages/Campaigns.jsx'));
const SingleCampaign = lazy(() => import('../pages/SingleCampaign.jsx'));
const VolunteerSignup = lazy(() => import('../pages/VolunteerSignup.jsx'));

const routes = [
  {
    path: '/',
    element: <IndexPage />,
    layout: 'default',
  },
  {
    path: '/campaigns/',
    element: <CampaignsPage />,
    layout: 'blank',
  },
  {
    path: '/campaigns/:id',
    element: <SingleCampaign />,
    layout: 'blank',
  },
  {
    path: '/signup',
    element: <VolunteerSignup />,
  },
];

export { routes };
