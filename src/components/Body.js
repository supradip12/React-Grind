import { useEffect, useState } from "react";
import { RestaurentCard } from "./RestaurentCard";
import { res } from "../utils/Resdata";
export { res } from "../utils/Resdata";
export const Body = () => {
  const [reslist, setResList] = useState(res);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.zomato.com/webroutes/auth/init");
    const res = await data.json();
    console.log(res);
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = reslist.filter((res) => res.rating > 4);
            setResList(filterList);
          }}
        >
          Filter
        </button>
        {reslist.map((res) => {
          return (
            <RestaurentCard
              resName={res.resName}
              rating={res.rating}
              key={res.id}
            />
          );
        })}
        {/* <RestaurentCard resName="Meghna Foods" rating="4.4" />
        <RestaurentCard resName="KFC" rating="4.2" />
        <RestaurentCard resName="KFC" rating="4.2" />
        <RestaurentCard resName="KFC" rating="4.2" /> */}
      </div>
    </div>
  );
};
export default Body;
