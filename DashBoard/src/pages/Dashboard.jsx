
export default function Dashboard() {
    return (
        <div className="layout">
           <header>
                <h1>Mon Tabelau de Bord</h1>
                <div className="weather-date">
                    <p>Meteo</p>
                    <p>Date</p>
                </div>
           </header>
           <div className="sidebar">
                <button className="button-sidebar">Planning</button>
                <button className="button-sidebar">Crypto / Bourse</button>
                <button className="button-sidebar">Résultats sportifs</button>
                <button className="button-sidebar">À propos</button>
           </div>
        </div>
    )
}