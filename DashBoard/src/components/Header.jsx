import React from 'react';
// import WeatherWidget from './WeatherWidget';
import { useTranslation } from 'react-i18next';
import Select from './Select';
import { HeaderStyle, SelectLanguage, Title, WeatherDate } from '../style.js/style-header';

function Header() {
    const { t } = useTranslation();
    return (
        <HeaderStyle>
            <Title>{t("title")}</Title>
            <WeatherDate>
                <div>{t("weather")}</div>
                <div>{t("date")}</div>
                {/* <WeatherWidget /> */}
            </WeatherDate>
            <Select />
        </HeaderStyle>
    );
}

export default Header;