import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

import createrecordicon1 from "../../Assets/images/create-record-card-icon-1.svg";
import createrecordicon2 from "../../Assets/images/create-record-card-icon-2.svg";
import createrecordicon3 from "../../Assets/images/create-record-card-icon-3.svg";
import createrecordicon4 from "../../Assets/images/create-record-card-icon-4.svg";
import createrecordicon5 from "../../Assets/images/create-record-card-icon-5.svg";
import createrecordicon6 from "../../Assets/images/create-record-card-icon-6.svg";
import createrecordicon7 from "../../Assets/images/create-record-card-icon-7.svg";
import createrecordicon8 from "../../Assets/images/create-record-card-icon-8.svg";
import createrecordicon9 from "../../Assets/images/create-record-card-icon-9.svg";
import createrecordicon10 from "../../Assets/images/create-record-card-icon-10.svg";
import createrecordicon11 from "../../Assets/images/create-record-card-icon-11.svg";
import createrecordicon12 from "../../Assets/images/create-record-card-icon-12.svg";
import createrecordicon13 from "../../Assets/images/create-record-card-icon-13.svg";
import createrecordicon14 from "../../Assets/images/create-record-card-icon-14.svg";
import createrecordicon15 from "../../Assets/images/create-record-card-icon-15.svg";

import remindericon from "../../Assets/images/reminder.svg";
import plusicon from "../../Assets/images/plus.svg";
import minusicon from "../../Assets/images/minus.svg";
import notecard01 from "../../Assets/images/notecard-01.svg";
import notecard02 from "../../Assets/images/notecard-02.svg";
import notecard03 from "../../Assets/images/notecard-03.svg";
import notecard04 from "../../Assets/images/notecard-04.svg";
;

export default function CreateNewRecord() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("simple");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const categoryCard = (icon, text) => {
    return (
      <a href="#" className="detail-icon-card-item" onClick={handleShow}>
        <div className="detail-icon-card-icon">
          <img src={icon} alt="" />
        </div>
        <div className="detail-icon-card-content">
          <p>{text}</p>
        </div>
      </a>
    )
  }

  return (
    <>
      <section className="detail-icon-card create-record">
        <div className="container-fluid">
          <h2>Choose Category</h2>
          <div className="detail-icon-card-list">
            {categoryCard(createrecordicon1, "Braking")}
            {categoryCard(createrecordicon2, "Car Care Exterior")}
            {categoryCard(createrecordicon3, "Car Care Interior")}
            {categoryCard(createrecordicon4, "Climate Control")}
            {categoryCard(createrecordicon5, "Drivetrain")}
            {categoryCard(createrecordicon6, "Engine")}
            {categoryCard(createrecordicon7, "Exhaust")}
            {categoryCard(createrecordicon8, "Exterior")}
            {categoryCard(createrecordicon9, "Interior")}
            {categoryCard(createrecordicon10, "Lighting")}
            {categoryCard(createrecordicon11, "Steering")}
            {categoryCard(createrecordicon12, "Suspension")}
            {categoryCard(createrecordicon13, "Tire/Wheels")}
            {categoryCard(createrecordicon14, "Events")}
            {categoryCard(createrecordicon15, "Miscellaneous")}
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
          <Modal.Title>Create New Braking Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="pop-form">
            <div className="grey-section">
              <div className="row align-items-center">
                <div className="col-sm-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="simple"
                      id="simple"
                      defaultChecked
                      checked={selected === "simple"}
                      onChange={(e) => setSelected(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="simple">
                      Simple
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="detailed"
                      id="detailed"
                      checked={selected === "detailed"}
                      onChange={(e) => setSelected(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="detailed">
                      Detailed
                    </label>
                  </div>
                </div>
                <div className="col-sm-3">
                  <input type="date" placeholder="Select year" />
                </div>
                <div className="col-sm-3">
                  <input type="text" placeholder="Enter Mileage" />
                </div>
                <div className="col-sm-3">
                  <input type="text" placeholder="Enter Location" />
                </div>
              </div>
            </div>
            <div aria-hidden={selected !== "simple" ? true : false}>
              <div className="simple-row">
                <div className="checkbox">
                  <input
                    class="form-check-input mt15"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                    checked
                  />
                </div>
                <div className="pick">
                  <div className="form-input">
                    <label>Pick a braking option</label>
                    <select>
                      <option>Select...</option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                    </select>
                  </div>
                </div>
                <div className="cost">
                  <div className="form-input">
                    <label>Cost</label>
                    <input type="text" placeholder="Enter cost" />
                  </div>
                </div>
                <div className="delete"></div>
              </div>
              <div className="simple-row">
                <div className="checkbox">
                  <input
                    class="form-check-input mt15"
                    type="checkbox"
                    id="checkboxNoLabel"
                    value=""
                    aria-label="..."
                  />
                </div>
                <div className="pick">
                  <div className="form-input">
                    <label>Pick a braking option</label>
                    <select>
                      <option>Select...</option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                    </select>
                  </div>
                </div>
                <div className="cost">
                  <div className="form-input">
                    <label>Cost</label>
                    <input type="text" placeholder="Enter cost" />
                  </div>
                </div>
                <div className="delete">
                  <button className="btn-minus">
                    <img src={minusicon} alt="" />
                  </button>
                </div>
              </div>
              <div className="row mb27">
                <div className="col-sm-8 col-lg-9">
                  <div className="form-input form-input-btn">
                    <button className="btn-reminder">
                      <img src={remindericon} alt="" /> Add Reminder Occurrence{" "}
                      <span>(e,g. Date, Miles, Every Miles)</span>
                    </button>
                  </div>
                </div>
                <div className="col-sm-4 col-lg-3">
                  <div className="form-input form-input-btn">
                    <button className="btn-add">
                      <img src={plusicon} alt="" /> Add More Rows
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div aria-hidden={selected !== "detailed" ? true : false}>
              <div className="detailed-row">
                <div className="checkbox">
                  <input
                    class="form-check-input mt15"
                    type="checkbox"
                    id="checkboxNoLabel11"
                    value=""
                    aria-label="..."
                  />
                </div>
                <div className="pick">
                  <div className="form-input">
                    <label>Pick a braking option</label>
                    <select>
                      <option>Select...</option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                    </select>
                  </div>
                </div>
                <div className="part">
                  <div className="form-input">
                    <label>Part number</label>
                    <input type="text" placeholder="Enter part number" />
                  </div>
                </div>
                <div className="source">
                  <div className="form-input">
                    <label>Source</label>
                    <select>
                      <option>Select...</option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                    </select>
                  </div>
                </div>
                <div className="cost">
                  <div className="form-input">
                    <label>Cost</label>
                    <input type="text" placeholder="Enter cost" />
                  </div>
                </div>
                <div className="delete"></div>
              </div>
              <div className="detailed-row">
                <div className="checkbox">
                  <input
                    class="form-check-input mt15"
                    type="checkbox"
                    id="checkboxNoLabel12"
                    value=""
                    aria-label="..."
                  />
                </div>
                <div className="pick">
                  <div className="form-input">
                    <label>Pick a braking option</label>
                    <select>
                      <option>Select...</option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                    </select>
                  </div>
                </div>
                <div className="part">
                  <div className="form-input">
                    <label>Part number</label>
                    <input type="text" placeholder="Enter part number" />
                  </div>
                </div>
                <div className="source">
                  <div className="form-input">
                    <label>Source</label>
                    <select>
                      <option>Select...</option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                    </select>
                  </div>
                </div>
                <div className="cost">
                  <div className="form-input">
                    <label>Cost</label>
                    <input type="text" placeholder="Enter cost" />
                  </div>
                </div>
                <div className="delete">
                  <button className="btn-minus">
                    <img src={minusicon} alt="" />
                  </button>
                </div>
              </div>
              <div className="row mb27">
                <div className="col-sm-7 col-lg-9">
                  <div className="form-input form-input-btn">
                    <button className="btn-reminder">
                      <img src={remindericon} alt="" /> Add Reminder Occurrence{" "}
                      <span>(e,g. Date, Miles, Every Miles)</span>
                    </button>
                  </div>
                </div>
                <div className="col-sm-5 col-lg-3">
                  <div className="form-input form-input-btn">
                    <button className="btn-add">
                      <img src={plusicon} alt="" /> Add More Rows
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 col-lg-4">
                <p className="notecard-type">
                  Select Notecard Type: Maintenance, Modification, Restoration,
                  or Other
                </p>
                <ul className="notecard-type">
                  <li>
                    <button>
                      <img src={notecard01} alt="" />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img src={notecard02} alt="" />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img src={notecard03} alt="" />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img src={notecard04} alt="" />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 col-lg-8">
                <div className="form-input">
                  <label>Add Notes</label>
                  <textarea
                    placeholder="Enter additional notes here..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-6">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Create Another
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-input form-input-btn">
                  <button>Save</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
