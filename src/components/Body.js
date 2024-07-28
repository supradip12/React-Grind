import { useEffect, useState } from "react";
import { RestaurentCard } from "./RestaurentCard";
import { resdata } from "../utils/Resdata";
import Shimmer from "./Shimmer";
// export { res } from "../utils/zoma";
export const Body = () => {
  const [reslist, setResList] = useState([]);

  useEffect(() => {
    setResList(resdata);
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.zomato.com/webroutes/search/home");
    const res = await data.json();
    // setResList(res);
    // console.log(reslist);
    // console.log("Two section/n");
    console.log(res);
  };

  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = reslist.filter((res) => res.info.rating > 4);
            setResList(filterList);
          }}
        >
          Filter
        </button>
        {reslist.map((res) => {
          return (
            <RestaurentCard
              resName={res.info.name}
              // rating={res.i}
              rating="5"
              key={res.info.rating.aggregate_rating}
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
