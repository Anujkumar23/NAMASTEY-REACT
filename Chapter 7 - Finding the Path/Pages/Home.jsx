import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../Component/RestaurantCard";
import Shimmer from "../Component/Shimmer";

import {SWIGGY_API_URL} from "../constant";



function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorFilterMsg,setErrorFilterMsg]=useState("")

  useEffect(() => {
    getRestaurant()
  }, [])
  
  

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
   }


   async function getRestaurant(){
    try{
       const data= await fetch(SWIGGY_API_URL);
        const json=  await data.json();
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        console.log(json);
        console.log(json?.data?.cards[2]?.data?.data?.cards)
    }
    catch(error){
      console.log(error.message)
    }
   
        
  }


   if(!restaurants){
    return null;
   }

  

  

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
       {restaurants.length===0?<Shimmer/>:
      <div className="restaurant-list">
        {filterRestaurants.map((restaurant) => {
          return (
            <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id}
            >
             <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
            </Link>
           
          );
        })}
      </div>
    
     }
     </>
      
   
  );
}

export default Home;
