import React, { useState } from "react";
import "./style.css";

import uploadicon from "../../Assets/images/upload-cloud.svg";
import pdficon from "../../Assets/images/pdf.svg";

export default function DocumentTracking({ open }) {
  const [listView, setListView] = useState(false);

  const documentCard = ({ DocumentTitle, date, otherNote }) => {
    if (listView) {
      return (
        <div
          className={
            open ? "document-lists d_l_ActiveOpen" : "document-lists d_l_Active"
          }
        >
          <div className="dc-list-view">
            <div className="img-box">
              <img src={pdficon} alt="" />
            </div>
            <div className="txt-box">
              <h4>{DocumentTitle}</h4>
              <ul>
                <li>{date}</li>
                <li>{otherNote}</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="document-lists d_l_Non_Active">
          <div className="dc-grid-view">
            <div className="img-box">
              <img src={pdficon} alt="" />
            </div>
            <div className="txt-box">
              <h4>{DocumentTitle}</h4>
              <ul>
                <li>{date}</li>
                <li>{otherNote}</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
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

  return (
    <>
      <section className="document-tracking-section">
        <div className="container-fluid">
          <div className="garage-list-heading">
            <h2>Document Lists</h2>
            <div className="document-tracking-heading-right">
              <div class="file-input">
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  class="file-input__input"
                />
                <label class="file-input__label" for="file-input">
                  <img src={uploadicon} alt="" />
                  <span>Upload New Document</span>
                </label>
              </div>

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

          <div className="documentListContainer">
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
            {documentCard({
              DocumentTitle: "Document name here",
              date: "25th Jul 2023",
              otherNote: "Others Note",
            })}
          </div>
        </div>
      </section>
    </>
  );
}
