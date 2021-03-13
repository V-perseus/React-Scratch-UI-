import React from 'react';
import Modal from 'react-modal';
import './style.scss';

const UpvotesModal = (props) => {
  const { setIsOpen, modalIsOpen, userImg, fileName, fileSize, setUserImg } = props;

  /****** modal close ******/
  function closeModal() {
    setIsOpen(false);
  }

  /***** user index image reset ******/
  const imageReset = () => {
    setUserImg('');
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="img-upload-modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <div className="modal-content-section">
          <h1 className="title">User index image upload</h1>
          <div className="img-section d-flex justify-content-center">
            <img src={userImg} alt="userImg" />
          </div>
          <div className="img-name">
            <span className="title">Image Name: </span>
            <span>{fileName}</span>
          </div>
          <div className="img-size">
            <span className="title">Image size: </span>
            <span>{fileSize} kb</span>
          </div>
          <div className="reset-section d-flex align-items-center justify-content-center">
            <button className="fill-btn" onClick={imageReset}>Reset</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default UpvotesModal;