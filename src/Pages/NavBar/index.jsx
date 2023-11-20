import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom"

import Dropdown from "react-bootstrap/Dropdown";

import logo from "../../Assets/images/logo-header.png";
import menubar from "../../Assets/images/menu-bar.svg";
import searchicon from "../../Assets/images/search.svg";
import notifyicon from "../../Assets/images/notify-btn-icon.svg";

export default function Header({ home }) {
  const navigate = useNavigate();

  return (
    <>
      <header className="page-header">
        <div className="container-fluid">
          <div className="header-flex">
            <div className="header-left">
              <div style={{ display: home ? "none" : "block" }} onClick={() => navigate("/")} className="header-menu hammenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6063 0.390524C14.1312 0.911223 14.1312 1.75544 13.6063 2.27614L3.8023 12L13.6063 21.7239C14.1312 22.2446 14.1312 23.0888 13.6063 23.6095C13.0813 24.1302 12.2301 24.1302 11.7051 23.6095L0 12L11.7051 0.390524C12.2301 -0.130175 13.0813 -0.130175 13.6063 0.390524Z" fill="#55625D" />
                </svg>
              </div>
              <div className="logo-header">
                <a href="/">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="header-right">
              <div className="header-search">
                <div className="header-search-input">
                  <div className="header-search-input-wrapper">
                    <input type="text" placeholder="Search..." />
                    <button>
                      <img src={searchicon} alt="" />
                    </button>
                    <div className="header-search-close">
                      <i className="fa-solid fa-arrow-left" />
                    </div>
                  </div>
                </div>
                <div className="header-search-btn">
                  <img src={searchicon} alt="" />
                </div>
              </div>
              <div className="notify-area">
                <a href="#" className="notify-btn">
                  <img src={notifyicon} alt="" />
                </a>
              </div>
              <div className="header-profile">
                <Dropdown>
                  <Dropdown.Toggle variant="default" id="dropdown-basic">
                    <span className="header-profile-avatar">SN</span>
                    <span className="header-profile-name">Saimon Jhonson</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}