import React from 'react';
import './Carousel.css';

function Carousel() {
  return (
    <div className="row justify-content-center">
      <div id="carouselExample" className="carousel slide" style={{ maxWidth: '75%' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=414x232"
              className="d-block w-100"
              alt="..."
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1"
              className="d-block w-100"
              alt="..."
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/592525141.jpg?k=55cbfdb7187718efa3fdbc6046def889716f86109b38e87677947ece51b9370d&o=&hp=1"
              className="d-block w-100"
              alt="..."
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
