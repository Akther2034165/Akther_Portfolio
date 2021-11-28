import React from "react";
import img from "../../../img/new.png";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <section className="home py-4" id="home">
        <div className="container-lg">
          <div className="row  min-vh-100 align-content-center">
            <div className="col-md-6 mt-md-0">
              <div className="home-img text-center">
                <img
                  src={img}
                  style={{ width: "75%" }}
                  className="mw-100"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0 order-md-first">
              <div className="home-text">
                <h4 className="text-muted mb-1">Hello I'm</h4>
                <h2 className="fs-4">MD AKTHER HOSEN</h2>
                <h1 className="text-uppercase fs-1 fw-bold">
                  I'm a
                  <span className="text-danger mx-2">
                    <Typewriter
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={150}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      words={["Student", "Developer"]}
                    />
                  </span>
                </h1>

                <p className="mt-4 text-muted">
                  I am a front-end developer building web applications. I
                  specialize in JavaScript (React), Express, MongoDB, Strong
                  collaboration, and problem-solving.
                </p>
                <a
                  href="https://drive.google.com/file/d/1-U-i7emUvTF95RMEJAoSmvUzHpz0BSxt/view?usp=sharing"
                  className="btn btn-danger px-3 mt-3"
                >
                  DOWNLOAD RESUME
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
