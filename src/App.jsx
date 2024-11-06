import Header from "./components/header";
import Calculation from "./components/calculation";
import DataTable from "./components/dataTable";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

const INITIAL_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 100,
};

function App() {
  let [dataObj, setDateObj] = useState({ ...INITIAL_DATA });
  // console.log(dataObj);

  function handleDataObj(key, newValue) {
    // console.log(key);
    // console.log(newValue);
    setDateObj((prevObj) => {
      // console.log(prevObj);
      return {
        ...prevObj,
        [key]: newValue,
      };
    });
  }

  let calculationResult = calculateInvestmentResults(dataObj);
  console.log(calculationResult);
  return (
    <>
      <Header />
      <Calculation dataObj={dataObj} changInputValues={handleDataObj} />
      <DataTable dataArr={calculationResult} />
    </>
  );
}

export default App;
