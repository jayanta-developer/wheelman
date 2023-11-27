import React, { useState } from "react";
import "./style.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//images
import caravatar from "../../Assets/images/user-info-car-avatar.png";
import caricon01 from "../../Assets/images/user-info-car-icon-1.svg";
import caricon02 from "../../Assets/images/user-info-car-icon-2.svg";
import caricon03 from "../../Assets/images/user-info-car-icon-3.svg";
import caricon04 from "../../Assets/images/user-info-car-right-left-image.svg";

import sorticon from "../../Assets/images/garage-list-sort-icon.svg";
import addicon from "../../Assets/images/garage-list-add-icon.svg";
import listicon from "../../Assets/images/garage-list-list-icon.svg";
import gridicon from "../../Assets/images/garage-list-grid-icon.svg";

import addnewicon from "../../Assets/images/garage-list-col-icon-add.svg";
import editicon from "../../Assets/images/garage-list-col-icon-edit.svg";
import detailicon from "../../Assets/images/garage-list-col-icon-detail.svg";

import slideimage1 from "../../Assets/images/garage-list-col-slide-for-image-1.jpg";
import slideimage2 from "../../Assets/images/garage-list-col-slide-for-image-2.jpg";
import slideimage3 from "../../Assets/images/garage-list-col-slide-for-image-3.jpg";
import slideimage4 from "../../Assets/images/garage-list-col-slide-for-image-4.jpg";
import slideimage5 from "../../Assets/images/garage-list-col-slide-for-image-5.jpg";

//Components
import NavBar from "../../Pages/NavBar"
import ImageSlider from '../../Component/imageSlider';

export default function MyGarageDashboard() {
  const home = true;
  const navigate = useNavigate();
  const [imgThumIndex, setImgThmIndex] = useState({});
  const [listView, setListView] = useState(false);

  const imgArr = [
    slideimage1,
    slideimage2,
    slideimage3,
    slideimage4,
    slideimage5,
  ];

  const handelAThum = (index) => {
    setImgThmIndex((prevState) => ({
      ...prevState,
      [index]: (prevState[index] || 0) >= 1 ? (prevState[index] || 0) - 1 : 0,
    }));
  };

  const handelDThum = (index) => {
    setImgThmIndex((prevState) => ({
      ...prevState,
      [index]: (prevState[index] || 0) <= 2 ? (prevState[index] || 0) + 1 : 3,
    }));
  };

  const handelTumImage = ({ index, image1, image2, image3, image4 }) => {
    if (imgThumIndex[index] === 0) {
      return <img src={image1} alt="" className="object-fit" />;
    }
    if (imgThumIndex[index] === 1) {
      return <img src={image2} alt="" className="object-fit" />;
    }
    if (imgThumIndex[index] === 2) {
      return <img src={image3} alt="" className="object-fit" />;
    }
    if (imgThumIndex[index] === 3) {
      return <img src={image4} alt="" className="object-fit" />;
    } else {
      return <img src={image1} alt="" className="object-fit" />;
    }
  };

  const CarCard = ({
    index,
    brand,
    name,
    Lyear,
    milage,
    Items,
    image1,
    image2,
    image3,
    image4,
  }) => {
    return (
      <div
        style={{ display: listView ? "none" : "block" }}
        className="garage-list-col CarCard"
      >
        <div className="garage-list-col-item">
          <div className="garage-list-col-item-image">
            <div className="garage-list-col-slider">
              <div className="garage-list-col-slider-for garage-list-col-slider-for-1">
                <div className="garage-list-col-slide-for-image">
                  {handelTumImage({ index, image1, image2, image3, image4 })}
                </div>
              </div>
              <div className="garage-list-col-slider-nav garage-list-col-slider-nav-1 carCardThCol">
                <KeyboardArrowUpIcon
                  onClick={() => handelAThum(index)}
                  sx={{ color: "#fff", cursor: "pointer" }}
                />
                <div
                  onClick={() =>
                    setImgThmIndex((prevImgThumIndex) => ({
                      ...prevImgThumIndex,
                      [index]: 0,
                    }))
                  }
                  className={
                    imgThumIndex[index] === 0
                      ? "garage-list-col-slide-nav-image C_thum_Active "
                      : "garage-list-col-slide-nav-image"
                  }
                >
                  <img src={image1} alt="" className="object-fit" />
                </div>
                <div
                  onClick={() =>
                    setImgThmIndex((prevImgThumIndex) => ({
                      ...prevImgThumIndex,
                      [index]: 1,
                    }))
                  }
                  className={
                    imgThumIndex[index] === 1
                      ? "garage-list-col-slide-nav-image C_thum_Active "
                      : "garage-list-col-slide-nav-image"
                  }
                >
                  <img src={image2} alt="" className="object-fit" />
                </div>
                <div
                  onClick={() =>
                    setImgThmIndex((prevImgThumIndex) => ({
                      ...prevImgThumIndex,
                      [index]: 2,
                    }))
                  }
                  className={
                    imgThumIndex[index] === 2
                      ? "garage-list-col-slide-nav-image C_thum_Active "
                      : "garage-list-col-slide-nav-image"
                  }
                >
                  <img src={image3} alt="" className="object-fit" />
                </div>
                <div
                  onClick={() =>
                    setImgThmIndex((prevImgThumIndex) => ({
                      ...prevImgThumIndex,
                      [index]: 3,
                    }))
                  }
                  className={
                    imgThumIndex[index] === 3
                      ? "garage-list-col-slide-nav-image C_thum_Active "
                      : "garage-list-col-slide-nav-image"
                  }
                >
                  <img src={image4} alt="" className="object-fit" />
                </div>
                <KeyboardArrowDownIcon
                  onClick={() => handelDThum(index)}
                  sx={{ color: "#fff", cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="garage-list-col-item-overlay">
              <div className="garage-list-col-item-overlay-wrapper">
                <h3 className="pointer" onClick={() => navigate("/add_car")}>{brand}</h3>
                <h5>
                  <span>{name}</span>
                  <span>{Lyear}</span>
                </h5>
                <p>Milage : {milage}</p>
                <p>{Items}</p>
              </div>
            </div>
          </div>
          <div className="garage-list-col-item-content">
            <button onClick={() => navigate("/add_car")} className="garage-list-col-icon-add">
              <img src={addnewicon} alt="" /> <span>Add New Record</span>
            </button>
            <button onClick={() => navigate("/add_car")} className="garage-list-col-icon-edit">
              <img src={editicon} alt="" /> <span>Edit</span>
            </button>
            <button onClick={() => navigate("/add_car")} className="garage-list-col-icon-detail">
              <img src={detailicon} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const GviewIcActive = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <g clip-path="url(#clip0_2405_296)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0.9C0 0.402944 0.402944 0 0.9 0H7.2C7.69706 0 8.1 0.402944 8.1 0.9V7.2C8.1 7.69706 7.69706 8.1 7.2 8.1H0.9C0.402944 8.1 0 7.69706 0 7.2V0.9ZM1.8 1.8V6.3H6.3V1.8H1.8ZM9.9 0.9C9.9 0.402944 10.3029 0 10.8 0H17.1C17.5971 0 18 0.402944 18 0.9V7.2C18 7.69706 17.5971 8.1 17.1 8.1H10.8C10.3029 8.1 9.9 7.69706 9.9 7.2V0.9ZM11.7 1.8V6.3H16.2V1.8H11.7ZM0 10.8C0 10.3029 0.402944 9.9 0.9 9.9H7.2C7.69706 9.9 8.1 10.3029 8.1 10.8V17.1C8.1 17.5971 7.69706 18 7.2 18H0.9C0.402944 18 0 17.5971 0 17.1V10.8ZM1.8 11.7V16.2H6.3V11.7H1.8ZM9.9 10.8C9.9 10.3029 10.3029 9.9 10.8 9.9H17.1C17.5971 9.9 18 10.3029 18 10.8V17.1C18 17.5971 17.5971 18 17.1 18H10.8C10.3029 18 9.9 17.5971 9.9 17.1V10.8ZM11.7 11.7V16.2H16.2V11.7H11.7Z"
          fill="#165840"
        />
      </g>
      <defs>
        <clipPath id="clip0_2405_296">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const GviewIc = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0.9C0 0.402944 0.402944 0 0.9 0H7.2C7.69706 0 8.1 0.402944 8.1 0.9V7.2C8.1 7.69706 7.69706 8.1 7.2 8.1H0.9C0.402944 8.1 0 7.69706 0 7.2V0.9ZM1.8 1.8V6.3H6.3V1.8H1.8ZM9.9 0.9C9.9 0.402944 10.3029 0 10.8 0H17.1C17.5971 0 18 0.402944 18 0.9V7.2C18 7.69706 17.5971 8.1 17.1 8.1H10.8C10.3029 8.1 9.9 7.69706 9.9 7.2V0.9ZM11.7 1.8V6.3H16.2V1.8H11.7ZM0 10.8C0 10.3029 0.402944 9.9 0.9 9.9H7.2C7.69706 9.9 8.1 10.3029 8.1 10.8V17.1C8.1 17.5971 7.69706 18 7.2 18H0.9C0.402944 18 0 17.5971 0 17.1V10.8ZM1.8 11.7V16.2H6.3V11.7H1.8ZM9.9 10.8C9.9 10.3029 10.3029 9.9 10.8 9.9H17.1C17.5971 9.9 18 10.3029 18 10.8V17.1C18 17.5971 17.5971 18 17.1 18H10.8C10.3029 18 9.9 17.5971 9.9 17.1V10.8ZM11.7 11.7V16.2H16.2V11.7H11.7Z"
        fill="#55625D"
      />
    </svg>
  );

  const LviewLcActive = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 3C0 2.44772 0.447715 2 1 2H17C17.5523 2 18 2.44772 18 3C18 3.55228 17.5523 4 17 4H1C0.447716 4 0 3.55228 0 3ZM0 9C0 8.44772 0.447715 8 1 8H17C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10H1C0.447716 10 0 9.55228 0 9ZM1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447716 16 1 16H17C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14H1Z"
        fill="#165840"
      />
    </svg>
  );

  const LviewLc = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 3C0 2.44772 0.447715 2 1 2H17C17.5523 2 18 2.44772 18 3C18 3.55228 17.5523 4 17 4H1C0.447716 4 0 3.55228 0 3ZM0 9C0 8.44772 0.447715 8 1 8H17C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10H1C0.447716 10 0 9.55228 0 9ZM1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447716 16 1 16H17C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14H1Z"
        fill="#55625D"
      />
    </svg>
  );

  const listCare = ({ brand, name, Lyear, milage, Items }) => {
    return (
      <div className="listCare">
        <div className="listCImageBox">
          <ImageSlider images={imgArr} />
        </div>
        <div className="listCTextBox">
          <Typography onClick={() => navigate("/add_car")} className="LcarCardHeader">{brand}</Typography>
          <div className="list-top">
            <div className="LCardInfo-B">

              <Typography ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#28221F" />
              </svg> {name}</Typography>

              <Typography ml={2}><svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#28221F" />
              </svg> {Lyear}</Typography>
            </div>
            <div className="LCardInfo-B">
              <Typography><span style={{ fontWeight: "700" }}>Milage:</span> {milage}</Typography>
            </div>
            <div className="LCardInfo-B">
              <Typography>{Items}</Typography>
            </div>
          </div>
          <div className="list-bot">
            <div onClick={() => navigate("/add_car")} className="LCardLInfo">
              <svg
                className="pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_2647_582)">
                  <rect
                    x="7.20032"
                    width="1.6"
                    height="16"
                    rx="0.8"
                    fill="#165840"
                  />
                  <rect
                    x="16"
                    y="7.20007"
                    width="1.6"
                    height="16"
                    rx="0.8"
                    transform="rotate(90 16 7.20007)"
                    fill="#165840"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2647_582">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Typography className="pointer">Add New Record</Typography>
            </div>
            <div onClick={() => navigate("/add_car")} className="LCardLInfo">
              <svg
                className="pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_2647_588)">
                  <path
                    d="M12.7834 6.44065L5.28347 13.9396L5.28328 13.9398C5.03835 14.1849 4.72858 14.3551 4.39031 14.4304L0.763211 15.2368L1.5748 11.586L1.5748 11.586C1.64659 11.263 1.80891 10.9672 2.04278 10.7331L9.55955 3.21722L12.7834 6.44065ZM11.2577 1.51827L11.4296 1.34637C11.8586 0.928758 12.4346 0.696552 13.0334 0.700039C13.6335 0.703533 14.208 0.94343 14.6323 1.36767C15.0566 1.79191 15.2965 2.36628 15.3 2.96619C15.3034 3.56484 15.0713 4.14079 14.6536 4.56966L14.4815 4.7417L11.2577 1.51827Z"
                    stroke="#165840"
                    stroke-width="1.4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2647_588">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Typography className="pointer">Edit</Typography>
            </div>
            <div onClick={() => navigate("/add_car")} className="LCardLInfo">
              <svg
                className="pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="14"
                viewBox="0 0 33 14"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.9806 0L33 7L25.9806 14V7.71622H1.00161C0.448437 7.71622 0 7.39556 0 7C0 6.60444 0.448437 6.28378 1.00161 6.28378H25.9806V0Z"
                  fill="#3F7561"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar home={home} />
      <section className="user-info-car">
        <div className="container-fluid">
          <div className="user-info-car-flex">
            <div className="user-info-car-left">
              <div className="userEditBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10.92 0.873001C11.4801 0.32581 12.2334 0.0214917 13.0164 0.0260515C13.7994 0.0306113 14.549 0.343681 15.1027 0.897358C15.6564 1.45104 15.9694 2.20067 15.974 2.98368C15.9785 3.76668 15.6742 4.51991 15.127 5.08L14.458 5.749L10.251 1.542L10.92 0.873001ZM9.54403 2.25L1.54503 10.249C1.21771 10.5767 0.990516 10.9909 0.890033 11.443L0.012033 15.393C-0.00633093 15.4752 -0.0036392 15.5607 0.0198586 15.6415C0.0433565 15.7224 0.086899 15.796 0.146447 15.8556C0.205994 15.9151 0.279617 15.9587 0.360485 15.9822C0.441354 16.0057 0.526847 16.0084 0.609033 15.99L4.53503 15.117C5.00247 15.0129 5.43054 14.7777 5.76903 14.439L13.751 6.457L9.54403 2.25Z" fill="#ADBC92" />
                </svg>
              </div>
              <div className="user-info-car-avatar">
                <img src={caravatar} alt="" className="object-fit" />
              </div>
              <div className="user-info-car-detail">
                <ul>
                  <li>
                    <img src={caricon01} alt="" />{" "}
                    <span>
                      <strong>Saimon Jhonson</strong>
                    </span>
                  </li>
                  <li>
                    <img src={caricon02} alt="" />{" "}
                    <span>saimonjhonson83@gmail.com</span>
                  </li>
                  <li>
                    <img src={caricon03} alt="" />{" "}
                    <span>Full address would be here...</span>
                  </li>
                </ul>
              </div>
              <div className="user-info-car-desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Est tellus arcu
                  habitasse neque dapibus donec quis malesuada tincidunt. Sit
                  pellentesque libero nisl nunc. Nascetur egestas feugiat.
                </p>
              </div>
            </div>
            <div className="user-info-car-right">
              <div className="user-info-car-right-left">
                <img src={caricon04} alt="" />
              </div>
              <div className="user-info-car-right-right">
                <h4>
                  <span>05</span>Total Cars
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="garage-list">
        <div className="container-fluid">
          <div className="garage-list-heading">
            <h2>My Garage</h2>
            <div className="garage-list-heading-right">
              <button className="garage-list-sort">
                <img src={sorticon} alt="" />
              </button>
              <button className="garage-list-add">
                <img src={addicon} alt="" />
              </button>
              <button
                onClick={() => setListView(true)}
                className="garage-list-list"
              >
                {listView ? LviewLcActive : LviewLc}
              </button>
              <button
                onClick={() => setListView(false)}
                className="garage-list-grid"
              >
                {listView ? GviewIc : GviewIcActive}
              </button>
            </div>
          </div>
          <div className="garage-list-wrapper">
            {/* Map those cards */}
            {listView ? (
              <>
                {listCare({
                  brand: "Toyota",
                  name: "Innova Crysta",
                  Lyear: "2021",
                  milage: "201245 KM",
                  Items: "Items Due",
                })}
                {listCare({
                  brand: "Toyota",
                  name: "Innova Crysta",
                  Lyear: "2021",
                  milage: "201245 KM",
                  Items: "Items Due",
                })}
                {listCare({
                  brand: "Toyota",
                  name: "Innova Crysta",
                  Lyear: "2021",
                  milage: "201245 KM",
                  Items: "Items Due",
                })}
                {listCare({
                  brand: "Toyota",
                  name: "Innova Crysta",
                  Lyear: "2021",
                  milage: "201245 KM",
                  Items: "Items Due",
                })}
                {listCare({
                  brand: "Toyota",
                  name: "Innova Crysta",
                  Lyear: "2021",
                  milage: "201245 KM",
                  Items: "Items Due",
                })}
                {listCare({
                  brand: "Toyota",
                  name: "Innova Crysta",
                  Lyear: "2021",
                  milage: "201245 KM",
                  Items: "Items Due",
                })}
                {listCare({
                  brand: "Toyota",
                  name: "Innova Crysta",
                  Lyear: "2021",
                  milage: "201245 KM",
                  Items: "Items Due",
                })}
              </>
            ) : (
              CarCard({
                index: 0,
                brand: "Toyota",
                name: "Innova Crysta",
                Lyear: "2021",
                milage: "201245 KM",
                Items: "Items Due",
                image1: slideimage1,
                image2: slideimage2,
                image3: slideimage3,
                image4: slideimage4,
              })
            )}

            {CarCard({
              index: 1,
              brand: "Toyota",
              name: "Innova Crysta",
              Lyear: "2021",
              milage: "201245 KM",
              Items: "Items Due",
              image1: slideimage5,
              image2: slideimage4,
              image3: slideimage3,
              image4: slideimage2,
            })}

            {CarCard({
              index: 2,
              brand: "Toyota",
              name: "Innova Crysta",
              Lyear: "2021",
              milage: "201245 KM",
              Items: "Items Due",
              image1: slideimage4,
              image2: slideimage2,
              image3: slideimage3,
              image4: slideimage1,
            })}

            {CarCard({
              index: 3,
              brand: "Toyota",
              name: "Innova Crysta",
              Lyear: "2021",
              milage: "201245 KM",
              Items: "Items Due",
              image1: slideimage4,
              image2: slideimage2,
              image3: slideimage3,
              image4: slideimage5,
            })}

            {CarCard({
              index: 4,
              brand: "Toyota",
              name: "Innova Crysta",
              Lyear: "2021",
              milage: "201245 KM",
              Items: "Items Due",
              image1: slideimage2,
              image2: slideimage4,
              image3: slideimage3,
              image4: slideimage5,
            })}

            <div
              className={listView ? "dasAddButton" : "dasAddButtonG"}>
              <button
                // style={{ height: listView ? "110px" : "100%" }}
                className="garage-list-add-item"
                onClick={() => navigate("/add_car")}
              >
                <i className="fa-solid fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
