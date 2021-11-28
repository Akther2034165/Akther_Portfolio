import React from "react";
import "./Timeline.css";
const Timeline = () => {
  return (
    <div className="timeline">
      <h2 className="text-center">Education</h2>
      <section className="timeline-section">
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2020-present</div>
            <div className="timeline-content">
              <h3>Bsc. in Computer Science & Engineering</h3>
              <p>BGC TRUST UNIVERSITY BANGLADESH</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021-present</div>
            <div className="timeline-content">
              <h3>Complete Web Development</h3>
              <p>Programming Hero</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2018-2019</div>
            <div className="timeline-content">
              <h3>Hazera Taju University College</h3>
              <p>Intermediate</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2016-2017</div>
            <div className="timeline-content">
              <h3>Ayub Bibi City Corp School & College</h3>
              <p>Secondary School Certificate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
