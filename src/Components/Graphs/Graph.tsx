import React from 'react';
import { IndividualGraph } from './IndividualGraph';
import './Graph.css';

type GraphsProps = {};
const income_data = [
  { date: '01/08', value: '30000' },
  { date: '01/09', value: '18500' },
  { date: '01/10', value: '8000' },
  { date: '01/11', value: '15000' },
  { date: '01/12', value: '19500' },
  { date: '01/13', value: '32500' },
  { date: '01/14', value: '14000' },
  { date: '02/15', value: '40000' },
  { date: '02/16', value: '20000' },
  { date: '02/17', value: '40000' },
];
const visitor_data = [
  { date: '01/08', value: '30000' },
  { date: '01/09', value: '18500' },
  { date: '01/10', value: '8000' },
  { date: '01/11', value: '15000' },
  { date: '01/12', value: '19500' },
  { date: '01/13', value: '32500' },
  { date: '01/14', value: '14000' },
  { date: '02/15', value: '40000' },
  { date: '02/16', value: '20000' },
  { date: '02/17', value: '40000' },
];

export const Graphs = ({}: GraphsProps) => (
  <div className='graphs'>
    <div className='graphs-content row'>
      <div className='col-md-5'>
        <IndividualGraph
          title='Income and Expenses'
          graph_data={income_data}
          color='#FF5722'
        />
      </div>
      <div className='col-md-1'></div>
      <div className='col-md-5'>
        <IndividualGraph
          title='Visitors'
          graph_data={visitor_data}
          color='#9747FF'
        />
      </div>
    </div>
  </div>
);
