import React, { useContext } from 'react';
import { SubTitle } from '../Shared/CommonStyle'
import { useTranslation } from 'react-i18next';
import {
  Content,
  FilterSection,
  AssetFilter,
  Filterby,
  AssetSection,
  CurrencyUnit,
  CurrencyChange,
  CreateIndex
} from './style';
import TableSection from '../TableSection';
import { Currency } from '../../global/Context/AppContext';

const ExploreAllIndex = (props) => {
  const { typeExplore, setTypeExplore, isFlag } = props;
  const { t } = useTranslation();
  const [currency, setCurrency] = useContext(Currency);

  /****** Currency change function ******/
  const currencyChangeFunc = (index) => {
    setCurrency(index);
  }

  return (
    <Content className="container">
      <SubTitle>{t('EXPLORE_ALL_INDEXES')}</SubTitle>
      <FilterSection>
        <AssetFilter>
          <Filterby>Filter By</Filterby>
          <AssetSection>Asset</AssetSection>
          { isFlag && <AssetSection>Interest</AssetSection> }
        </AssetFilter>
        <CurrencyChange>
          { isFlag && <CreateIndex>Create A Portfolio</CreateIndex> }
          <CurrencyUnit className={currency === "btc_index" ? "active ml-0" : 'ml-0'} onClick={() => currencyChangeFunc('btc_index')}>BTC - SET</CurrencyUnit>
          <CurrencyUnit className={currency === "eth_index" ? "active" : ''} onClick={() => currencyChangeFunc('eth_index')}>ETH - SET</CurrencyUnit>
          <CurrencyUnit className={currency === "usd_index" ? "active" : ''} onClick={() => currencyChangeFunc('usd_index')}>USD - SET</CurrencyUnit>
        </CurrencyChange>
      </FilterSection>
      <TableSection typeExplore={typeExplore} setTypeExplore={setTypeExplore} currency={currency} />
    </Content>
  )
}

export default ExploreAllIndex;