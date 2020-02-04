import React from "react";
import Navbar from "../partials/Navbar";

const Home = () => (
  <div className="home">
    <Navbar />
    <div className="welcome">
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-6">
          <h1 className="welcome-note-head">
            Give a Better Life
          </h1>
          <p className="welcome-note-body">We are giving health care solutions to every doorstep,
                <br /> and connecting non-profit, donors, and companies
              around the world.
          </p>
        </div>
        <button className="donate-button">DONATE NOW</button>
      </div>
    </div>

    <div className="contribution">
      <div className="contribution-title">
        how can you help
      </div>
      <div className="contribution-body row container-fluid">
        <div className="contribution-body-left col-md-4">
          <h3 className="paragraph-title"><i className="fa fa-money" aria-hidden="true"></i>
            Give a Donation
          </h3>
          <p className="paragraph-body">
            Help the less priviledged and put a smile on the face of child
            less priviledged and put a smile on the face of child
            less priviledged and put a smile on the face of child
          </p>
        </div>

        <div className="contribution-body-right col-md-4">
          <h3 className="paragraph-title"><i className="fa fa-money" aria-hidden="true"></i>
            Give a Donation
          </h3>
          <p className="paragraph-body">
            Help the less priviledged and put a smile on the face of child
            less priviledged and put a smile on the face of child
            less priviledged and put a smile on the face of child
          </p>
        </div>
      </div>

    </div>
  </div>
);

export default Home;
