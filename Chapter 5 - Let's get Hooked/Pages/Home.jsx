import React, { useState } from "react";
import RestaurantCard from "../Component/RestaurantCard";

import { restaurantList } from "../constant";

// const errorMessage = () => {
//   return <h1>No match found</h1>;
// };

function Home() {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [filterRestaurants, setFilterRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  const [errorFilterMsg,setErrorFilterMsg]=useState("")

  // const onFilterData = (searchText, restaurants) => {
  //   const filterData = restaurants.filter((restaurant) => {
  //     restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
  //   });

  //   return filterData;
  // };

   const onHandleSearch=(searchText,restaurants)=>{
    if(searchText!==""){
      const filterData = restaurants.filter((restaurant) => { 
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
          });
          console.log(filterData);
          setErrorFilterMsg("")
          setFilterRestaurants(filterData);
          if(filterData.length===0){
            setErrorFilterMsg("No Match Found")

          }
     
    }
    else{
      setFilterRestaurants(restaurants);
      setErrorFilterMsg("")
    }
    
    
    
    console.log(searchText);
    console.log(restaurants);
   
   }


  

  // const onSearch = (searchText, restaurants) => {
  //   if (searchText !== "") {
  //     const data = onFilterData(searchText, restaurants);
  //     console.log(data)
  //     setFilterReastaurants(data);

  //     if (data.length == 0) {
  //       return { errorMessage };
  //     } 
  //   }
  //     else {
  //       setFilterReastaurants(restaurants);
  //       console.log(restaurants);
  //     }
  // };

  return (
    <>
    
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for restaurant..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {onHandleSearch(searchText,restaurants)}}
          className="search-button"
        >
          Search
        </button>
      </div>
      {errorFilterMsg && <div className="error-container" >{errorFilterMsg}</div>
    }
      <div className="restaurant-list">
        {filterRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
}

export default Home;
