import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Project.css";
const Project = ({ project }) => {
  const { id, name, img, Preview } = project;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="project">
      <div data-aos="zoom-in">
        <div className="box shadow-sm py-3 px-3 ">
          <img
            src={img}
            style={{ height: "100%" }}
            className="w-100 img-fluid"
            alt=""
          />
          <h4 className="mt-2">{name}</h4>
          <p className="text-muted">{Preview}</p>
          <Link to={`/projectDetail/${id}`}>
            <button type="button" class="btn btn-outline-success">
              Details <i class="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
