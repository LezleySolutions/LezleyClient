import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaQuoteLeft } from "react-icons/fa";

const ClientFeed = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2500,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
};
  return (
    <>
      <div className="container-xxl py-6" >
        <div className="container">
          <div
            className="mx-auto text-center wow fadeInUp"
            style={{ maxWidth: "600px" }}
          >
            <h2
              className="mb-3 fw-bold text-center"
              style={{ color: "#05386B" }}
            >
              Testimonial
            </h2>
            <h2 className="mb-5">What Our Clients Say!</h2>
          </div>
          <OwlCarousel  className="owl-carousel testimonial-carousel" {...options}>
            <div className="testimonial-item rounded p-4 border-0">
              <FaQuoteLeft className="mb-3" size={40} color="#05386B" />
              <p>
                Great cutomer support from beginning
                to end of the process
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={"img/testimonial-1.jpg"}
                  alt="testimonials"
                />
                <div className="ps-3">
                  <h6 className="mb-1">Hannah</h6>
                  <small>Accountant</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item rounded p-4 border-0">
              <FaQuoteLeft className="mb-3" size={40} color="#05386B" />
              <p>
                The service is smooth and straightforward. My advisor was
                helpful.
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={"img/testimonial-2.jpg"}
                  alt="testimonials"
                />
                <div className="ps-3">
                  <h6 className="mb-1">Daniel Laim</h6>
                  <small>Account Executive</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item rounded p-4 border-0">
              <FaQuoteLeft className="mb-3" size={40} color="#05386B" />
              <p>
              The item was fantastic. Excellent delivery.I would recommend deal direct.
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={"img/testimonial-3.jpg"}
                  alt="testimonials"
                />
                <div className="ps-3">
                  <h6 className="mb-1">Anthony</h6>
                  <small>Physiotherapist</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item rounded p-4 border-0">
              <FaQuoteLeft className="mb-3" size={40} color="#05386B" />
              <p>
                Amazing quality of work. Your Team is so efficient and professional.  
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={"img/testimonial-4.jpg"}
                  alt="testimonials"
                />
                <div className="ps-3">
                  <h6 className="mb-1">Olivia</h6>
                  <small>Blogger</small>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default ClientFeed;
