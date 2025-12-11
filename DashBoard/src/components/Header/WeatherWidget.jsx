import React, { useState, useEffect } from 'react';
import { TimeText, DateText } from './style';

const WeatherWidget = () => {

    const [date, setDate] = useState(new Date());

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

    const dateTexte = date.toLocaleDateString('fr-FR', optionsDate);
    const heureTexte = date.toLocaleTimeString('fr-FR');

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