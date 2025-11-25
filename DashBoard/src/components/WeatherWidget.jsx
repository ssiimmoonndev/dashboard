import React, { useState, useEffect } from 'react';

// function WeatherWidget() {

//         let date = new Date();
//         let dateLocale = date.toLocaleString('fr-FR' ,{
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//             hour: 'numeric',
//             minute: 'numeric',
//             second: 'numeric'});

//     return (
//         <div>{dateLocale}</div>
//     )
// }

function WeatherWidget() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>{date.toLocaleString('fr-FR')}</div>
    </div>
  );
}

export default WeatherWidget;