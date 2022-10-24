import {
  ChartComponent,
  DataLabel,
  LineSeries,
  Legend,
  Tooltip,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  DateTime,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../context/ContextProvider";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={
        currentMode === "Light"
          ? { background: "white" }
          : { background: "gray" }
      }
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default LineChart;
