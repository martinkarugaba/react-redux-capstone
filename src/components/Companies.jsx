import { useSelector } from "react-redux";
import SingleCompany from "./SingleCompany";

const Companies = () => {
  const { stockData } = useSelector((store) => store.stockData);
  return (
    <div>
      {stockData.map((item) => {
        return (
          <SingleCompany
            key={item.symbol}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};
export default Companies;
