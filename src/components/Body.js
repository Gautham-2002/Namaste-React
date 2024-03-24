import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

// not using keys(not acceptable) <<<< index as key <<<<<<<<<< unique id (best practice)
const Body = () => {
  //local state variable  - super powerful variable
  // const [listOfRestaurants, setListOfRestaurants] = useState([
  //   {
  //     info: {
  //       id: "79706",
  //       name: "Shah Ghouse Hotel & Restaurant",
  //       cloudinaryImageId: "ggbuknqzqc4qoqfnl2cr",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Biryani", "North Indian", "Chinese", "Mughlai", "Tandoor"],
  //       avgRating: 4.2,
  //       parentId: "19271",
  //       avgRatingString: "4.2",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "128088",
  //       name: "UBQ by Barbeque Nation",
  //       cloudinaryImageId: "tmgevb2eg3red7aydzjm",
  //       locality: "Jubilee Alcazar",
  //       areaName: "Jubilee Hills",
  //       costForTwo: "₹300 for two",
  //       cuisines: [
  //         "North Indian",
  //         "Barbecue",
  //         "Biryani",
  //         "Kebabs",
  //         "Mughlai",
  //         "Desserts",
  //       ],
  //       avgRating: 3.6,
  //       parentId: "10804",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "4138",
  //       name: "Grand Hotel",
  //       cloudinaryImageId: "g1arzw6qd7g9affkmgzk",
  //       locality: "Banjara Hills",
  //       areaName: "Abids",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Haleem", "Biryani", "Tandoor", "Chinese"],
  //       avgRating: 4.3,
  //       parentId: "4001",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "370716",
  //       name: "Pista House Haleem",
  //       cloudinaryImageId: "vdpaxyvjb7dqimjz1fj7",
  //       locality: "Mehdipatnam",
  //       areaName: "Mehdipatnam",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Haleem"],
  //       avgRating: 4.3,
  //       parentId: "21968",
  //     },
  //   },
  // ]);
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //normal js variable
  //let listOfRestaurants = [];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
            setListOfRestaurants(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
