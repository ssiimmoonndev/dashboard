import Widget from "../components/Widget"
export default function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Mon DashBoard</h1>
            <Widget title="Météo" />
            <Widget title="Horloge" />
            <Widget title="Citations" />
        </div>
    )
}