import "./Chart.css";

import CharBar from "./ChartBar";

const Chart = props => {

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
                return <CharBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label} />
            })}
        </div>
    )

}

export default Chart;