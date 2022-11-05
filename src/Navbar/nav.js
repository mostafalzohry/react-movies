import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./star.css";

function NavComponant() {
  const favCount = useSelector((state) => state.favorite.numberCart);

  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            {" "}
            <Link to="" class="nav-link">
              React
            </Link>{" "}
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link to="" class="nav-link">
                  Home
                </Link>
              </li>
           \
            </ul>
            <Link to="/favorite">
              <div className="fav-count" class="d-flex">
                <i class="fas fa-star text-white"></i>
                <span className="text-white">{favCount}</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default NavComponant;
