import React, { useState } from "react";
import "./style.css";

import listicon from "../../Assets/images/garage-list-list-icon.svg";
import gridicon from "../../Assets/images/garage-list-grid-icon.svg";
import editicon from "../../Assets/images/edit.svg";
import remindericon from "../../Assets/images/reminder.svg";
import carnoteicon from "../../Assets/images/car-note.svg";

import VehicleLogTabs from "../VehicleLogTabs";

export default function VehicleLog({ open }) {
  const [listView, setListView] = useState(false);
  console.log(open);

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




  return (
    <>
      <div style={{ marginRight: open ? "239px" : "0" }} className="vehicle-log-top">
        <div className="heading">
          <h2>Vehicle Log</h2>
          <ul>
            <li>Car: <strong>2007 Porsche 911 GT3</strong></li>
            <li>Mileage: <strong>26,125 KM</strong></li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li><a href="#" className="active">History</a></li>
            <li><a href="#">Upcoming</a></li>
          </ul>
        </div>
      </div>
      <div className="vehicle-log-tabs">
        <VehicleLogTabs />
      </div>
      <div style={{ marginRight: open ? "239px" : "0" }} className="vehicle-log-filter-list-grid">
        <div className="garage-list-heading">
          <select name="" id="">
            <option value="">Filter</option>
            <option value="">Filter</option>
            <option value="">Filter</option>
          </select>
          <div className="garage-list-heading-right">
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
      </div>
      {!listView ?
        <div style={{ marginRight: open ? "239px" : "0" }} className="vehicle-log-content-grid">
          <div className="details-box">
            <div className="top-box">
              <h4>Braking</h4>
              <p><a href="#"><img src={editicon} alt="" /> Detailed</a></p>
            </div>
            <div className="grey-box">
              <ul>
                <li>Date: <strong>25th Jul 2023</strong></li>
                <li>Mileage: <strong>52142KM</strong></li>
                <li>Location: <strong>17/K/10 Dakshindari road, Kolkata</strong></li>
              </ul>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="reminder-box">
              <h5><img src={remindericon} alt="" /> Reminder</h5>
              <ul>
                <li>Remind me every 500 miles</li>
                <li>Remind me every 3 Months</li>
                <li>Remind me every 6 Months</li>
              </ul>
            </div>
            <div className="note-box">
              <div className="img"><img src={carnoteicon} alt="" /></div>
              <div className="txt">
                <p>Lorem ipsum dolor sit amet consectetur. Sed viverra facilisis volutpat donec arcu proin vivamus fermentum enim. Massa sagittis tortor sed adipiscing eget volutpat pharetra. Sed pellentesque sit semper tristique eget in id.</p>
              </div>
            </div>
          </div>
          <div className="details-box">
            <div className="top-box">
              <h4>Braking</h4>
              <p><a href="#"><img src={editicon} alt="" /> Detailed</a></p>
            </div>
            <div className="grey-box">
              <ul>
                <li>Date: <strong>25th Jul 2023</strong></li>
                <li>Mileage: <strong>52142KM</strong></li>
                <li>Location: <strong>17/K/10 Dakshindari road, Kolkata</strong></li>
              </ul>
            </div>
            <div className="input-box">
              <div className="field50">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field50">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="reminder-box">
              <h5><img src={remindericon} alt="" /> Reminder</h5>
              <ul>
                <li>Remind me every 500 miles</li>
                <li>Remind me every 3 Months</li>
                <li>Remind me every 6 Months</li>
              </ul>
            </div>
            <div className="note-box">
              <div className="img"><img src={carnoteicon} alt="" /></div>
              <div className="txt">
                <p>Lorem ipsum dolor sit amet consectetur. Sed viverra facilisis volutpat donec arcu proin vivamus fermentum enim. Massa sagittis tortor sed adipiscing eget volutpat pharetra. Sed pellentesque sit semper tristique eget in id.</p>
              </div>
            </div>
          </div>
          <div className="details-box">
            <div className="top-box">
              <h4>Braking</h4>
              <p><a href="#"><img src={editicon} alt="" /> Detailed</a></p>
            </div>
            <div className="grey-box">
              <ul>
                <li>Date: <strong>25th Jul 2023</strong></li>
                <li>Mileage: <strong>52142KM</strong></li>
                <li>Location: <strong>17/K/10 Dakshindari road, Kolkata</strong></li>
              </ul>
            </div>
            <div className="input-box">
              <div className="field50">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field50">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="reminder-box">
              <h5><img src={remindericon} alt="" /> Reminder</h5>
              <ul>
                <li>Remind me every 500 miles</li>
                <li>Remind me every 3 Months</li>
                <li>Remind me every 6 Months</li>
              </ul>
            </div>
            <div className="note-box">
              <div className="img"><img src={carnoteicon} alt="" /></div>
              <div className="txt">
                <p>Lorem ipsum dolor sit amet consectetur. Sed viverra facilisis volutpat donec arcu proin vivamus fermentum enim. Massa sagittis tortor sed adipiscing eget volutpat pharetra. Sed pellentesque sit semper tristique eget in id.</p>
              </div>
            </div>
          </div>
          <div className="details-box">
            <div className="top-box">
              <h4>Braking</h4>
              <p><a href="#"><img src={editicon} alt="" /> Detailed</a></p>
            </div>
            <div className="grey-box">
              <ul>
                <li>Date: <strong>25th Jul 2023</strong></li>
                <li>Mileage: <strong>52142KM</strong></li>
                <li>Location: <strong>17/K/10 Dakshindari road, Kolkata</strong></li>
              </ul>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="reminder-box">
              <h5><img src={remindericon} alt="" /> Reminder</h5>
              <ul>
                <li>Remind me every 500 miles</li>
                <li>Remind me every 3 Months</li>
                <li>Remind me every 6 Months</li>
              </ul>
            </div>
            <div className="note-box">
              <div className="img"><img src={carnoteicon} alt="" /></div>
              <div className="txt">
                <p>Lorem ipsum dolor sit amet consectetur. Sed viverra facilisis volutpat donec arcu proin vivamus fermentum enim. Massa sagittis tortor sed adipiscing eget volutpat pharetra. Sed pellentesque sit semper tristique eget in id.</p>
              </div>
            </div>
          </div>
        </div>
        :
        <div style={{ marginRight: open ? "239px" : "0" }} className="vehicle-log-content-list">
          <div className="details-box">
            <div className="top-box">
              <h4>Braking</h4>
              <p><a href="#"><img src={editicon} alt="" /> Detailed</a></p>
            </div>
            <div className="grey-box">
              <ul>
                <li>Date: <strong>25th Jul 2023</strong></li>
                <li>Mileage: <strong>52142KM</strong></li>
                <li>Location: <strong>17/K/10 Dakshindari road, Kolkata</strong></li>
              </ul>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="reminder-box">
              <h5><img src={remindericon} alt="" /> Reminder</h5>
              <ul>
                <li>Remind me every 500 miles</li>
                <li>Remind me every 3 Months</li>
                <li>Remind me every 6 Months</li>
              </ul>
            </div>
            <div className="note-box">
              <div className="img"><img src={carnoteicon} alt="" /></div>
              <div className="txt">
                <p>Lorem ipsum dolor sit amet consectetur. Sed viverra facilisis volutpat donec arcu proin vivamus fermentum enim. Massa sagittis tortor sed adipiscing eget volutpat pharetra. Sed pellentesque sit semper tristique eget in id.</p>
              </div>
            </div>
          </div>
          <div className="details-box">
            <div className="top-box">
              <h4>Braking</h4>
              <p><a href="#"><img src={editicon} alt="" /> Detailed</a></p>
            </div>
            <div className="grey-box">
              <ul>
                <li>Date: <strong>25th Jul 2023</strong></li>
                <li>Mileage: <strong>52142KM</strong></li>
                <li>Location: <strong>17/K/10 Dakshindari road, Kolkata</strong></li>
              </ul>
            </div>
            <div className="input-box">
              <div className="field50">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field50">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="reminder-box">
              <h5><img src={remindericon} alt="" /> Reminder</h5>
              <ul>
                <li>Remind me every 500 miles</li>
                <li>Remind me every 3 Months</li>
                <li>Remind me every 6 Months</li>
              </ul>
            </div>
            <div className="note-box">
              <div className="img"><img src={carnoteicon} alt="" /></div>
              <div className="txt">
                <p>Lorem ipsum dolor sit amet consectetur. Sed viverra facilisis volutpat donec arcu proin vivamus fermentum enim. Massa sagittis tortor sed adipiscing eget volutpat pharetra. Sed pellentesque sit semper tristique eget in id.</p>
              </div>
            </div>
          </div>
          <div className="details-box">
            <div className="top-box">
              <h4>Braking</h4>
              <p><a href="#"><img src={editicon} alt="" /> Detailed</a></p>
            </div>
            <div className="grey-box">
              <ul>
                <li>Date: <strong>25th Jul 2023</strong></li>
                <li>Mileage: <strong>52142KM</strong></li>
                <li>Location: <strong>17/K/10 Dakshindari road, Kolkata</strong></li>
              </ul>
            </div>
            <div className="input-box">
              <div className="field50">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field50">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="reminder-box">
              <h5><img src={remindericon} alt="" /> Reminder</h5>
              <ul>
                <li>Remind me every 500 miles</li>
                <li>Remind me every 3 Months</li>
                <li>Remind me every 6 Months</li>
              </ul>
            </div>
            <div className="note-box">
              <div className="img"><img src={carnoteicon} alt="" /></div>
              <div className="txt">
                <p>Lorem ipsum dolor sit amet consectetur. Sed viverra facilisis volutpat donec arcu proin vivamus fermentum enim. Massa sagittis tortor sed adipiscing eget volutpat pharetra. Sed pellentesque sit semper tristique eget in id.</p>
              </div>
            </div>
          </div>
          <div className="details-box">
            <div className="top-box">
              <h4>Braking</h4>
              <p><a href="#"><img src={editicon} alt="" /> Detailed</a></p>
            </div>
            <div className="grey-box">
              <ul>
                <li>Date: <strong>25th Jul 2023</strong></li>
                <li>Mileage: <strong>52142KM</strong></li>
                <li>Location: <strong>17/K/10 Dakshindari road, Kolkata</strong></li>
              </ul>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="input-box">
              <div className="field25">
                <label htmlFor="">Pick a braking option</label>
                <input type="text" name="" id="" value="ABS" />
              </div>
              <div className="field25">
                <label htmlFor="">Part number</label>
                <input type="text" name="" id="" value="5142" />
              </div>
              <div className="field25">
                <label htmlFor="">Source</label>
                <input type="text" name="" id="" value="Toyota" />
              </div>
              <div className="field25">
                <label htmlFor="">Cost</label>
                <input type="text" name="" id="" value="$45,123" />
              </div>
            </div>
            <div className="reminder-box">
              <h5><img src={remindericon} alt="" /> Reminder</h5>
              <ul>
                <li>Remind me every 500 miles</li>
                <li>Remind me every 3 Months</li>
                <li>Remind me every 6 Months</li>
              </ul>
            </div>
            <div className="note-box">
              <div className="img"><img src={carnoteicon} alt="" /></div>
              <div className="txt">
                <p>Lorem ipsum dolor sit amet consectetur. Sed viverra facilisis volutpat donec arcu proin vivamus fermentum enim. Massa sagittis tortor sed adipiscing eget volutpat pharetra. Sed pellentesque sit semper tristique eget in id.</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
