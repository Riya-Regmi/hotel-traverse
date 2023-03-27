import React from 'react';
import { CardData } from '../../Data/data';
import { Cards } from './Cards';
import './Cards.css';

type CardsCollectionProps = {};

export const CardsCollection = ({}: CardsCollectionProps) => (
  <div className='cards-collections'>
    <div className='cards-collection-text'>
      <span>Good morning Admin!</span>
    </div>
    <div className='individual-cards'>
      <div className='row'>
        {CardData.data.map((data, i) => {
          return (
            <div className='col-md-3'>
              <Cards data={data} />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
