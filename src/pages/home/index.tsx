//components
import JobTitle from "./components/JobTitle"; //職稱
import Foreword from "./components/Foreword"; //前言
import SimpleRadarChart from "./components/SimpleRadarChart"; //雷達圖

const Home = () => {
  return (
    <div>
      <JobTitle />
      <div className="w-full block lg:flex lg:flex-row-reverse">
        <Foreword />
        <SimpleRadarChart />
      </div>
    </div>
  );
};
export default Home;
