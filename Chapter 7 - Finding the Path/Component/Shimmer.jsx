import React from 'react'

function Shimmer() {
  return (
    <div className='shimmer-container'>
        {new Array(8).fill(0).map((elem,index)=>{
            return (
               
                    <div  key={index} className='shimmer-card'>
                        <div className='shimmer-img stroke animate'></div>
                        <div className='shimmer-tag stroke animate'></div>
                        <div className='shimmer-title stroke animate'></div>
                        <div className='shimmer-details stroke animate'></div>
                   

                </div>
            )
        })}
    </div>
  )
}

export default Shimmer