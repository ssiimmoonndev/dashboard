import React from 'react';

function Header() {
    return (
        <header>
            <h1>Mon Tableau de Bord</h1>
            <div className="weather-date">
                <div>Météo</div>
                <div>Date</div>
            </div>
        </header>
    );
}

export default Header;