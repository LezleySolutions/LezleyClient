import React from 'react'
import NavbarHome from '../Components/NavbarHome'
import AboutHome from '../Components/AboutHome'
import ClientFeed from '../Components/ClientFeed'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import Message from '../Components/Message'

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <NavbarHome />
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
      <div className='mt-5'>
      <Message />
      <AboutHome />
      </div>
      <ClientFeed />
      <Footer />
    </>
  )
}

export default About
