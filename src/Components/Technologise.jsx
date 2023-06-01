import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Technologise = () => {
    const settings = {
        dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 290,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
      };
  return (
    <>
    <div className="container-xxl py-6" style={{backgroundColor:"#ECECEC"}}>
        <div className="container">
          <div
            className="mx-auto text-center wow fadeInUp"
            style={{ maxWidth: "600px" }}
          >
            <h2
              className="mb-3 fw-bold text-center"
              style={{ color: "#05386B" }}
            >
              Technologise
            </h2>
            <h2 className="mb-5">Languages we are working on</h2>
          </div>
        <Slider {...settings}>
          <div className=''>
            <img src={"img/HTML.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/CSS.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/bootstrap.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/Javascript.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/React.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/Vue.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/node-js.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/Mongo.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/Php.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/mysqlworkbench_93532.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/Photoshop.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/AI.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/semrush.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
          <div>
            <img src={"img/Unity.png"} alt="HTML" style={{width:"80px"}}/>
          </div>
        </Slider>
        </div>
        </div>
    </>
  )
}

export default Technologise
