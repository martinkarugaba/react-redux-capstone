import { Link, Outlet, useParams } from 'react-router-dom';

const DetailsLayout = () => {
  const { name } = useParams();

  return (
    <div className="bg-primary">
      <div className="px-4 py-1 text-white text-sm font-bold uppercase">
        <Link to="/">Back</Link>
      </div>
      <div className="h-[150px] text-white w-full shadow flex justify-end items-center py-0 p-4">
        <h2 className="text-3xl text-right font-bold uppercase">
          {name}
        </h2>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default DetailsLayout;
