import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { fetchData } from './redux/data/dataSlice';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Details from './pages/Details';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="details" element={<Details />} />
    </Route>,
  ),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="font-lato">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
