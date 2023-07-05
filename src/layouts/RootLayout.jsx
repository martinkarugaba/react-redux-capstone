import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
);
export default RootLayout;
