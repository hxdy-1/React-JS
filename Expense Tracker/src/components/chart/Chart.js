import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataForTM = props.dataPoints.map((dataPoint) => dataPoint.value);
    let totalMaximum = Math.max(...dataForTM);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={totalMaximum}
                />
            ))}
        </div>
    );
};

export default Chart;
