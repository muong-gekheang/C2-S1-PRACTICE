import Header from "./components/header";
import Scores from "./components/Scores";
import StatisticComponent from "./components/StatisticComponent"
import { HTML_RESULTS } from "./data";
function App() {
  return (
    <>
      <Header batchName="Student result for PNC batch 2024"/>
      <Scores courseName="HTML" courseResult={HTML_RESULTS} />
      
    </>
  );
}

export default App;
