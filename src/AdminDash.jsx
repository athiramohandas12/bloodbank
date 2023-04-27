import React from "react";
import "./App.css";

function AdminDash() {
  return (
    <div className="admin-dash1">
      <div className="header-10">
        <p>Welcome Admin!!!</p>
        <div className="close-button-container">
          <button className="close-button">close</button>
        </div>
      </div>
      <div className="side-menu">
        <ul>
          <li className="dashboard">Dashboard</li>
          <li className="blood-request">Blood Request</li>
          <li className="donation-request">Donation Request</li>
          <li className="donars">Donars</li>
          <li className="receipient">Receipient</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminDash;
