import React from "react";
import "../Assets/footer.css";
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <footer class="footer-distributed" style={{ backgroundColor: "#3e3d89" }}>
        <div class="footer-left">
          <img
            src="img/lezlayNew.png"
            alt="Logo"
            style={{ borderRadius: "10px", width: "200px" }}
          />
          <div className="footer-links">
            <p>
              Lezlay Solution is a software company, providing web based
              solutions, software based solutions and also call center services
              according to client's requirements.
            </p>
          </div>
        </div>

        <div class="footer-center">
          <span className="text-white">Contact Us</span>
          <div className="mt-3">
            <IoLocation color="white" size={20} className="me-3" />
            <p>
              <span>Johar Town Lahore</span>Punjab , Pakistan
            </p>
          </div>

          <div className="mt-3">
            <BsFillTelephoneFill color="white" size={20} className="me-3" />
            <p>+9 319 6106538 </p>
          </div>

          <div className="mt-3">
            <IoMdMail color="white" size={20} className="me-3" />
            <p className="">lezleysolutions@gmail.com</p>
          </div>
        </div>

        <div class="footer-right">
          <div
            id="map-container-section"
            className=""
            style={{ width: "100%" }}
          >
            <iframe
              title="Google Maps"
              src="https://maps.google.com/maps?q=johartownlahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              className=""
              style={{
                width: "370px",
                height: "230px",
                borderRadius: "8px",
                marginLeft: "-50px",
              }}
            />
          </div>
        </div>
        <div
        className="text-light text-center"
        style={{ marginTop: "1rem", paddingBottom:"0px" }}
      >
        &copy; 2023 Lezlay Solutions. All Right Reserved.
      </div>
      </footer>
      {/* Footer End */}
    </>
  );
};

export default Footer;
