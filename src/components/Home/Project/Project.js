import React from "react";
import img from "../../../img/nows.jpg";
const Project = () => {
  return (
    <div>
      <section className="portfolio py-5 text-center" id="portfolio">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-4">Latest Works</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item">
                <img src={img} className="w-80 img-thumbnail" alt="" />
                <h3 className="text-capitalize fs-5 my-2">team section</h3>
                <p className="mb-4">
                  <a href="#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item">
                <img src={img} className="w-80 img-thumbnail" alt="" />
                <h3 className="text-capitalize fs-5 my-2">team section</h3>
                <p className="mb-4">
                  <a href="#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item">
                <img src={img} className="w-80 img-thumbnail" alt="" />
                <h3 className="text-capitalize fs-5 my-2">team section</h3>
                <p className="mb-4">
                  <a href="#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item">
                <img src={img} className="w-80 img-thumbnail" alt="" />
                <h3 className="text-capitalize fs-5 my-2">team section</h3>
                <p className="mb-4">
                  <a href="#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item">
                <img src={img} className="w-80 img-thumbnail" alt="" />
                <h3 className="text-capitalize fs-5 my-2">team section</h3>
                <p className="mb-4">
                  <a href="#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item">
                <img src={img} className="w-80 img-thumbnail" alt="" />
                <h3 className="text-capitalize fs-5 my-2">team section</h3>
                <p className="mb-4">
                  <a href="#" className="text-danger text-decoration-none">
                    Live Demo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
