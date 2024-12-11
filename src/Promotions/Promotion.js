import React from 'react';
import './Promotion.css';

function Promotion() {
  return (
    <div className="row justify-content-center">
      <img
        src="./Navbar_img/pro1.gif"
        alt="Promotion Example"
        style={{ maxWidth: '30%', height: '350px' }} // ปรับขนาดให้เหมาะสม
      />
      <img
        src="./Navbar_img/pro2.gif"
        alt="Promotion Example"
        style={{ maxWidth: '30%', height: '350px' }} // ปรับขนาดให้เหมาะสม
      />
    </div>
  );
}

export default Promotion;
