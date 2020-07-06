import React, { Component } from "react";
import "./District.scss";
class District extends Component {
  state = {};
  render() {
    const { item } = this.props;

    return (
      <div className={`card-body ${item.zone === "Green" ? "background-green" : item.zone==="Orange" ? "background-orange" : "background-red"
    }`}>
        <h3 className="card-body-dist">
          {item.district}
        </h3>
        <hr/>
        <div className="card-body-detail">
          <div className="sub-detail">
            <span className="title">Zone:</span>
            <b className="val" >
              {item.zone}
            </b>
          </div>
          <div className="sub-detail">
            <span className="title">Code:</span>
            <b className="val">{item.districtcode}</b>
          </div>
          <div className="sub-detail">
            <span className="title">State:</span>
            <b className="val">{item.state}</b>
          </div>
          <div className="sub-detail">
            <span className="title">State Code:</span>
            <b className="val">{item.statecode}</b>
          </div>
          <div className="sub-detail">
            <span className="title">Last Updated:</span>
            <b className="val">{item.lastupdated}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default District;
