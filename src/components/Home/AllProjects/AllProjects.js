import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Project from "../Project/Project";
const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div style={{ margin: "100px 0" }} className="px-2">
      <Container>
        <h1
          style={{ fontWeight: "700", color: "#2c3e50" }}
          className="text-center"
        >
          Latest Work
        </h1>
        <Row className="mt-2 g-4" xs={1} md={2} lg={3}>
          {projects?.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllProjects;
