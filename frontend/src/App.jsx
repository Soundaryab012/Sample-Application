import { useState } from "react";
import "./App.css";

function App() {
  const [currentBalance, setCurrentBalance] = useState(10000);
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    const value = parseInt(amount);

    if (value > 0) {
      setCurrentBalance((prev) => prev + value);
      setAmount("");
    }
  };

  const handleWithdraw = () => {
    const value = parseInt(amount);

    if (value > currentBalance) {
      alert("Insufficient Balance!");
      return;
    }

    if (value > 0) {
      setCurrentBalance((prev) => prev - value);
      setAmount("");
    }
  };

  return (
    <div className="dashboard">
      <div className="bank-card">
        <h1>🏦 Smart ATM Dashboard</h1>

        <div className="balance-card">
          <span>Current Balance</span>
          <h2>₹ {currentBalance.toLocaleString()}</h2>
        </div>

        <div className="transaction-panel">
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="actions">
            <button className="deposit-btn" onClick={handleDeposit}>
              Deposit
            </button>

            <button className="withdraw-btn" onClick={handleWithdraw}>
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;