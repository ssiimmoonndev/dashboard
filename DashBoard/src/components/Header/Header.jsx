import React from 'react';
import WeatherWidget from './WeatherWidget';
import { useTranslation } from 'react-i18next';
import { HeaderStyle, Title, RightContainer, WeatherDate } from './style';
import LanguageSelector from './Select';

const Header = () => {
    const { t } = useTranslation();
    return (
        <HeaderStyle>
            <Title>{t("title")}</Title>
            <RightContainer>
                <WeatherDate>
                    <WeatherWidget />
                </WeatherDate>
                <LanguageSelector />
            </RightContainer>
        </HeaderStyle>
    );
}

export default Header;