import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

import carshowcaseimage1 from "../../Assets/images/add-car=showcase-image-1.jpg";
import carshowcaseimage2 from "../../Assets/images/add-car=showcase-image-2.jpg";
import carshowcaseimage3 from "../../Assets/images/add-car=showcase-image-3.jpg";
import carshowcaseimage4 from "../../Assets/images/add-car=showcase-image-4.jpg";
import carshowcaseimage5 from "../../Assets/images/add-car=showcase-image-5.jpg";

import detailcardicon1 from "../../Assets/images/detail-icon-card-icon-1.svg";
import detailcardicon2 from "../../Assets/images/detail-icon-card-icon-2.svg";
import detailcardicon3 from "../../Assets/images/detail-icon-card-icon-3.svg";
import detailcardicon4 from "../../Assets/images/detail-icon-card-icon-4.svg";
import detailcardicon5 from "../../Assets/images/detail-icon-card-icon-5.svg";
import detailcardicon6 from "../../Assets/images/detail-icon-card-icon-6.svg";
import detailcardicon7 from "../../Assets/images/detail-icon-card-icon-7.svg";
import detailcardicon8 from "../../Assets/images/detail-icon-card-icon-8.svg";
import detailcardicon9 from "../../Assets/images/detail-icon-card-icon-9.svg";
import detailcardicon10 from "../../Assets/images/detail-icon-card-icon-10.svg";
import detailcardicon11 from "../../Assets/images/detail-icon-card-icon-11.svg";
import detailcardicon12 from "../../Assets/images/detail-icon-card-icon-12.svg";

import boxcardicon1 from "../../Assets/images/box-card-icon-1.svg";
import boxcardicon2 from "../../Assets/images/box-card-icon-2.svg";
import boxcardicon3 from "../../Assets/images/box-card-icon-3.svg";
import boxcardicon4 from "../../Assets/images/box-card-icon-4.svg";

//component
import NavBar from "../../Pages/NavBar"

export default function AddCar({ setTab }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavBar />
      <section className="add-car-showcase add-carContainer">
        <div className="container-fluid">
          <div className="add-car-showcase-wrapper">
            <div className="add-car-showcase-item add-car-showcase-big-image">
              <img src={carshowcaseimage1} alt="" className="object-fit" />
              <button className="add-car-showcase-edit-btn">
                <i className="fa-solid fa-pen" />
              </button>
              <button className="add-car-showcase-add-btn">
                <i className="fa-solid fa-plus" />
              </button>
            </div>
            <div className="add-car-showcase-item-list">
              <div className="add-car-showcase-item">
                <img src={carshowcaseimage2} alt="" className="object-fit" />
                <button className="add-car-showcase-edit-btn">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="add-car-showcase-add-btn">
                  <i className="fa-solid fa-plus" />
                </button>
              </div>
              <div className="add-car-showcase-item blank-image">
                <img src={carshowcaseimage3} alt="" className="object-fit" />
                <button className="add-car-showcase-edit-btn">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="add-car-showcase-add-btn">
                  <i className="fa-solid fa-plus" />
                </button>
              </div>
              <div className="add-car-showcase-item blank-image">
                <img src={carshowcaseimage4} alt="" className="object-fit" />
                <button className="add-car-showcase-edit-btn">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="add-car-showcase-add-btn">
                  <i className="fa-solid fa-plus" />
                </button>
              </div>
              <div className="add-car-showcase-item blank-image">
                <img src={carshowcaseimage5} alt="" className="object-fit" />
                <button className="add-car-showcase-edit-btn">
                  <i className="fa-solid fa-pen" />
                </button>
                <button className="add-car-showcase-add-btn">
                  <i className="fa-solid fa-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-icon-card">
        <div className="container-fluid">
          <div className="detail-icon-card-heading">
            <h2>Car Details</h2>
            <div className="detail-icon-card-heading-right">
              <button
                className="detail-icon-card-edit-btn"
                onClick={handleShow}
              >
                <i className="fa-solid fa-pen" /> Edit
              </button>
            </div>
          </div>
          <div className="detail-icon-card-list">
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon1} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon2} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon3} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon4} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon5} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon6} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon7} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon8} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon9} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon10} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon11} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Manufacturer Year
                  <span>
                    <strong>2021</strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="detail-icon-card-item">
              <div className="detail-icon-card-icon">
                <img src={detailcardicon12} alt="" />
              </div>
              <div className="detail-icon-card-content">
                <p>
                  Short Description
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Pellentesque auctor
                    dapibus ac amet mauris tellus amet ut. Facilisis non in sit
                    proin.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box-card-icon">
        <div className="container-fluid">
          <div className="box-card-icon-wrapper">
            <a onClick={() => {
              navigate("/menu")
              setTab(1)
            }}
              href="#" className="box-card-icon-item">
              <div className="box-card-icon-item-content">
                <img src={boxcardicon1} alt="" />
                <p>Create New Record</p>
              </div>
            </a>
            <a
              onClick={() => {
                navigate("/menu")
                setTab(2)
              }}
              href="#" className="box-card-icon-item">
              <div className="box-card-icon-item-content">
                <img src={boxcardicon2} alt="" />
                <p>Vehicle Log</p>
              </div>
            </a>
            <a
              onClick={() => {
                navigate("/menu")
                setTab(3)
              }}
              href="#" className="box-card-icon-item">
              <div className="box-card-icon-item-content">
                <img src={boxcardicon3} alt="" />
                <p>Cost Dashboard</p>
              </div>
            </a>
            <a onClick={() => {
              navigate("/menu")
              setTab(4)
            }} href="#" className="box-card-icon-item">
              <div className="box-card-icon-item-content">
                <img src={boxcardicon4} alt="" />
                <p>Document Tracking</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="pop-form">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="form-input">
                  <label>Manufacturer Year</label>
                  <input type="date" placeholder="Select year" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="form-input">
                  <label>Manufacturer</label>
                  <input type="text" placeholder="Manufacturer" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="form-input">
                  <label>Model</label>
                  <input type="text" placeholder="Enter Model" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="form-input">
                  <label>Mileage</label>
                  <input type="text" placeholder="Enter milage" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="form-input">
                  <label>Color</label>
                  <input type="text" placeholder="Enter Color" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="form-input">
                  <label>Transmission</label>
                  <input type="text" placeholder="Transmission" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-input">
                  <label>VIN</label>
                  <input type="text" placeholder="Enter VIN" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="form-input">
                  <label>License Plate Number</label>
                  <input type="text" placeholder="Enter license plate number" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="form-input">
                  <label>Purchase Price</label>
                  <input type="text" placeholder="Enter price" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="form-input">
                  <label>Years Owned</label>
                  <input type="date" placeholder="Select year" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="form-input">
                  <label>Miles Driven Per Year</label>
                  <input type="text" placeholder="Enter miles" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-input">
                  <label>Short Description</label>
                  <textarea
                    placeholder="Enter short description..."
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-input form-input-btn">
                  <button>Save &amp; Update</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
