export default function Calculation({ dataObj, changInputValues }) {
  let { initialInvestment, annualInvestment, expectedReturn, duration } = dataObj;

  function changeDataFun(event) {
    let theKey = event.target.id;
    let theValue = Number(event.target.value);

    console.log(theValue);

    changInputValues(theKey, theValue);
  }
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input type="number" id="initialInvestment" defaultValue={initialInvestment} onChange={changeDataFun} />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input type="number" id="annualInvestment" defaultValue={annualInvestment} onChange={changeDataFun} />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input type="number" id="expectedReturn" defaultValue={expectedReturn} onChange={changeDataFun} />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" defaultValue={duration} onChange={changeDataFun} />
        </p>
      </div>
    </div>
  );
}
