import React, { useState } from 'react';
import LogoImg from '../../assets/img/logo.png';
import Sign from '../../assets/img/sign.svg';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import SignModal from '../Modal/SignModal';
import {
  HeaderContainer,
  Logo,
  HeaderMenu,
  MenuItem,
  Button,
  EmptyDiv,
  MenuIconBlock,
  MobileImg,
  MobileMenu,
  MobileItem,
  OverLay,
  SignInBlock
} from './style';

const Header = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const linkTo = (url) => {
    setIsMobileMenu(false)
    history.push(url)
  }

  const openModal = () => {
    setIsOpen(true);
  }

  return (
    <div>
      <EmptyDiv />
      <HeaderContainer className="container">
        <MenuIconBlock onClick={() => setIsMobileMenu(true)}>
          <MenuIcon />
        </MenuIconBlock>
        <Link to="/">
          <Logo src={LogoImg} alt="logo" />
        </Link>
        <SignInBlock src={Sign} />
        <HeaderMenu>
          <Link to="/governance">
            <MenuItem>{t('GOVERNANCE')}</MenuItem>
          </Link>
          <Link to="/stake">
            <MenuItem>{t('STAKE')}</MenuItem>
          </Link>
          <Link to="/leaderboard">
            <MenuItem>{t('LEADERBOARD')}</MenuItem>
          </Link>
          <Link to="/create">
            <MenuItem>{t('CREATE_INDEX')}</MenuItem>
          </Link>
          <Button onClick={openModal} className="white-btn">{t('WALLET')}</Button>
        </HeaderMenu>
        {
        isMobileMenu &&
        <>
          <OverLay onClick={() => setIsMobileMenu(false)} />
        </>
      }
      <MobileMenu style={{ width: isMobileMenu && '75%' }}>
        <div>
          <MobileImg src={LogoImg} alt="logo" onClick={() => linkTo('/')} />
          <MobileItem onClick={() => linkTo('/governance')}>
            <span>{t('GOVERNANCE')}</span>
          </MobileItem>
          <MobileItem onClick={() => linkTo('/stake')}>
            <span>{t('STAKE')}</span>
          </MobileItem>
          <MobileItem onClick={() => linkTo('/leaderboard')}>
            <span>{t('LEADERBOARD')}</span>
          </MobileItem>
          <MobileItem onClick={() => linkTo('/create')}>
            <span>{t('CREATE_INDEX')}</span>
          </MobileItem>
        </div>
      </MobileMenu>
      </HeaderContainer>
      <SignModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

const MenuIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#1d144f" className="bi bi-list" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
    </svg>
  )
}

export default Header;