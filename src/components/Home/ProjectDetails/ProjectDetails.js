import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Navigation from "../Navigation/Navigation";
import "./ProjectDetails.css";
const ProjectDetails = () => {
  const { ProjectId } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  const detail = projects.find((td) => td.id == ProjectId);
  return (
    <div>
      <Navigation />
      <Container>
        <Row className="mt-5">
          <h2 className="detailsTitle text-center mt-5">PROJECT OVERVIEW</h2>
          <Col xs={12} md={6} lg={7}>
            <div className="project-details">
              <div style={{ marginBottom: "20px" }}>
                <h3
                  className="text-danger"
                  style={{ fontWeight: "700", margin: "0" }}
                >
                  {detail?.name}
                </h3>
                <p
                  style={{
                    fontWeight: "400",
                    color: "#2c3e50",
                    fontSize: "18px",
                    margin: "0",
                  }}
                >
                  ({detail?.type})
                </p>
                <span className="fw-bold m-0">{detail?.duration}</span>
              </div>
              <div className="details">
                <div className="description mt-2">
                  <h4 className="text-danger ">FEATURES</h4>
                  <p>
                    <i className="fas fa-check-double"></i>{" "}
                    {detail?.description1}
                  </p>
                  <p>
                    <i className="fas fa-check-double"></i>{" "}
                    {detail?.description2}
                  </p>
                  <p>
                    <i className="fas fa-check-double"></i>{" "}
                    {detail?.description3}
                  </p>
                  <p>
                    <i className="fas fa-check-double"></i>{" "}
                    {detail?.description4}
                  </p>
                  <p>
                    <i className="fas fa-check-double"></i>{" "}
                    {detail?.description5}
                  </p>
                </div>
                <a href={detail?.liveSite}>
                  <button className="desBtn btn me-2 btn-sm">Live site</button>
                </a>
                <a href={detail?.clientCode}>
                  <button className="desBtn btn me-2 btn-sm">
                    Client code
                  </button>
                </a>
                {/* <a href={detail?.serverCode}>
                <button className="desBtn btn me-2 btn-sm">Server code</button>
              </a> */}
                {detail?.serverCode ? (
                  <a href={detail?.serverCode}>
                    <button className="desBtn btn me-2 btn-sm">
                      Server code
                    </button>
                  </a>
                ) : (
                  ""
                )}
                <div className="technology">
                  <h5
                    style={{
                      color: "#2c3e50",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    TECHNOLOGY USED
                  </h5>
                  {detail?.technology1 ? (
                    <button className="techBtn btn">
                      {detail?.technology1}
                    </button>
                  ) : (
                    ""
                  )}
                  {detail?.technology2 ? (
                    <button className="techBtn btn">
                      {detail?.technology2}
                    </button>
                  ) : (
                    ""
                  )}
                  {detail?.technology3 ? (
                    <button className="techBtn btn">
                      {detail?.technology3}
                    </button>
                  ) : (
                    ""
                  )}
                  {detail?.technology4 ? (
                    <button className="techBtn btn">
                      {detail?.technology4}
                    </button>
                  ) : (
                    ""
                  )}
                  {detail?.technology5 ? (
                    <button className="techBtn btn">
                      {detail?.technology5}
                    </button>
                  ) : (
                    ""
                  )}
                  {detail?.technology6 ? (
                    <button className="techBtn btn">
                      {detail?.technology6}
                    </button>
                  ) : (
                    ""
                  )}
                  {detail?.technology7 ? (
                    <button className="techBtn btn">
                      {detail?.technology7}
                    </button>
                  ) : (
                    ""
                  )}
                  {detail?.technology8 ? (
                    <button className="techBtn btn">
                      {detail?.technology8}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={5}>
            <Carousel className="mt-5" style={{ marginBottom: "70px" }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={detail?.img}
                  style={{ height: "350px", width: "100%" }}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={detail?.img2}
                  style={{ height: "350px", width: "100%" }}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={detail?.img3}
                  style={{ height: "350px", width: "100%" }}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetails;
