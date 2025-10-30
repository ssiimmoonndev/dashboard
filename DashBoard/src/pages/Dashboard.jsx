import Widget from "../components/Widget"
export default function Dashboard() {
    return (
        <div>
            <h1>Mon DashBoard</h1>
            <div className="widget-grid">
            <Widget title="Météo" />
            <Widget title="Horloge" />
            <Widget title="Bourse" />
            <Widget title="Crypto" />
            <Widget title="Citations" />
            </div>
        </div>
    )
}