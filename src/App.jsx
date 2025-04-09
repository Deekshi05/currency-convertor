import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import usecurrencyinfo from './hooks/usecurrencyinfo';
import { BiTransferAlt } from 'react-icons/bi';
import { RiExchangeDollarLine } from 'react-icons/ri';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = usecurrencyinfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="container">
      <h3 className="heading"> Currency Converter</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="input-group">
          <div className="input-box">
            <Input
              label="From"
              amount={amount}
              currencyoptions={options}
              onCurrencychange={setFrom}
              onAmountchange={setAmount}
              selectcurrency={from}
            />
          </div>
          <div className="input-box">
            <Input
              label="To"
              amount={convertedAmount}
              currencyoptions={options}
              onCurrencychange={setTo}
              onAmountchange={setAmount}
              selectcurrency={to}
              amountDisable={true}
            />
          </div>
        </div>
        <div className="button-group">
          <button type="button" className="swap" onClick={swap}>
            <BiTransferAlt className="icon" /> Swap
          </button>
          <button type="submit" className="convert">
            <RiExchangeDollarLine className="icon" /> Convert
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
