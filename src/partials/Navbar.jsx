import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const container = useRef()

  useEffect(() => {
    document.addEventListener("scroll", e => {
      if (window.pageYOffset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : null} `} ref={container} >
      <div className="header col-md-4">
        <img className="logo" src={require("../assets/images/logo1.png")} alt="logo" />Woddi</div>
      <div className="body col-md-6">
        <nav class="nav">
          <a class="nav-link active" href="#">Home</a>
          <a class="nav-link" href="#">About</a>
          <a class="nav-link" href="#">Course</a>
          <a class="nav-link" href="#">Contact</a>
        </nav>
      </div>
      <div className="float-right col-md-1">

        <button className="book-button" href="#collapseExample" data-toggle="collapse">DONATE</button>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
