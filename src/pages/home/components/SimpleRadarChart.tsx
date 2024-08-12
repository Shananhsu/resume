//rechats
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

//圖表資料
import { raderChartData } from "../raderChartData.ts";

const SimpleRadarChart = () => {
  return (
    <ResponsiveContainer
      width="95%"
      height={400}
      className="mx-auto w-full lg:w-1/2"
    >
      <RadarChart data={raderChartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SimpleRadarChart;
