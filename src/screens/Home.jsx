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
        <button className="donate-button" type="button" data-toggle="modal"
          data-target="#exampleModal">DONATE NOW</button>
      </div>
    </div>
    {/* ..........MODAL FOR THE DONATION FORM......... */}

    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">DONATION INFORMATION</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h6 className="donor-amount">How much would you like to donate</h6>
            <div className="modal-body-donation row">
              <div className="form-group form-check col-md-2">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">$5000</label>
              </div>

              <div className="form-group form-check col-md-2">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">$4000</label>
              </div>

              <div className="form-group form-check col-md-2">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">$3000</label>
              </div>

              <div className="form-group form-check col-md-2">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">$2000</label>
              </div>

              <div className="form-group form-check col-md-2">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">$1000</label>
              </div>
              <h6 className="or">Or
              <div class="form-group-input">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter other amount" />
                </div>
              </h6>
            </div>
            <div className="donor-info">
              <h6 className="donor-info-title">
                Donor Information
              </h6>
              <div className="donor-info-form">
                <div class="form-group">
                  <label for="formGroupExampleInput">Your Name</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Another label</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>


    {/* ..........HOW YOUCAN HELP SECTION......... */}
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
