import React, { useState } from "react";
import "./style.css";

import costicon01 from "../../Assets/images/img1.png";
import costicon02 from "../../Assets/images/img2.png";
import costicon03 from "../../Assets/images/img3.png";
import costicon04 from "../../Assets/images/img4.png";
import linechart from "../../Assets/images/linegr.png";
import piechart from "../../Assets/images/pie-chart.png";

//components
import ApexChart from "../../Component/LineChart"
import { PieChart } from "../../Component/PieChartV2"



export default function CostDashboard() {
  return (
    <>
      <section className="cost-tracking-section">
        <div className="container-fluid">
          <div className="cost-tracking">
            <h2>Cost Tracking</h2>
            <div className="cost-tracking-sub">
              <p>
                Car: <span>2007 Porsche 911 GT3</span>
              </p>
              <p>
                Mileage: <span>26,125 KM</span>
              </p>
            </div>
          </div>
          <div className="cost-of-ownership-wrapper">
            <div className="user-info-car-right">
              <div className="user-info-car-right-left">
                <img src={costicon01} alt="" />
              </div>
              <div className="user-info-car-right-right">
                <h4>
                  <span>$2,541</span>Cost of Ownership
                </h4>
              </div>
            </div>
            <div className="user-info-car-right">
              <div className="user-info-car-right-left">
                <img src={costicon02} alt="" />
              </div>
              <div className="user-info-car-right-right">
                <h4>
                  <span>08</span>Years Owned
                </h4>
              </div>
            </div>
            <div className="user-info-car-right">
              <div className="user-info-car-right-left">
                <img src={costicon03} alt="" />
              </div>
              <div className="user-info-car-right-right">
                <h4>
                  <span>$845</span>Cost / Year
                </h4>
              </div>
            </div>
            <div className="user-info-car-right">
              <div className="user-info-car-right-left">
                <img src={costicon04} alt="" />
              </div>
              <div className="user-info-car-right-right">
                <h4>
                  <span>$3,386</span>Total
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-section">
        <div className="container-fluid">
          <div className="line-graph-chart-wrapper">
            <div className="line-graph">
              <div className="line-graph-top">
                <h4>Cost of Ownership</h4>
                <div className="braking-left">
                  <div class="form-input">
                    <select>
                      <option>Braking</option>
                      <option>option 1</option>
                      <option>option 2</option>
                      <option>option 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="line-graph-bottom">
                <ApexChart />
              </div>
            </div>
            <div className="pie-chart">
              <h4>Total Cost breakdown</h4>
              <div className="pie-graph-bottom GrapBox">
                {/* <PieArcLabel /> */}
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
