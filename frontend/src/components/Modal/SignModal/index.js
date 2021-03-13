import React from 'react';
import Modal from 'react-modal';
import metamasxImg from '../../../assets/img/metamasx.png';
import colnbaseImg from '../../../assets/img/Colnbase-Wallet.png';
import ledgerImg from '../../../assets/img/Ledger.png';
import walletConnectImg from '../../../assets/img/WalletConnect.png';
import './style.scss';

const UpvotesModal = (props) => {
  const { setIsOpen, modalIsOpen } = props;

  /****** modal close ******/
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="sign-in-modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <h1 className="title">Sign in</h1>
        <div className="sign-in-list-section row">
          <div className="col-md-6 sign-in-list">
            <div className="d-flex align-items-center w-100">
              <img src={metamasxImg}  alt="metamasxImg" />
              <span>Metamasx</span>
            </div>
          </div>
          <div className="col-md-6 sign-in-list">
            <div className="d-flex align-items-center w-100">
              <img src={colnbaseImg}  alt="colnbaseImg" />
              <span>Colnbase Wallet</span>
            </div>
          </div>
          <div className="col-md-6 sign-in-list">
            <div className="d-flex align-items-center w-100">
              <img src={ledgerImg}  alt="ledgerImg" />
              <span>Ledger</span>
            </div>
          </div>
          <div className="col-md-6 sign-in-list">
            <div className="d-flex align-items-center w-100">
              <img src={walletConnectImg}  alt="walletConnectImg" />
              <span>WalletConnect</span>
            </div>
          </div>
        </div>
        <div className="divider-section"></div>
        <p className="bottom-description">
        By signing up with Metaindex, I accept the <span>terms and conditions</span> and <span>privacy policy</span>
        </p>
      </Modal>
    </div>
  )
}

export default UpvotesModal;