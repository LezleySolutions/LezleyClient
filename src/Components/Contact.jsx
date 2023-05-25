import React, { useState } from "react";
import { MotionAnimate } from "react-motion-animate";
import axios from "axios";

const Contact = () => {
  const [Mail, setMail] = useState("");
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  const [Subject, setSubject] = useState("");
  const [error, setError] = useState("");
  console.log(error);
  const Submit = () => {
    if (!Name.trim()) {
      setError("name");
    } else if (!Mail.trim()) {
      setError("mail");
    } else if (!Subject.trim()) {
      setError("sub");
    } else if (!Message.trim()) {
      setError("msg");
    } else {
      const data = {
        from: Name,
        email: Mail,
        subject: Subject,
        message: Message,
      };
      const config = {
        method: "POST",
        url: "http://localhost:5000/con/contacting",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config)
        .then((response) => {
          console.log(response, "res");
          alert(
            "Thank you for getting in touch, we will get back to you as soon as possible"
          );
          setMail("");
          setMessage("");
          setName("");
          setSubject("");
        })
        .catch((err) => {
          console.log(err, "i am error");
        });
    }
  };
  return (
    <>
      <MotionAnimate animation="fadeInUp" reset={true}>
        <div className="container-xxl py-4">
          <div className="container" style={{}}>
            <div
              className="mx-auto text-center "
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h2
                className="mb-3 fw-bold text-center"
                style={{ color: "#05386B" }}
              >
                Contact Us
              </h2>
              <h5 className="mb-5" style={{ color: "#05386B" }}>
                If You Have Any Query, Please Feel Free Contact Us
              </h5>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-7 py-3"
                style={{
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          onChange={(e) => setName(e.target.value)}
                          value={Name}
                          style={{
                            border:
                              Name.length > 0
                                ? "1px solid #ECECEC"
                                : error == "name"
                                ? "1px solid red"
                                : "1px solid #ECECEC",
                          }}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Your Email"
                          onChange={(e) => setMail(e.target.value)}
                          value={Mail}
                          required
                          style={{
                            border:
                              Mail.length > 0
                                ? "1px solid #ECECEC"
                                : error == "mail"
                                ? "1px solid red"
                                : "1px solid #ECECEC",
                          }}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          onChange={(e) => setSubject(e.target.value)}
                          value={Subject}
                          style={{
                            border:
                              Subject.length > 0
                                ? "1px solid #ECECEC"
                                : error == "sub"
                                ? "1px solid red"
                                : "1px solid #ECECEC",
                          }}
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          onChange={(e) => setMessage(e.target.value)}
                          value={Message}
                          style={{
                            border:
                              Message.length > 0
                                ? "1px solid #ECECEC"
                                : error == "msg"
                                ? "1px solid red"
                                : "1px solid #ECECEC",
                            height: "150px",
                          }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn w-100 py-3"
                        style={{ backgroundColor: "#05386B", color: "#fff" }}
                        type="submit"
                        onClick={Submit}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionAnimate>
    </>
  );
};

export default Contact;
