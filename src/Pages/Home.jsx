import React from "react";
import AboutHome from "../Components/AboutHome";
import MailSection from "../Components/MailSection";
import $ from "jquery";
import Contact from "../Components/Contact";
import NavbarHome from "../Components/NavbarHome";
import Footer from "../Components/Footer";
import ClientFeed from "../Components/ClientFeed";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 2);
  };
  spinner();
  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </div>
        <div
          className="rounded-pill"
          style={{
            width: "120px",
            padding: "10px",
            backgroundColor: "#fff",
            position: "fixed",
            bottom: "60px",
            right: "40px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/contact")}
        >
          <p
            style={{
              paddingTop: "13px",
              marginLeft: "10px",
              color: "#05386B",
              fontWeight: "500",
            }}
          >
            Contact Us
          </p>
        </div>
        {/* Spinner end */}
        <NavbarHome />
        <AboutHome />
        <MailSection />
        <ClientFeed />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
