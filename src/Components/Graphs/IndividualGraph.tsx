import React, { useEffect, useRef, useState } from 'react';
import { XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';
type IndividualGraphProps = {
  graph_data: any;
  color: any;
  title: string;
};

export const IndividualGraph = ({
  graph_data,
  color,
  title,
}: IndividualGraphProps) => {
  useEffect(() => {
    getWidth();
  }, []);
  const getWidth = () => {
    console.log(graphcontainer.current?.offsetWidth);
    setGraphSize({
      width: graphcontainer.current?.offsetWidth,
      height: graphcontainer.current?.offsetHeight,
    });
  };
  const graphcontainer = useRef<any>();
  const [graphSize, setGraphSize] = useState({ width: 0, height: 0 });
  return (
    <div className='income-graph'>
      <div className='graph-title'>
        <span>{title}</span>
      </div>
      <div
        className='income-bar-graph'
        ref={graphcontainer}
      >
        <BarChart
          width={graphSize.width - 0}
          height={500}
          data={graph_data}
        >
          <Bar
            dataKey='value'
            fill={color}
            barSize={50}
          />
          <CartesianGrid stroke='#EEF0F3' />
          <XAxis
            dataKey='date'
            axisLine={true}
            style={{ fontSize: '12px', color: '#6A717D' }}
          />
          <YAxis
            domain={[0, 'dataMax + 40000']}
            allowDataOverflow={true}
            style={{ fontSize: '12px', color: '#6A717D' }}
            tickFormatter={(value) =>
              new Intl.NumberFormat('en-US', {
                notation: 'compact',
                compactDisplay: 'short',
              }).format(value)
            }
          />
        </BarChart>
      </div>
    </div>
  );
};
