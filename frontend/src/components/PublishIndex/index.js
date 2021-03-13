import React from 'react';
import './style.scss';
import { imageUpload } from '../../rest/api';

const PublishIndex = (props) => {
  const { tokenVal, details, setCurrentStep, userImg } = props;

  /****** Login ******/
  const logIn = () => {
    // to do here for login
    imageUpload(userImg)
      .then(data => { console.log(data) })
      .catch(error => { console.log(JSON.stringify(error)) });
  }

  return (
    <div className="publish-index-section">
      <div className="token-info-section">
        <div className="row">
          <div className="col-md-5 detail-section">
            <p className="name">{details['name']}</p>
            <p className="symbol">{details['symbol']}</p>
            <p className="price">${details['price']}</p>
            <p className="edit-set" onClick={() => setCurrentStep(1)}>Edit set</p>
          </div>
          <div className="col-md-7 token-section">
            {
              tokenVal.map((item, i) => (
                <div className="item d-flex" key={i}>
                  <img src={item['image_url']} alt={item['id']} />
                  <div className="percent">
                    <div style={{ width: `${parseInt(item['percent'] * 100)}%` }} className="percent-bar"></div>
                  </div>
                  <span>{parseInt(item['percent'] * 100)}%</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <h1 className="title">Publish your index</h1>
      <p className="highlight-description">To publish you index, you’ll need to pay a small amount of ETH to cover the Smart contract creation code.</p>
      <p className="description">We do not charge fees to create index, these costs are Etherium Network Fees.</p>
      <div className="d-flex align-items-center justify-content-between total-price-section">
        <div className="price-description">
          <p>Price to Publish index</p>
          <p>via Ether Gas Station</p>
        </div>
        <p className="price">$456.87</p>
      </div>
      <div className="login-btn-section">
        <button className="w-100 fill-btn" onClick={logIn}>Log in</button>
      </div>
    </div>
  )
}

export default PublishIndex;