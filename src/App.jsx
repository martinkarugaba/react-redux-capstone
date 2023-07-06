import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { fetchCountries } from './redux/countries/countriesSlice';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import DetailsLayout from './layouts/DetailsLayout';
import SingleCountryDetails from './components/SingleCountryDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="country" element={<DetailsLayout />}>
        <Route path=":name" element={<SingleCountryDetails />} />
      </Route>
    </Route>,
  ),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="font-lato">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
