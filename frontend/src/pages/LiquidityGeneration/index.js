import React from 'react';
import PageHeader from '../../components/PageHeader';
import StakeRewardAmount from '../../components/StakeRewardAmount';
import LiquidityTime from '../../components/LiquidityTime';

const LiquidityGeneration = () => {
  return (
    <>
      <PageHeader title="Liquidity generation" />
      <LiquidityTime />
      <StakeRewardAmount />
    </>
  )
}

export default LiquidityGeneration;