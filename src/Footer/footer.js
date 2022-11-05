import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Link } from "react-router-dom";
export default function FooterComponant() {

  return (
    <React.Fragment>
      <div className="bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center align-items-center text-white text-center">
              <div className="col">Copyright 2022</div>
              <div className="col">
                <button
                  className=""
                  style={{
                    width: "200px",
                    background: "none",
                    border: "2px solid #fff",
                    padding: "10px",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/mostafa-elzohry/",
                    }}
                    target="_blank"
                  >
                    contact us
                  </Link>
                </button>
              </div>
              {/* <i class="fab fa-facebook-f px-3"></i>
                            <i class="fab fa-youtube px-3"></i>
                            <i class="fab fa-twitter px-3"></i> */}
              <div className="col">
                <Link
                  to={{ pathname: "https://www.facebook.com" }}
                  target="_blank"
                  className="col-4"
                >
                  {" "}
                  <i class="fab fa-facebook-f px-3"></i>
                </Link>

                <Link
                  to={{ pathname: "https://www.youtube.com" }}
                  target="_blank"
                  className="col-4"
                >
                  {" "}
                  <i class="fab fa-youtube px-3"> </i>{" "}
                </Link>

                <Link
                  to={{ pathname: "https://www.twitter.com" }}
                  target="_blank"
                  className="col-4"
                >
                  <i class="fab fa-twitter px-3"> </i>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
