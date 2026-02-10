import React from 'react';

const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/30/10/18/drone-6585450_1280.jpg"
            alt="First slide"
            className="d-block w-100 custom-carousel-image"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/31/20/13/flash-2702168_1280.jpg"
            alt="Second slide"
            className="d-block w-100 custom-carousel-image"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg"
            alt="Third slide"
            className="d-block w-100 custom-carousel-image"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Précédent</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Suivant</span>
      </button>
    </div>
  );
};

export default Carousel;
