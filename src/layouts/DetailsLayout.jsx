import { Link, Outlet, useParams } from "react-router-dom";

const DetailsLayout = () => {
  const { name } = useParams();

  return (
    <div>
      <div className="bg-red-300">
        <Link to="/">Back</Link>
      </div>
      <div className="h-[150px] w-full shadow flex justify-end items-center py-0 p-4">
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
