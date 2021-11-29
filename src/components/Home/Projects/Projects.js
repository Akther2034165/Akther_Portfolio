import React from "react";
import car from "../../../img/carzone.png";
import travel from "../../../img/travel.png";
import health from "../../../img/health.png";
const Projects = () => {
  return (
    <section className="container" id="project">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center">
            <h2 className="fw-bold mb-4">LATEST WORK....</h2>
          </div>
        </div>
      </div>
      <div className="row py-3 px-3">
        <div className="col-md-6 col-lg-4">
          <div className="box shadow-sm py-3 px-3 ">
            <img
              src={car}
              style={{ height: "300px" }}
              className="w-100 img-fluid"
              alt=""
            />
            <h4 className="mt-2">CarZone - A Car Selling Website</h4>
            <p className="text-muted">
              This website is usually a website which is related to car buying
              website.With the help of this webstie you can book to different
              brands car.
            </p>
            <button type="button" class="btn btn-outline-success">
              Details <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box shadow-sm py-3 px-3">
            <img
              src={travel}
              style={{ height: "300px" }}
              className="w-100 img-fluid"
              alt=""
            />
            <h4 className="mt-2">Travel Club -A Tourism Website</h4>
            <p className="text-muted">
              This website is usually a website which is related to tourism.With
              the help of this webstie you can travel to different tourist
              places.
            </p>
            <button type="button" class="btn btn-outline-success">
              Details <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box shadow-sm py-3 px-3">
            <img
              src={health}
              style={{ height: "300px" }}
              className="w-100 img-fluid"
              alt=""
            />
            <h4 className="mt-2">Cure Point -A Medical Website</h4>
            <p className="text-muted">
              It is website which is related to medical services..You can find a
              doctor according to your illness and make appointment.
            </p>
            <button type="button" class="btn btn-outline-success">
              Details <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
