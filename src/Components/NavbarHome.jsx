import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../Assets/style.css";
import $ from "jquery";
import { useNavigate, Link } from "react-router-dom";

function NavbarHome() {
  const navigate = useNavigate();
  const prams = window.location.pathname;
  const [imgChange, setImgChange] = useState(false);
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
      setImgChange(true);
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
      setImgChange(false);
    }
  });
  return (
    <>
      {/* Navbar & Hero Start  */}
      <div className="container-xxl position-relative p-0">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg=""
          variant="light"
          className="position-relative"
        >
          <Navbar.Toggle
              id="basic-navbar-nav"
              aria-controls="navbarScroll"
              data-bs-target="#navbarScroll"
              className="navbar-toggler"
              style={{position:"absolute" , right:"20px" , top:"20px"}}
            />
          <Nav
            className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"
          >
            <Navbar.Brand
              className="navbar-brand p-0"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              {/* <h1 className="m-0">BizConsult</h1> */}
              {imgChange === true ? (
                <img
                  src="img/lezlay(2).jpg"
                  alt="Logo"
                  style={{ borderRadius: "10px", width: "120px" }}
                />
              ) : (
                <img
                  src="img/lezlayNew.png"
                  alt="Logo"
                  // style={{ borderRadius: "10px", height:"100px" , width:"170px" }}
                />
              )}
            </Navbar.Brand>
            
            <Navbar.Collapse className="collapse navbar-collapse">
              {/* <div className="collapse navbar-collapse" id="navbarCollapse"> */}
              <div className="navbar-nav me-lg-5 pe-lg-5 ms-auto py-0">
                <Nav.Link
                  eventKey="1"
                  as={Link}
                  to="/"
                  className="nav-item nav-link"
                  style={{
                    borderBottom: prams == "/" ? "1px solid #fff" : "none",
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  eventKey="2"
                  as={Link}
                  to="/about"
                  className="nav-item nav-link"
                  style={{
                    borderBottom: prams == "/about" ? "1px solid #fff" : "none",
                  }}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  eventKey="3"
                  as={Link}
                  to="/service"
                  className="nav-item nav-link"
                  style={{
                    borderBottom:
                      prams == "/service" ? "1px solid #fff" : "none",
                  }}
                >
                  Service
                </Nav.Link>
                <Nav.Link
                  eventKey="4"
                  as={Link}
                  to="/contact"
                  className="nav-item nav-link"
                  style={{
                    borderBottom:
                      prams == "/contact" ? "1px solid #fff" : "none",
                  }}
                >
                  Contact
                </Nav.Link>
              </div>
              {/* <button
                className="btn btn-light rounded-pill py-2 px-4 ms-lg-5"
                style={{ color: "#05386B" }}
              >
                Login
              </button> */}
              {/* </div> */}
            </Navbar.Collapse>
          </Nav>
        </Navbar>
        <div
          className="container-xxl hero-header"
          style={{ display: prams == "/" ? "block" : "none" }}
        >
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="text-white mb-4 animated zoomIn text-capitalize">
                  We Are Complete Solution to grow Your Business online
                </h1>
                <p className="text-white pb-3 animated zoomIn">
                  Lezlay Solution is a software company, providing web based solutions,
                  software based solutions and also call center services
                  according to client's requirements.
                </p>
                {/* <a
                  href="/"
                  className="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight"
                >
                  Learn More
                </a> */}
              </div>
              <div className="col-lg-6 text-center text-lg-start pb-5">
                <img
                  className="img-fluid animated zoomIn HeroImg"
                  src="img/Hero10.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </>
  );
}

export default NavbarHome;
