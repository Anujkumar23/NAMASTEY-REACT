import React from 'react'
import { IMG_CDN_URL } from '../constant'

function RestaurantCard({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) {
  return (
    <div className="restaurant-card">
    <img
      src={IMG_CDN_URL+ cloudinaryImageId}
    />
    <h3>{name}</h3>
    <h5>{cuisines.join(", ")}</h5>
    <h5>{area}</h5>
    <span>
    <h4 style={avgRating<4?{backgroundColor:"#ed3838"}: avgRating=="--"? {backgroundColor:"white",color:'black'}:{color:"white"}}><i className="fa-solid fa name"></i>{avgRating}</h4>
      <h4>•</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>•</h4>
      <h4>{costForTwoString}</h4>
    </span>
  </div>
  )
}

export default RestaurantCard


