import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader';
import StakeRewardAmount from '../../components/StakeRewardAmount';
import GetReward from '../../components/GetReward';
import AmountStake from '../../components/AmountStake';
import './style.scss';

const Stake = () => {
  const [amount, setAmount] = useState('0.3')
  const [inputVal, setInputVal] = useState('100');
  const [isAmountStake, setIsAmountStake] = useState(false);

  const amountStakeProps = {
    amount: amount,
    setAmount: setAmount,
    inputVal: inputVal,
    setInputVal: setInputVal,
    setIsAmountStake: setIsAmountStake
  }

  return (
    <div className="stake-section">
      <PageHeader title="Stake" />
      {
        isAmountStake ? <AmountStake {...amountStakeProps} /> : <GetReward />
      }
      <StakeRewardAmount />
    </div>
  )
}

export default Stake;