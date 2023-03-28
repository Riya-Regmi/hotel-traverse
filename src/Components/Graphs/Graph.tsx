import React, { useEffect } from 'react';
import { IndividualGraph } from './IndividualGraph';
import './Graph.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBarDataFromApis,
  getBarVisitorDataFromApis,
} from '../../Redux/action/Action';
import { Dispatch } from 'redux';

type GraphsProps = {};

export const Graphs = ({}: GraphsProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getBarDataFromApis());
    dispatch<any>(getBarVisitorDataFromApis());
  }, []);
  const income_data = useSelector((state: any) => state.incomeData.data);
  const visitor_data = useSelector((state: any) => state.visitorData.data);
  return (
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
};
