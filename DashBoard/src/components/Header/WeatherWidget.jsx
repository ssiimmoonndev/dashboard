import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TimeText, DateText } from './style';

const WeatherWidget = () => {

    const { i18n } = useTranslation();
    const [date, setDate] = useState(new Date());
    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        const time = setInterval(() => {
            setDate(new Date());
        }, 1000); 

        return () => {
            clearInterval(time);
        }
    }, []);

    const optionsDate = { 
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const dateTexte = date.toLocaleDateString(i18n.language, optionsDate);
    const heureTexte = date.toLocaleTimeString(i18n.language);

    return (
        <>
            <TimeText>
                {heureTexte}
            </TimeText>
            <DateText>
                {dateTexte}
            </DateText>
        </>
    );
}

export default WeatherWidget;