import React from "react";
import {
  FaLaptopCode,
  FaPaperPlane,
  // , FaLink
} from "react-icons/fa";
import { SiJirasoftware, SiNintendogamecube } from "react-icons/si";
import {
  MdInstallMobile,
  MdOutlineGraphicEq,
  MdQueryStats,
} from "react-icons/md";
import { MotionAnimate } from "react-motion-animate";
import { useState } from "react";

const MailSection = () => {
  const [Mail , setMail] = useState("")
  return (
    <>
      <MotionAnimate animation="fadeInUp" reset={true}>
        {/* Service Start */}
        <div className="container-xxl py-6" style={{backgroundColor:"#ECECEC"}} data-aos="zoom-in">
          <div className="container">
            <div
              className="mx-auto text-center wow fadeInUp"
              style={{ maxWidth: "600px" }}
            >
              <h2 className="mb-5" style={{ color: "#05386B" }}>
                Our Services
              </h2>
              <h2 className="mb-5">We Provide Solutions On Your Business</h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <FaLaptopCode size={30} className="icon-service" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Web app development</h5>
                    <span>
                      we utilize rapid development methodologies that
                      incorporate MVC frameworks and interactive
                      JavaScript-based front ends to create robust web
                      applications. Our goal is to provide users with enriching
                      experiences through our innovative approach to web
                      development.
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <SiJirasoftware size={30} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Software development</h5>
                    <span>
                      Our software development team can assist you modernize
                      your agency to obtain greater operational efficiency,
                      automate processes, and amplify customer satisfaction
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <MdInstallMobile size={30} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Mobile Applications Development</h5>
                    <span>
                      We are here to transform your business goals irrespective
                      of the industry, OS, or complexity of the solution, with
                      our talented team of mobile app developers and designers
                      the delivery of a scalable, compelling and secure app is
                      assured.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <MdOutlineGraphicEq size={30} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Graphic designing</h5>
                    <span>
                      We produce visual concepts to communicate ideas that
                      inspire, inform and captivate consumer. We make various
                      types of creative content for advertisements, brochures,
                      or magazines. We do this with multiple tools depending on
                      the medium and goals of the final project.
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <MdQueryStats size={30} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Digital marketing</h5>
                    <span>
                      We promote company products and services to improve their
                      market share. We use digital channels to market products
                      and services in order to reach consumers. Such as
                      Websites,Mobile devices,Social media ,Search engines
                      &Other similar channels
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="service-item rounded h-100">
                  <div className="d-flex justify-content-between">
                    <div className="service-icon">
                      <SiNintendogamecube size={30} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="mb-3">Game development</h5>
                    <span>
                      We provide 2D & 3D GAME Development. Our team starts work
                      from the basic steps and lead it to the professional
                      outcome display. Game Designing, System Designing, Level
                      designing, Game Programing, Game Artist, Environment
                      Artist, Game Illustration,Gameplay Animation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionAnimate>
      {/* Service End  */}
      {/* Newsletter Start */}
      <div
        className="container-xxl my-6 wow fadeInUp"
        style={{ backgroundColor: "#3e3d89" }}
      >
        <div className="container px-lg-5">
          <div className="row align-items-center" style={{ height: "250px" }}>
            <div className="col-12 col-md-6">
              <h3 className="text-white">Ready to get started</h3>
              <small className="text-white ms-2">
              Don’t be shy
              </small>
              <div className="position-relative w-100 mt-3">
                <input
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                  type="text"
                  placeholder="Enter Your Email"
                  onChange={(e) => setMail(e.target.value)}
                  value={Mail}
                  style={{ height: "48px" }}
                />
                <button
                  type="button"
                  className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  onClick={() => {
                    alert("Thanks for Contacting us")
                    setMail("")
                  }}
                >
                  {/* <i className="fa fa-paper-plane text-primary fs-4"> */}
                  <FaPaperPlane size={25} color="#05386B" />
                  {/* </i> */}
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center mb-n5 d-none d-md-block">
              <img
                className="img-fluid mt-5"
                style={{ maxHeight: "250px" }}
                src="img/Colab.png"
                alt="newsletter"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter End */}
    </>
  );
};

export default MailSection;
