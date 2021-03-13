import React, { useState } from 'react';
import ImgUploadModal from '../Modal/ImgUploadModal';
import './style.scss';

const AddDetails = (props) => {
  const { details, setDetails, userImg, setUserImg } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [fileSize, setFileSize] = useState('');
  const [fileName, setFileName] = useState('');
  
  // input type="file" tag ref
  const inputRef = React.useRef(null);

  const modalProps = {
    modalIsOpen: modalIsOpen,
    setIsOpen: setIsOpen,
    userImg: userImg,
    fileSize: fileSize,
    fileName: fileName,
    setUserImg: setUserImg
  }

  /****** change input value ******/
  const handleChange = (evt) => {
    setDetails({ ...details, [evt.target.name]: evt.target.value })
  }

  /******* get baseImg from input tag ******/
  const getBaseImg = e => {
    const [file] = e.target.files;
    if (file) {
      setIsOpen(true)
      const reader = new FileReader();
      reader.onload = e => {
        setUserImg(e.target.result);
        setFileName(file.name);
        setFileSize((file.size/1024).toFixed(0));
      };
      reader.readAsDataURL(file);
    }
  }

  /***** Open image upload section ******/
  const openImageUpload = () => {
    inputRef.current.click();
    // else setIsOpen(true);
  }

  return (
    <div className="add-details-section">
      <h1 className="title">Add Details</h1>

      {/* create name for index */}
      <div className="detail-item-section">
        <h2 className="sub-title">Create a name for your index</h2>
        <p className="description">Great index names are unique, short, and easy to remember. They must be 32 characters or less.</p>
        <div className="input-section">
          <input type="text" name="name" autoComplete="off" className="input-name" value={details['name']} onChange={handleChange} placeholder="e.g Ethereum Volatility Index" />
        </div>
      </div>

      {/* create symbol for index */}
      <div className="detail-item-section">
        <h2 className="sub-title">Create a symbol for your index</h2>
        <p className="description">Symbols are a 3 to 5 character name to represent your trading pool, e.g. ETH or BTC.</p>
        <div className="input-section">
          <input type="text" name="symbol" autoComplete="off" className="input-name" value={details['symbol']} onChange={handleChange} placeholder="EVOLI" />
        </div>
      </div>

      {/* create price for index */}
      <div className="detail-item-section">
        <h2 className="sub-title">Select a starting price</h2>
        <div className="user-img-upload-section">
          <button className="fill-btn" onClick={openImageUpload}>Image upload</button>
          <input type="file" name="userIndexImg" accept="image/*" ref={inputRef} id="userIndexImg" onChange={getBaseImg} />
        </div>
        <p className="description">This will be the starting price of your index in USD once it’s been created. </p>
        <div className="input-section">
          <input type="number" name="price" autoComplete="off" className="input-name" value={details['price']} onChange={handleChange} placeholder="100" />
        </div>
      </div>
      <ImgUploadModal {...modalProps} />
    </div>
  )
}

export default AddDetails;