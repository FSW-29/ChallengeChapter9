import React from "react";

function CarouselGameListComponent() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.crazygames.com/smash-karts/20201119155032/smash-karts-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&fit=crop"
              className="d-block w-100 mh-50"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.crazygames.com/puppet-fighter-2-player/20221123094627/puppet-fighter-2-player-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&fit=crop"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.crazygames.com/roboduo/20220808111036/roboduo-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&fit=crop"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
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
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CarouselGameListComponent;
