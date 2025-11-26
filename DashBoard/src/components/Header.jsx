import React from 'react';
import WeatherWidget from './WeatherWidget';

function Header() {
    return (
        <header>
            <h1>Mon Tableau de Bord</h1>
            <div className="weather-date">
                <div>Météo</div>
                <WeatherWidget />
            </div>
        </header>
    );
}

export default Header;