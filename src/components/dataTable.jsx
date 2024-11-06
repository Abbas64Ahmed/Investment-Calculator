import { formatter } from "../util/investment";

export default function DataTable({ dataArr }) {
  if (dataArr.length <= 0) {
    return <p className="center">Please enter a duration greater than zero.</p>;
  }

  const initialInvestment = dataArr[0].valueEndOfYear - dataArr[0].interest - dataArr[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year </th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {dataArr.map((yearData) => {
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
