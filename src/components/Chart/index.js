import { useEffect } from "react";
import { init, dispose } from "klinecharts";
import { generatedDataList } from "../../utils/DataList";
import styles from "./Chart.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Chart() {
    useEffect(() => {
        // Init chart
        const chart = init("simple_chart");
        // Create main technical indicator MA
        chart.createTechnicalIndicator("MA", false, { id: "candle_pane" });
        // Create sub technical indicator VOL
        chart.createTechnicalIndicator("VOL");
        // Fill data
        chart.applyNewData(generatedDataList);
        
        return () => {
            dispose("simple_chart");
        };
    }, []);

    return <div id="simple_chart" className={cx("chart")} />;
}

export default Chart;
