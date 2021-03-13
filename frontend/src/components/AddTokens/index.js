import React, { useEffect, useState } from 'react';
import lockIcon from '../../assets/img/lock-icon.svg';
import deleteIcon from '../../assets/img/delete-icon.svg';
import { coinsData } from '../../dumy';
import './style.scss';

const AddTokens = (props) => {
  const { tokenVal, setTokenVal} = props;
  const [coins, setCoins] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    setCoins(coinsData);
  }, [])

  /****** search value change ******/
  const handleChange = (evt) => {
    setSearchVal(evt.target.value);
    const _searchData = [...coinsData]
    let filterArr = []
    filterArr = _searchData.filter(data => data.name.toLowerCase().includes(evt.target.value.toLowerCase())
      || data.symbol.toLowerCase().includes(evt.target.value.toLowerCase()))
    setCoins(filterArr);
  }

  /****** add search result ******/
  const addSearchResult = (id) => {
    setSearchVal('');
    let selectedItem = coinsData.filter(data => data['id'] === id)[0];
    selectedItem['percent'] = '1';
    const _tokenVal = [...tokenVal];
    _tokenVal.push(selectedItem);
    setTokenVal(_tokenVal);
  }

  /****** remove a item from search result */
  const itemRemove = (id) => {
    const Item = tokenVal.slice().filter(x => x.id === id)[0];
    const _tokenVal = [...tokenVal];
    let index = _tokenVal.indexOf(Item);
    _tokenVal.splice(index, 1);
    setTokenVal(_tokenVal);
  }

  /****** change rang value ******/
  const handleRangChange = (evt, index) => {
    const _tokenVal = [...tokenVal];
    _tokenVal[`${index}`]['percent'] = evt.target.value;
    setTokenVal(_tokenVal);
  }

  return (
    <div className="add-tokens-section">
      <h1 className="title">Add Tokens to your set</h1>
      <p className="description">You can add or remove tokens later.</p>

      {/* search section */}
      <div className="search-section position-relative">
        <div className="w-100">
          <input type="text" placeholder="Search for tokens to add" autoComplete="off" name="search" value={searchVal} onChange={handleChange} />
        </div>
        {searchVal !== '' &&
          <div className="menu position-absolute customize-scrollbar">
            {coins.map((item, i) => (
              <div className="item d-flex align-items-center justify-content-between" key={i} onClick={() => addSearchResult(item['id'])}>
                <div className="image-name d-flex align-items-center">
                  <img src={item['image_url']} alt={item['id']} />
                  <span>{item['name']}</span>
                </div>
                <div className="symbol">{item['symbol']}</div>
              </div>
            ))}
          </div>
        }
      </div>

      {/* search result section */}
      {
        tokenVal.length > 0 ?
          <div className="search-result-section">
            <div className="search-result-head d-flex align-items-center">
              <div className="token-name">Token name</div>
              <div className="allocation">Allocation</div>
              <div className="lock-remove">Lock/ Remove</div>
            </div>
            {
              tokenVal.map((item, i) => (
                <div className="search-result-content" key={i}>
                  <div className="search-content d-flex align-items-center">
                    <div className="token-name d-flex align-items-center">
                      <img src={item['image_url']} alt={item['id']} />
                      <div className="d-flex flex-column">
                        <span className="name">{item['name']}</span>
                        <span className="symbol">{item['symbol']}</span>
                      </div>
                    </div>
                    <div className="allocation">{parseInt(item['percent'] * 100)}%</div>
                    <div className="lock-remove">
                      <img src={lockIcon} alt="lockIcon" className="lock-icon" />
                      <img src={deleteIcon} alt="lockIcon" className="delete-icon" onClick={() => itemRemove(item['id'])} />
                    </div>
                  </div>
                  <div className="search-percent">
                    <input
                      type="range"
                      min="0.01"
                      max="1"
                      step="0.01"
                      name={item['id']}
                      value={item['percent']}
                      onChange={(evt) => handleRangChange(evt, i)}
                      style={{ backgroundImage: `-webkit-gradient(linear, 0% 0%, ${parseInt(item['percent'] * 100)}% 50%, color-stop(100%, #5C53D6), color-stop(100%, #FFFFFF))` }}
                    />
                  </div>
                </div>
              ))
            }

          </div> :
          <div className="empty-result d-flex justify-content-center align-items-center w-100">
            Select tokens to add
        </div>
      }
    </div>
  )
}

export default AddTokens;