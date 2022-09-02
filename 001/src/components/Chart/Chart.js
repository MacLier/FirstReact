import "./Chart.css";

import CharBar from "./ChartBar";

const Chart = props => {

    return (
        <div className="chart">
            {props.dataPoints.map(datapoint => {
                return <CharBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={null}
                    label={datapoint.label} />
            })}
        </div>
    )

}

export default Chart;