import React from 'react';
import './style.scss';

const LiquidityTime = () => {
  return (
    <div className="liquidity-time-section">
      <div className="container">
        <div className="content shadow-round-block">
          <div className="w-100 percent-bar-section">
            <div className="percent-bar h-100" style={{ width: '90%' }}></div>
          </div>
          <div className="row">
            <div className="col-md-6 time-section">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center flex-column mt-1">
                  <div className="date active gradient-text">100</div>
                  <div className="date-unit">MAI</div>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <div className="date">24</div>
                  <div className="date-unit">DAYS</div>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <div className="date">18</div>
                  <div className="date-unit">HOURS</div>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <div className="date">51</div>
                  <div className="date-unit">MINUTES</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end btn-section">
              <div className="d-flex align-items-end justify-content-between flex-wrap">
                <div>
                  <button className="fill-btn refund-btn">Refund</button>
                </div>
                <div>
                  <p className="text-center">available in 10 days</p>
                  <button className="fill-btn">Claim</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiquidityTime;