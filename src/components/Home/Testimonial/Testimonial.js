import React from "react";
import img from "../../../img/nows.jpg";
const Testimonial = () => {
  return (
    <div>
      <section className="testimonial py-5" id="testimonial">
        <div className="container-lg py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="fw-bold mb-4">Testimonial</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div
                id="carousel1"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carousel1"
                    data-bs-slide-to="0"
                    className="active bg-danger"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel1"
                    data-bs-slide-to="1"
                    className="bg-danger"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel1"
                    data-bs-slide-to="2"
                    className="bg-danger"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner p-1">
                  {/* start */}
                  <div className="testi-item carousel-item active shadow-sm rounded p-4 mb-5">
                    <div className="testi-author-info d-flex align-items-center">
                      <img
                        src={img}
                        style={{ height: "100px" }}
                        className="img-thumbnail rounded-circle"
                        alt=""
                      />
                      <div className="author ms-3">
                        <h3 className="fs-6 mb-1">Akther</h3>
                        <p className="text-muted m-0">Seo Manager</p>
                      </div>
                    </div>
                    <p className="text-muted mt-3">
                      LoremLoremjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                    </p>
                    <div className="rating text-danger">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  {/* End */}
                  {/* start */}
                  <div className="testi-item carousel-item shadow-sm rounded p-4 mb-5">
                    <div className="testi-author-info d-flex align-items-center">
                      <img
                        src={img}
                        style={{ height: "100px" }}
                        className="img-thumbnail rounded-circle"
                        alt=""
                      />
                      <div className="author ms-3">
                        <h3 className="fs-6 mb-1">Hosen</h3>
                        <p className="text-muted m-0">Seo Manager</p>
                      </div>
                    </div>
                    <p className="text-muted mt-3">
                      LoremLoremjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                    </p>
                    <div className="rating text-danger">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  {/* End */}
                  {/* start */}
                  <div className="testi-item carousel-item shadow-sm rounded p-4 mb-5">
                    <div className="testi-author-info d-flex align-items-center">
                      <img
                        src={img}
                        style={{ height: "100px" }}
                        className="img-thumbnail rounded-circle"
                        alt=""
                      />
                      <div className="author ms-3">
                        <h3 className="fs-6 mb-1">Home</h3>
                        <p className="text-muted m-0">Seo Manager</p>
                      </div>
                    </div>
                    <p className="text-muted mt-3">
                      LoremLoremjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                    </p>
                    <div className="rating text-danger">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  {/* End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
