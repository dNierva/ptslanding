import React, { useState } from "react";
import Registration from "./Registration";

function Services (props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openFromParent() {
    setIsOpen(true);
  }

  function handleCloseModal(event, data) {
    console.log(event, data);
    setIsOpen(false);
  }

  function handleAfterOpen(event, data) {
    console.log(event, data);
  }

  return (
    <div id="services">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Courses</h2>
          <p>
            German language course for you.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div  key={`${d.name}-${i}`} className="col-md-3">
                  {" "}
                  <div className="course">
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        
        <Registration 
          IsModalOpened={modalIsOpen}
          onCloseModal={handleCloseModal}
          onAfterOpen={handleAfterOpen}
        />

        <div className="text-center">
          <button type="submit" className="btn btn-custom btn-lg" onClick={openFromParent}>Enroll Now!</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
