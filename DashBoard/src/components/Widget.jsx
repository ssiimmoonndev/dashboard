export default function Widget(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    )
}