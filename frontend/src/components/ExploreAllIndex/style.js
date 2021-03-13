import styled from 'styled-components';
import { BetweenDiv, Span } from '../Shared/CommonStyle';

export const Content = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const FilterSection = styled(BetweenDiv)`
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AssetFilter = styled.div`
  display: flex;
  align-items: center;
`;

export const Filterby = styled(Span)`
  opacity: 0.5;
`;

export const AssetSection = styled(Span)`
  font-weight: bold;
  cursor: pointer;
  margin-left: 27px;
`;

export const CurrencyChange = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const CurrencyUnit = styled(Span)`
  margin-left: 20px;
  transition: 0.2s;
  height: 20px;
  cursor: pointer;
  position: relative;
  &:before {
    position: absolute;
    bottom: -1px !important;
    height: 2px;
    content: '';
    background-color: #4F4CD1 !important;
    width: 0px;
    left: 0 !important;
    right: 0 !important;
    transition: 0.2s;
  }
  &.active {
    font-weight: bold;
    &:before {
      width: 100%;
    }
  }
`;

export const CreateIndex = styled.div`
  font-weight: bold;
  font-size: 16px;
  background: linear-gradient(85.93deg,#4F4CD1 -1.39%,#B989F8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 37px;
  @media (max-width: 768px) {
    display: none;
  }
`;