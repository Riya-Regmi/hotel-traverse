import React, { useEffect, useState } from 'react';
import UserPlusIcon from '../../assests/icons/userPlus.svg';
import { Progress } from 'antd';
type CardsProps = {
  data: any;
};
export const Cards = ({ data }: CardsProps) => {
  const image = data.icon;
  return (
    <div
      className='cards'
      style={{ backgroundColor: `${data.backgroundColor}` }}
    >
      <div className='cards-content'>
        <div className='card-heading row'>
          <div className='col-8'>
            <text>{data.title}</text>
          </div>
          <div className='col-4'>
            <span>
              <img src={require('../../assests/icons/' + image + '.svg')} />
            </span>
          </div>
        </div>
        <div className='card-number'>
          <span>{data.number}</span>
        </div>
        <div className='card-progress-bar'>
          <span>
            <Progress
              percent={data.progress}
              status='active'
              showInfo={false}
              strokeColor={data.progressBarColor}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
