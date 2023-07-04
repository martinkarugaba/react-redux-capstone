import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/data/dataSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <h1>Financial app</h1>
    </>
  );
};

export default App;
