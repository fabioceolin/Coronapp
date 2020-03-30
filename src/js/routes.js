
import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';

// Custom Pages
import LoginPage from '../pages/login.f7.html';
import ChartPage from '../pages/charts.f7.html';
import CountryListPage from '../pages/countryList.f7.html'
import summaryPage from '../pages/summary.f7.html'
import timelinePage from '../pages/timeline.f7.html'

import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/barchart/',
    component: ChartPage,
  },
  {
    path: '/countryList/',
    component: CountryListPage,
  },
  {
    path: '/summary/',
    component: summaryPage,
  },
  {
    path: '/timeline/country/:countrySlug/',
    component: timelinePage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;