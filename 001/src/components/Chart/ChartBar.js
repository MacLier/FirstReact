import "./ChartBar.css";

const CharBar = props => {


    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill"></div>
            </div>
            <div className="chart-label">{props.label}</div>
        </div >
    )
}

export default CharBar;