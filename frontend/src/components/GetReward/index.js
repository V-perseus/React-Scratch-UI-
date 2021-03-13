import React from 'react';
import './style.scss';

const GetReward = () => {
  return (
    <div className="get-reward-section">
      <div className="container">
        <div className="content shadow-round-block">
          <div className="w-100 percent-bar-section">
            <div className="percent-bar h-100" style={{ width: '90%' }}></div>
          </div>
          <h3 className="title">Get your reward in</h3>
          <div className="row">
            <div className="col-md-6 time-section">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center flex-column">
                  <div className="date">6</div>
                  <div className="date-unit">MONTHS</div>
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
            <div className="col-md-6 d-flex align-items-center  btn-section">
              <div>
                <p className="text-center">150 Metaindex</p>
                <button className="fill-btn">Claim</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetReward;