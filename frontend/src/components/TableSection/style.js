import styled from 'styled-components';
import { Span } from '../Shared/CommonStyle';

export const Table = styled.table`
  background: #FFFFFF;
  width: 100%;
  border-radius: 50px;
  margin-top: 25px;
`;

export const TBody = styled.tbody`
  border-top: 1px solid #E0D8F4;
  transition: 0.2s !important;
  cursor: pointer !important;
  &: hover {
    transform: scale(1.01);
  }
  @media (max-width: 768px) {
    &: hover {
      transform: scale(1);
    }
  }
`;

export const Th = styled.th`
  padding: 25px 30px;
`;

export const HeadSpan = styled(Span)`
  opacity: 0.7;
`;

export const HeadIconDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const HeadUpDownIcon = styled.img`
  width: 11px;
  height: 7px;
  margin-left: 5px;
`;

export const FirstTd = styled.td`
  display: flex;
  align-items: center;
  min-height: 65px;
  padding: 25px 30px;
  &>img {
    width: 40px;
    height: 40px;
  }
`;

export const NameSpanTag = styled(Span)`
  font-weight: bold;
  margin-left: 19px;
`;

export const MarketCapSpanTag = styled(Span)`
  font-size: 14px;
`;

export const PriceSpanTag = styled(Span)`
  font-weight: bold;
  font-size: 14px;
`;

export const PrecentDivTag = styled.div`
  display: flex;
  align-items: center;
`;

export const BodyUpDownIcon = styled.img`
  width: 11.5px;
  height: 6px;
  margin-right: 7px;
`;

export const Td = styled.td`
  padding: 25px 30px;
`;

export const PercentTd = styled.td`
  padding: 0px 20px 14px 30px;
`;

export const SymbolDivTag = styled.div`
  display: flex;
  margin-left: 15px;
`;

export const SymbolSpanTag = styled(Span)`
  font-weight: bold;
  font-size: 11px;
  margin-left: 5px;
`;

export const SymbolImgTag = styled.img`
  width: 18px;
  height: 18px;
`;

export const PercentSpanTag = styled(Span)`
  font-size: 11px;
  margin-left: 5px;
`;

export const OverlayDiv = styled.div`
  display: flex;
  margin-right: -10px;
`;

export const OverlaySpanTag = styled(Span)`
  font-weight: bold;
  font-size: 11px;
  margin-left: 15px;
`;

export const PercentColorDiv = styled.div`
  display: flex;
  width: 100%;
  height: 6px;
  background-color: #F4F4FA;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

export const TableBlock = styled.div`
  box-shadow: 0px 15px 29px rgba(217, 217, 236, 0.519477);
  border-radius: 50px;
  @media (max-width: 768px) {
    overflow: auto;
  }
`;

export const RiskDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 25pxf;
  background: #F6F6FA;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
`;