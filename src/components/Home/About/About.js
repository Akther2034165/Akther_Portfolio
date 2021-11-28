import React from "react";

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
                <h3 className="fs-4 mb-3 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, nesciunt.
                </h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                  odit dolorum illo aspernatur neque iure.
                </p>
              </div>
              <div className="row text-center text-uppercase my-3">
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">100</h4>
                    <p className="text-muted">Project Completed</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">100</h4>
                    <p className="text-muted">Happy Client</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fact-item">
                    <h4 className="fs-1 fw-bold">95</h4>
                    <p className="text-muted">Positive reviews</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex align-items-center">
                  <a href="#" className="btn px-3 btn-danger me-5">
                    Download CV
                  </a>
                  <div className="social-link">
                    <a href="#" className="text-dark me-2">
                      <i className="fab fa-facebook fs-5"></i>
                    </a>
                    <a href="#" className="text-dark me-2">
                      <i className="fab fa-twitter fs-5"></i>
                    </a>
                    <a href="#" className="text-dark me-2">
                      <i className="fab fa-instagram fs-5"></i>
                    </a>
                    <a href="#" className="text-dark me-2">
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
              <div className="skill-item">
                <h3 className="fs-6">BOOTSTRAP</h3>
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
