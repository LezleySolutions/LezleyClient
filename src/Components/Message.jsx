import React from "react";

const Message = () => {
  return (
    <>
      <div className="container-xxl py-5 mb-5" style={{backgroundColor:"#ECECEC"}}>
        <h2 className="mb-5 text-center pb-5" style={{ color: "#05386B" }}>
          CEO's Message
        </h2>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h4 className="mb-4 text-uppercase">Tajamal Mailk</h4>
              <p className="message">
                I am honored to extend my warmest greetings to you as the CEO of
                Lezley Solution. Our software house is committed to delivering
                innovative and transformative solutions that empower businesses
                to thrive in the digital age.
              </p>
              <p className="message">
                At Lezley Solution, we understand the ever-evolving nature of
                the software industry and the challenges our clients face. Our
                team of dedicated professionals is driven by a passion for
                excellence, and we work tirelessly to develop cutting-edge
                software products and services tailored to your unique needs.
              </p>
              <p className="message">
                Our approach is centered around collaboration and partnership.
                We believe that by truly understanding your business objectives
                and challenges, we can develop customized solutions that drive
                growth and propel your organization forward. Whether you require
                bespoke software development, application maintenance, or
                digital transformation strategies, our team is equipped with the
                expertise and industry knowledge to deliver outstanding results.
              </p>
            </div>
            <div className="col-lg-6 wow zoomIn ps-5" data-wow-delay="0.1s">
              <img className="img-fluid rounded-4 img-message ms-5" src="img/CEO.png" alt="aboutUs" 
              style={{width:"85%" , alignItems:"center"}}
               />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
