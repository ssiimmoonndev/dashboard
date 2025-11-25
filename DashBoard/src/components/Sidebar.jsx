import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChartBar, faFutbol, faFaceSurprise } from '@fortawesome/free-regular-svg-icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <button className="button-sidebar">
                <FontAwesomeIcon icon={faCalendar} /> Planning
            </button>
            <button className="button-sidebar">
                <FontAwesomeIcon icon={faChartBar} />Crypto / Bourse</button>
            <button className="button-sidebar">
                <FontAwesomeIcon icon={faFutbol} />Résultats sportifs</button>
            <button className="button-sidebar">
                <FontAwesomeIcon icon={faFaceSurprise} />À propos</button>
        </div>
    );
}

export default Sidebar;