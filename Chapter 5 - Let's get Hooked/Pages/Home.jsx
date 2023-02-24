import React, { useState } from 'react'
import RestaurantCard from '../Component/RestaurantCard';
import SearchBar from '../Component/SearchBar';
import { restaurantList } from '../constant';





function Home() {
    const [restaurants,setRestaurants] =useState(restaurantList)
  return (
    <>
   <SearchBar/>
    <div className='restaurant-list'>
        {restaurants.map((restaurant)=>{
            return (<RestaurantCard key={restaurant.data.id} {...restaurant.data}/>)
        })}

    </div>
    </>
    
  )
}

export default Home