import React from "react";

function LandingCarouselComponent() {
  return (
    <>
      {/* Landing Main Carousel */}
      <div className="landing-main-carousel">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="assets/4k-gaming.jpg"
                alt="Assassin's Creed"
              />
            </div>
            <div className="carousel-item active">
              <img
                src="assets/dark-souls.jpg"
                className="d-block w-100"
                alt="Dark Souls"
              />
            </div>
            <div className="carousel-item active">
              <img
                src="assets/rockpaperstrategy-1600.jpg"
                className="d-block w-100"
                alt="The Legendary Rock Paper Scissor"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingCarouselComponent;
