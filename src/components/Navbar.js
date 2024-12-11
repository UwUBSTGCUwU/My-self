import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="row">
      <nav className="navbar bg-purple">
        <div className="container-fluid">
          {/* Logo Section */}
          <a className="navbar-brand text-light ps-3 d-flex align-items-center" href="#">
            <img
              src="./Navbar_img/logo.gif"
              alt="Logo"
              width="150"
              height="75"
              className="d-inline-block align-text-top"
            />
            <span className="ms-2 fs-2">Mediuam Hotel</span>
          </a>

          {/* Buttons Section */}
          <form className="d-flex ms-auto pe-3">
            <button className="btn btn-outline-success me-2 d-flex align-items-center" type="button">
              <img
                src="https://cdn-icons-png.flaticon.com/512/929/929409.png"
                alt="room-icon"
                width="20"
                height="20"
                className="me-2"
              />
              ดูห้องพัก
            </button>
            <button
              className="btn btn-sm btn-outline-secondary btn-lg d-flex align-items-center"
              type="button"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
                alt="thai-flag"
                width="20"
                height="20"
                className="me-2"
              />
              ENG
            </button>
          </form>
          <a className="navbar-brand text-light ps-3 d-flex align-items-center" href="#">
            <img
              src="./Navbar_img/logo2.gif"
              alt="Logo"
              width="150"
              height="75"
              className="d-inline-block align-text-top"
            />
            <span className="ms-2 fs-3">Username</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
