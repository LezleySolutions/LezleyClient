import React from 'react'
import NavbarHome from '../Components/NavbarHome'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const ContactUs = () => {
  return (
    <>
     <NavbarHome />
     <div className='mt-5 mb-5'>
     <Contact />
     </div>
     <Footer /> 
    </>
  )
}

export default ContactUs
