import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { BsEyeFill, BsFillEyeFill } from "react-icons/bs";

const AboutHome = () => {
  return (
    <>
      <div className="container-xxl py-2">
        <h2 className="mb-5 text-center" style={{ color: "#05386B" }}>
          About Us
        </h2>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
              <img className="img-fluid" src="img/About.jpg" alt="aboutUs" />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h2 className="mb-4 text-uppercase">who we are</h2>
              <p className="mb-4">
                We are a software company, providing web based solutions,
                software based solutions and also call center services according
                to client's requirements.
              </p>
              <div className="row g-3 mb-4">
                <div className="col-12 d-flex">
                  <div
                    className="flex-shrink-0 btn-lg-square rounded-circle"
                    style={{ backgroundColor: "#05386B" }}
                  >
                    <TbTargetArrow color="white" size={20} />
                    {/* <i className="fa fa-user-tie text-white"></i> */}
                  </div>
                  <div className="ms-4">
                    <h6>Our Mission</h6>
                    <span>
                      Thriving to become essential to our customers by providing
                      differentiated products and services to help them achieve
                      their aspirations.
                    </span>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div
                    className="flex-shrink-0 btn-lg-square rounded-circle"
                    style={{ backgroundColor: "#05386B" }}
                  >
                    <BsFillEyeFill color="white" size={20} />
                    {/* <i className="fa fa-chart-line text-white"></i> */}
                  </div>
                  <div className="ms-4">
                    <h6>Our Vision</h6>
                    <span>
                      To organize the world’s information and make it
                      universally accessible and useful.
                    </span>
                  </div>
                </div>
              </div>
              {/* <button
                className="btn rounded-pill text-white py-3 px-5 mt-2"
                style={{ backgroundColor: "#05386B" }}
              >
                Read More
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
