import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Table,
  HeadSpan,
  Th,
  HeadIconDiv,
  HeadUpDownIcon,
  TBody,
  FirstTd,
  NameSpanTag,
  MarketCapSpanTag,
  PriceSpanTag,
  PrecentDivTag,
  BodyUpDownIcon,
  RiskDiv,
  Td,
  PercentTd,
  SymbolImgTag,
  SymbolSpanTag,
  SymbolDivTag,
  PercentSpanTag,
  OverlayDiv,
  OverlaySpanTag,
  PercentColorDiv,
  TableBlock
} from './style';
import downArrowImg from '../../assets/img/downarrow.svg';
import upArrowImg from '../../assets/img/uparrow.svg';
import { useHistory } from 'react-router-dom';

const TableSection = (props) => {
  const history = useHistory();
  const { t } = useTranslation();
  const { typeExplore, setTypeExplore, currency } = props;
  const [sortDirections, setSortDirections] = useState({
    market_cap: false,
    set_price: false,
    week_percent_change: false,
    cumulative_change: false,
    risk: false
  })

  /******* perceent color display *******/
  const PercentDispaly = (percentVal) => {
    return (
      <>
        {parseFloat(percentVal) > 0 && <BodyUpDownIcon src={upArrowImg} />}
        {parseFloat(percentVal) < 0 && <BodyUpDownIcon src={downArrowImg} />}
        <PriceSpanTag style={{ color: setTextColor(percentVal) }}>{convert(percentVal)}</PriceSpanTag>
      </>
    )
  }

  const convert = (num) => {
    if (num === "-") return '--';
    else return `${parseFloat(num).toFixed(1)}%`;
  }

  /****** set text color *******/
  const setTextColor = (num) => {
    if (num === "-") return '#dad7e2';
    if (parseFloat(num) > 0) return '#2bb160'
    else return '#df4857'
  }

  const CurrenctSetting = () => {
    if (currency === "btc_index") return "BTC";
    if (currency === "eth_index") return "ETH"
    if (currency === "usd_index") return "$"
  }

  /****** sort function *******/
  const tableSort = (key) => {
    let _typeExplore = [...typeExplore];
    _typeExplore.sort((a, b) => {
      let sortItem1 = isNaN(parseFloat(a[currency][key])) ? -100 : parseFloat(a[currency][key])
      let sortItem2 = isNaN(parseFloat(b[currency][key])) ? -101 : parseFloat(b[currency][key])
      if (sortItem1 > sortItem2) {
        return sortDirections[key] ? -1 : 1;
      }
      if (sortItem1 < sortItem2) {
        return sortDirections[key] ? 1 : -1;
      }
      return 0;
    });
    setSortDirections({ ...sortDirections, [key]: !sortDirections[key] })
    setTypeExplore(_typeExplore)
  }

  const riskSort = (key) => {
    let _typeExplore = [...typeExplore];
    _typeExplore.sort((a, b) => {
      let sortItem1 = a[key] === '' ? 0 : 1;
      let sortItem2 = b[key] === '' ? 0 : 1;
      if (sortItem1 < sortItem2) {
        return sortDirections[key] ? -1 : 1;
      }
      return 0;
    });
    setSortDirections({ ...sortDirections, [key]: !sortDirections[key] })
    setTypeExplore(_typeExplore)
  }

  return (
    <TableBlock>
      <Table>
        <thead>
          <tr>
            <Th>
              <HeadSpan>{t('NAME')}</HeadSpan>
            </Th>
            <Th>
              <HeadIconDiv onClick={() => tableSort('market_cap')}>
                <HeadSpan>{t('MARKET_CAP')}</HeadSpan>
                <HeadUpDownIcon src={downArrowImg} alt="UpDownImg" />
              </HeadIconDiv>
            </Th>
            <Th>
              <HeadIconDiv onClick={() => tableSort('set_price')}>
                <HeadSpan>{t('PRICE')}</HeadSpan>
                <HeadUpDownIcon src={downArrowImg} alt="UpDownImg" />
              </HeadIconDiv>
            </Th>
            <Th>
              <HeadIconDiv onClick={() => tableSort('week_percent_change')}>
                <HeadSpan>1{t('WEEK')}</HeadSpan>
                <HeadUpDownIcon src={downArrowImg} alt="UpDownImg" />
              </HeadIconDiv>
            </Th>
            <Th>
              <HeadIconDiv onClick={() => tableSort('cumulative_change')}>
                <HeadSpan>{t('SINCE_INCEPTION')}</HeadSpan>
                <HeadUpDownIcon src={downArrowImg} alt="UpDownImg" />
              </HeadIconDiv>
            </Th>
            <Th>
              <HeadIconDiv onClick={() => riskSort('risk')}>
                <HeadSpan>{t('RISK')}</HeadSpan>
                <HeadUpDownIcon src={downArrowImg} alt="UpDownImg" />
              </HeadIconDiv>
            </Th>
          </tr>

        </thead>
        {
          typeExplore.map((item, i) => (
            <TBody key={i} onClick={() => history.push(`/portfolio/${item['id']}`)}>
              <tr>
                <FirstTd>
                  <img src={item['image']} alt={item['id']} />
                  <NameSpanTag>{item['name']}</NameSpanTag>
                </FirstTd>
                <Td>
                  <MarketCapSpanTag><CurrenctSetting /> {item[currency]['market_cap']}</MarketCapSpanTag>
                </Td>
                <Td>
                  <PriceSpanTag><CurrenctSetting /> {item[currency]['set_price']}</PriceSpanTag>
                </Td>
                <Td>
                  <PrecentDivTag>
                    {PercentDispaly(item[currency]['week_percent_change'])}
                  </PrecentDivTag>
                </Td>
                <Td>
                  <PrecentDivTag>
                    {PercentDispaly(item[currency]['cumulative_change'])}
                  </PrecentDivTag>
                </Td>
                <Td>
                  <RiskDiv>
                    {item['risk']}
                  </RiskDiv>
                </Td>
              </tr>
              <tr>
                <FirstTd></FirstTd>
                <PercentTd colSpan="5">
                  <div className="d-flex">
                    {
                      item['components'].map((listItem, j) => (
                        j < 3 && <SymbolDivTag key={j}>
                          <SymbolImgTag src={listItem['image']} alt={listItem['id']} />
                          <SymbolSpanTag>{listItem['symbol']}</SymbolSpanTag>
                          <PercentSpanTag>{listItem['percent_of_set']}%</PercentSpanTag>
                        </SymbolDivTag>
                      ))
                    }
                    <SymbolDivTag>
                      {
                        item['components'].length > 3 && item['components'].map((listItem, j) => (
                          j > 3 &&
                          <OverlayDiv style={{ zIndex: `${100 - j}` }} key={j}>
                            <SymbolImgTag src={listItem['image']} alt={listItem['id']} />
                          </OverlayDiv>
                        ))
                      }
                      <OverlaySpanTag>{item['components'].length > 3 && `+${item['components'].length - 3} more`}</OverlaySpanTag>
                    </SymbolDivTag>
                  </div>
                  <PercentColorDiv>
                    {item['components'].length > 0 && item['components'].map((childItem, l) => (
                      <div style={{ width: `${childItem['percent_of_set']}%`, backgroundColor: `#${childItem['colors']['0']}` }} key={l}></div>
                    ))}
                  </PercentColorDiv>
                </PercentTd>
              </tr>
            </TBody>
          ))
        }

      </Table>
    </TableBlock>

  )
}

export default TableSection;