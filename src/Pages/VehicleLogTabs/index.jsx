import React from "react";
import "./style.css";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import caricon01 from "../../Assets/images/icon01.svg";
import caricon02 from "../../Assets/images/icon02.svg";
import caricon03 from "../../Assets/images/icon03.svg";
import caricon04 from "../../Assets/images/icon04.svg";
import caricon05 from "../../Assets/images/icon05.svg";
import caricon06 from "../../Assets/images/icon06.svg";
import caricon07 from "../../Assets/images/icon07.svg";
import caricon08 from "../../Assets/images/icon08.svg";
import caricon09 from "../../Assets/images/icon09.svg";
import caricon10 from "../../Assets/images/icon10.svg";
import caricon11 from "../../Assets/images/icon11.svg";
import caricon12 from "../../Assets/images/icon12.svg";
import caricon13 from "../../Assets/images/icon13.svg";
import caricon14 from "../../Assets/images/icon14.svg";
import caricon15 from "../../Assets/images/icon15.svg";
import caricon16 from "../../Assets/images/icon16.svg";


//Owl Carousel Settings
const options = {
  margin: 0,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  loop: false,
  navText: ["", ""],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 3,
    },
    600: {
      items: 5,
    },
    700: {
      items: 6,
    },
    1000: {
      items: 9,
    },
    1170: {
      items: 10,
    },
  },
};
class App extends React.Component {
  render() {
    return (
      <div>
        <OwlCarousel
          className="tabs-carousel owl-carousel"
          {...options}
        >
          <div className="item">
            <a href=""><img src={caricon01} alt="" /> All</a>
          </div>
          <div className="item">
            <a href="" className="active"><img src={caricon02} alt="" /> Braking</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon03} alt="" /> Car Care Exterior</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon04} alt="" />Car Care Interior</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon05} alt="" />Climate Control</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon06} alt="" />Drivetrain</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon07} alt="" />Engine</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon08} alt="" />Exhaust</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon09} alt="" />Exterior</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon10} alt="" />Interior</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon11} alt="" />Lighting</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon12} alt="" />Steering</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon13} alt="" />Suspension</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon14} alt="" />Tire/Wheels</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon15} alt="" />Events</a>
          </div>
          <div className="item">
            <a href=""><img src={caricon16} alt="" />Miscellaneous</a>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default App;
