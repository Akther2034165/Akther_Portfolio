import React from "react";
import img from "../../../img/nows.jpg";
const Banner = () => {
  return (
    <div>
      <section className="home py-4" id="home">
        <div className="container-lg">
          <div className="row  min-vh-100 align-content-center">
            <div className="col-md-6 mt-5 mt-md-0">
              <div className="home-img text-center">
                <img src={img} className="rounded-circle mw-100" alt="" />
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0 order-md-first">
              <div className="home-text">
                <p className="text-muted mb-1">Hellow I'm</p>
                <h1 className="text-danger text-uppercase fs-1 fw-bold">
                  Web Developer
                </h1>
                <h2 className="fs-4">Akther Hosen</h2>
                <p className="mt-4 text-muted">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, nobis necessitatibus. Facere magnam fugit ducimus.
                </p>
                <a href="#portfolio" className="btn btn-danger px-3 mt-3">
                  My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
