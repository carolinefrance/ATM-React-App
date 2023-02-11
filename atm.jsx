const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  // An array of strings that represent the transaction options
  const choice = ['Deposit', 'Cash Back'];
  // JSX for the deposit/withdrawl form
  return (
  <label className="label huge">
  <h3>{choice[Number(!isDeposit)]}</h3>
  <div style={{ marginTop: "10px"}}>
    <input id="number-input" type="number" onChange={onChange} />
    <input type="submit" disabled={!isValid} value="Submit" id="submit-input"/>
  </div>
  </label>
  );
  };

  const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState('');
  const [validTransaction, setValidTransaction] = React.useState(false);

  const handleChange = (event) => {
  const depositAmount = Number(event.target.value);
  if (depositAmount <= 0) {
  return setValidTransaction(false);
  }
// SCSS
  if (atmMode === 'Cash Back' && depositAmount > totalState) {
    setValidTransaction(false);
  } else {
    setValidTransaction(true);
  }
  setDeposit(depositAmount);
  };
// end SCSS
  const handleSubmit = (event) => {
  const newTotal = isDeposit ? totalState + deposit : totalState - deposit;
  setTotalState(newTotal);
  setValidTransaction(false);
  event.preventDefault();
  };

  const handleModeSelectDeposit = () => {
  setAtmMode("Deposit");
  setValidTransaction(false);
  setIsDeposit(true);
  };

  const handleModeSelectCashBack = () => {
  setAtmMode("Cash Back");
  setValidTransaction(false);
  setIsDeposit(false);
  };

  const status = `Account Balance $ ${totalState}`;

  return (
  <div className="white">
  <form onSubmit={handleSubmit}>
  <h2 id="total">{status}</h2>
  <label>Please select your transaction.</label>
  <div style={{ margin: "20px 0px 20px 0px" }}>
    <img src="deposit.png" onClick={handleModeSelectDeposit} alt="deposit"/>
    <img src="spacer.png" width="20px" />
    <img src="withdraw.png" onClick={handleModeSelectCashBack} alt="withdraw"/>
  </div>
  {atmMode && (
    <ATMDeposit
         onChange={handleChange}
         isDeposit={isDeposit}
         isValid={validTransaction}
       />
  )}
  </form>
  </div>
  );
  };

  ReactDOM.render(<Account />, document.getElementById('root'));