import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="button-sidebar">
        <i className="fa-regular fa-calendar"></i>
        Planning
      </button>
      <button className="button-sidebar">
        <i class="fa-regular fa-chart-line"></i>
        Crypto / Bourse
      </button>
      <button className="button-sidebar">
        <i class="fa-regular fa-input-numeric"></i>
        Résultats sportifs
      </button>
      <button className="button-sidebar">
        <i class="fa-regular fa-circle-info"></i>
        À propos
      </button>
    </div>
  );
}

export default Sidebar;