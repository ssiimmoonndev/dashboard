
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
                <p className="button">Planning</p>
                <p className="button">Crypto / Bourse</p>
                <p className="button">Résultats sportifs</p>
                <p className="button">À propos</p>
           </div>
        </div>
    )
}