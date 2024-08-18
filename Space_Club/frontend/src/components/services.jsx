import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>OUR COLLABORATORS</h2>
          <p>
            Our collaborators are the cornerstone of our success, bringing diverse expertise and perspectives to our endeavors. Together, we push boundaries, foster creativity, and achieve remarkable outcomes in the realm of space exploration.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-lg-4 col-md-6">
                  {" "}
                  <i><img src={d.icon} className="img-fluid"/></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
