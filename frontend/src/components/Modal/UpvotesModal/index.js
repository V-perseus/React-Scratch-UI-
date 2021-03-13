import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './style.scss';
import closeBtnImg from '../../../assets/img/closebtn.svg'
import checkGreenBgImg from '../../../assets/img/check-green-bg.svg';
import arrowLeftImg from '../../../assets/img/arrow-left.svg';
import { currencyUnits } from '../../../dumy';

const UpvotesModal = (props) => {
  const { setIsOpen, modalIsOpen } = props;
  const [currencyData, setCurrencyData] = useState([]);
  const [currencySet, setCurrencySet] = useState('ETH');
  const [isDropdown, setIsDropdown] = useState(false);
  const [isConfirmStep, setIsConfirmStep] = useState(false);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    setCurrencyData(currencyUnits);
  }, [])

  useEffect(() => {
    document.addEventListener("click", closeSelect);
    return () => document.removeEventListener("click", closeSelect);
  }, [isDropdown])

  const closeSelect = (evt) => {
    if (evt.target.className === "open-dropdown") return;
    setIsDropdown(false);
  }

  /****** chnage input value ******/
  const handleChange = (evt) => {
    if (isNaN(evt.target.value)) return;
    setAmount(evt.target.value);
  }

  /****** enable confirm step *******/
  const goConfirmStep = () => {
    setIsConfirmStep(true);
    setAmount('');
    // todo payment submit
  }

  /****** payment submit *******/
  const paymentSubmit = () => {
    setIsOpen(false);
  }

  /****** modal close ******/
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="up-votes-modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <img src={closeBtnImg} alt="closeBtn" onClick={closeModal} />
        {
          !isConfirmStep ?
            // buy first step
            <div className="first-step">
              <div className="content">
                <div className="img-section">
                  <img src="https://set-core.s3.amazonaws.com/img/social_trader_set_icons/defi_pulse_index_set.svg" alt="set icon" />
                </div>
                <div>
                  <div>
                    <div className="position-relative text-center">
                      <div className="mx-auto input-section">
                        <span>Buy</span>
                        <input type="text" placeholder="0" name="amount" value={amount} onChange={handleChange} />
                        <span>DPI</span>
                      </div>
                    </div>
                    <div className="position-relative text-center">
                      <div className="mx-auto currency-section">
                        <span>pay</span>
                        <input type="text" placeholder="0" />
                        <span>{currencySet}</span>
                        <div className="currency-change-btn">
                          <img alt="Downward chevron" className="open-dropdown" src="https://www.tokensets.com/static/media/down-chevron-gray.96e9584f.svg" onClick={() => setIsDropdown(true)} />
                          {
                            isDropdown &&
                            <div className="dropdown">
                              {
                                currencyData.map((item, i) => (
                                  <div className="item d-flex align-items-center" onClick={() => setCurrencySet(item['unit'])} key={i}>
                                    <img alt={item['unit']} className="currency-img" src={item['image']} />
                                    <span>{item['unit']}</span>
                                    {currencySet === item['unit'] && <img src={checkGreenBgImg} className="check-icon" alt="checkIcon" />}
                                  </div>
                                ))
                              }
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-half-quart">
                    <div>Max</div>
                    <div>1/2</div>
                    <div>1/4</div>
                  </div>
                </div>
                <div className="balance-section">
                  <div className="row">
                    <div className="col-md-5 balance-part">
                      <div className="d-flex align-items-center h-100">
                        <span>Balance</span>
                      </div>
                    </div>
                    <div className="col-md-7 currency-part">
                      <div className="text-right">
                        <span className="amount">0</span>
                        <span className="currency"> {currencySet}</span>
                        <p>$0.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className={amount === '' ? 'preview-btn custom-btn disable' : 'preview-btn custom-btn'} onClick={goConfirmStep}>Preview Buy</button>
              </div>
            </div> :

            // confirm Buy section
            <div className="confirm-step">
              <div className="back-icon d-flex align-items-center justify-content-center" onClick={() => setIsConfirmStep(false)}>
                <img src={arrowLeftImg} alt="arrowLeft" />
              </div>
              <h2 className="title text-center">Confirm Buy</h2>
              <div>
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="https://set-core.s3.amazonaws.com/img/social_trader_set_icons/defi_pulse_index_set.svg" alt="set icon" />
                          <div className="d-flex flex-column">
                            <span>{currencySet}</span>
                            <span className="detail">@ $1818.52 per {currencySet}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        0.23456 {currencySet}
                      </td>
                      <td>
                        $ 234.44
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="https://set-core.s3.amazonaws.com/img/social_trader_set_icons/defi_pulse_index_set.svg" alt="set icon" />
                          <div className="d-flex flex-column">
                            <span>{currencySet}</span>
                            <span className="detail">@ $1818.52 per {currencySet}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        0.23456 {currencySet}
                      </td>
                      <td>
                        $ 234.44
                      </td>
                    </tr>
                    <tr>
                      <td>Premium</td>
                      <td></td>
                      <td>0.01%</td>
                    </tr>
                    <tr>
                      <td>Network fee</td>
                      <td>0.02104 {currencySet}</td>
                      <td>$ 38.23</td>
                    </tr>
                    <tr>
                      <td>Total Cost</td>
                      <td>0.02104 {currencySet}</td>
                      <td>$ 460.67</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="preview-btn custom-btn" onClick={paymentSubmit}>Submit Buy</button>
            </div>
        }

      </Modal>
    </div>
  )
}

export default UpvotesModal;