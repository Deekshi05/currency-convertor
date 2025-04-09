import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import "./input.css";

function Input({
  label,
  amount,
  onAmountchange,
  onCurrencychange,
  currencyoptions = [],
  selectcurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className="input-container">
      <div className="input-group">
        <label>
          <FaMoneyBillWave className="icon" /> {label}
        </label>
        <input
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountchange && onAmountchange(Number(e.target.value))
          }
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label>
          <MdAttachMoney className="icon" /> Currency Type
        </label>
        <select
          value={selectcurrency}
          onChange={(e) =>
            onCurrencychange && onCurrencychange(e.target.value)
          }
          disabled={currencyDisable}
          className="currency-select"
        >
          {currencyoptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
