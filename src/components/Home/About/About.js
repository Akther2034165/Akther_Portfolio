import React from "react";
import imgs from "../../../img/akther.jpg";
const About = () => {
  return (
    <div>
      <section className="about py-5" id="about">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-4">About Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="about-text">
                {/* <h3 className="fs-4 mb-3 ">
                  I am a front-end developer building web applications.
                </h3>
                <p className="text-muted">
                  I specialize in JavaScript (React), Express, MongoDB, Strong
                  collaboration, and problem-solving.
                </p> */}
                <img
                  src={imgs}
                  style={{ width: "55%", borderRadius: "15px" }}
                  alt=""
                />
              </div>
              <div className="row mt-3">
                <div className="col-lg-12 d-flex align-items-center">
                  <a href="#contact" className="btn px-4 btn-danger me-5">
                    HIRE ME
                  </a>
                  <div className="social-link">
                    <a
                      href="https://web.facebook.com/nirjhor.nowshad/"
                      className="text-dark me-3"
                    >
                      <i className="fab fa-facebook fs-5"></i>
                    </a>
                    <a
                      href="https://github.com/akther2034165/"
                      className="text-dark me-3"
                    >
                      <i className="fab fa-github fs-5"></i>
                    </a>
                    <a
                      href="https://dev.aktherhosen@gmail.com"
                      className="text-dark me-3"
                    >
                      <i class="fas fa-envelope"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/md-akther-hosen-b1057a216/"
                      className="text-dark me-3"
                    >
                      <i className="fab fa-linkedin-in fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <div className="skill-item mb-4">
                <h3 className="fs-6">HTML</h3>
                <div class="progress" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <h3 className="fs-6">CSS</h3>
                <div class="progress" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <h3 className="fs-6">JAVASCRIPT</h3>
                <div class="progress" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <h3 className="fs-6">BOOTSTRAP</h3>
                <div class="progress" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <h3 className="fs-6">REACT</h3>
                <div class="progress" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
