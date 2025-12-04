import React from 'react';
// import WeatherWidget from './WeatherWidget';
import { useTranslation } from 'react-i18next';
import Select from './Select';

function Header() {
    const { t } = useTranslation();
    return (
        <header>
            <h1>{t("title")}</h1>
            <div className="weather-date">
                <div>{t("weather")}</div>
                <div>{t("date")}</div>
                {/* <WeatherWidget /> */}
            </div>
            <Select />
        </header>
    );
}

export default Header;