import "./Chart.css";

import CharBar from "./ChartBar";

const Chart = props => {

    return (
        <div className="chart">
            {props.dataPoints.map(datapoint => {
                <CharBar />
            })}
        </div>
    )

}

export default Chart;