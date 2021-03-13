import React from 'react';
import './style.scss';

const AmountStake = (props) => {
  const { amount, setAmount, inputVal, setInputVal, setIsAmountStake } = props;

  /****** inptut value change ******/
  const handleChange = (evt) => {
    let name = evt.target.name;
    if (name === "range") {
      setAmount(evt.target.value);
    } else {
      setInputVal(evt.target.value);
      console.log(evt.target.value)
      if (evt.target.value === '' || evt.target.value === '1') { setAmount('0.01'); return; }
      const rangVal = parseFloat(evt.target.value / 365).toFixed(2);
      setAmount(rangVal);
    }
  }

  return (
    <div className="amount-stake-section">
      <div className="container">
        <div className="content shadow-round-block">
          <h3 className="title">Enter amount for stake</h3>
          <p className="description mb-0">This will be the starting price of your Set in USD once it’s been created. </p>
          <div className="d-flex input-number-section">
            <div className="w-100">
              <input
                type="number"
                className="input-num"
                value={inputVal}
                onChange={handleChange}
                name="input"
              />
              <input
                type="range"
                min="0.01"
                max="1"
                step="0.01"
                name="range"
                className="range"
                value={amount}
                onChange={handleChange}
                style={{ backgroundImage: `-webkit-gradient(linear, 0% 0%, ${amount * 100}% 50%, color-stop(100%, #5C53D6), color-stop(100%, #F6F6FA))` }}
              />
              <div className="w-100 position-relative percent-unit-section">
                <span style={{ left: '0%' }}>0</span>
                <span style={{ left: '12%' }}>1<span className="month">&nbsp;month</span></span>
                <span style={{ left: '25%' }}>3<span className="month">&nbsp;months</span></span>
                <span style={{ left: '50%' }}>6<span className="month">&nbsp;months</span></span>
                <span style={{ left: '92%' }}>12<span className="month">&nbsp;months</span></span>
              </div>
            </div>
            <button className="fill-btn" onClick={() => setIsAmountStake(false)}>Stake</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmountStake;