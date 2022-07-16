import { useEffect } from "react";
import { init, dispose } from "klinecharts";
import { generatedDataList } from "../../utils/DataList";

export default function Chart() {
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

    return <div id="simple_chart" style={{ height: 600 }} />;
}
