import React from "react";

function ShimmerMenu() {
  return (
    <div className="shimmmer-container">
      <div className="shimmer-header-container stroke-color animate">
        <div className="shimmmer-images-container stoke animate"></div>
        <div className="shimmer-summmary-container">
          <h2 className="shimmer-title stroke animate"></h2>
          <p className="shimmer-para stroke animate"></p>
          <div className="shimmer-rating-detail stroke animate"></div>
        </div>
      </div>
      <div className="shimmer-menu-content">
        <div className="shimmer-menu-container">
          <div className="shimmer-title-wrapper">
            <h1 className="shimmer-title stroke animate"></h1>
            <p className="shimmer-count stroke animate"></p>
          </div>
          <div className="shimmer-items-list">
            {new Array(5).fill(0).map((item, index) => (
              <div className="shimmer-item" key={index}>
                <div className="shimmmer-item-detail ">
                  <div className="shimmer-item-heading stroke animate"></div>
                  <div className="shimmer-item-price stroke animate"></div>
                  <div className="shimmer-item-desc stroke animate"></div>
                </div>
                <div className="shimmer-image-wrapper">
                  <img className="shimmer-item-image stroke animate" />
                  <div className="shimmmer-add-btn stroke animate"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerMenu;
