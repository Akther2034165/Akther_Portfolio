import React from "react";

const Service = () => {
  return (
    <div>
      <section className="service  py-5" id="service">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-4">SERVICES</h2>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="service-item shadow-sm p-4 rounded bg-white">
                <div className="icon my-3 text-danger fs-3">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="fs-5 py-2">Web Development</h3>
                <p className="text-muted">
                  A passionate Front-End Developer From Bangladesh
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="service-item shadow-sm p-4 rounded bg-white">
                <div className="icon my-3 text-danger fs-3">
                  <i class="fas fa-bug"></i>
                </div>
                <h3 className="fs-5 py-2">Bug Fixing</h3>
                <p className="text-muted">
                  I have interest in fixing bug in web applications.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="service-item shadow-sm p-4 rounded bg-white">
                <div className="icon my-3 text-danger fs-3">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="fs-5 py-2">Web Design</h3>
                <p className="text-muted">
                  I can also design website as well as.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
