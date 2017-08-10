import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatBalance, formatUNIXTimestamp } from 'helpers';

import { Progressbar, Summ } from './styles';
import DepositInfo from './DepositInfo';
import { SubText, SubInfo, MainWrapper } from 'bricks/Sidebar/view/styles';

const DepositCard = (props) => {
  const tick = formatBalance(props.tick);
  const created = formatUNIXTimestamp(props.created, true);

  return (
    <MainWrapper>
      <DepositInfo selectDeposit={props.selectDeposit} {...props} />

      <SubInfo>
        <SubText>{`${props.percent}% ${locales.annual}`}</SubText>
        <SubText>{`${locales.tick}: ${tick} ${props.currency}`}</SubText>
        {props.detailed === false && <SubText>{`${locales.created}: ${created}`}</SubText>}

        <Progressbar current={(props.passed / props.period) * 100}>
          <Summ>{`${formatBalance(props.balance.init)} ${props.currency}`}</Summ>
          <Summ>{`${formatBalance(props.balance.end)} ${props.currency}`}</Summ>
        </Progressbar>
      </SubInfo>
    </MainWrapper>
  );
};

DepositCard.propsTypes = {
  detailed: PropTypes.bool,
  balance: PropTypes.object,
  created: PropTypes.number,
  currency: PropTypes.string,
  match: PropTypes.object,
  number: PropTypes.number,
  passed: PropTypes.number,
  period: PropTypes.number,
  percent: PropTypes.number,
  tick: PropTypes.number,
};

DepositCard.defaultProps = {
  detailed: false,
  balance: {
    current: 0,
    end: 0,
    init: 0,
  },
  created: 0,
  currency: '',
  match: {
    params: {},
  },
  number: 0,
  passed: 0,
  period: 0,
  percent: 0,
  tick: 0,
};

export default DepositCard;
