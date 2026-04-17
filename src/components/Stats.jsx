import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import './Stats.css';

const Stats = ({ entries }) => {
  // Timeline entries theke data count kora
  const dataMap = entries.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const data = [
    { name: 'Text', value: dataMap['Text'] || 0 },
    { name: 'Call', value: dataMap['Call'] || 0 },
    { name: 'Video', value: dataMap['Video'] || 0 },
  ];

  // Figma design color palette
  const COLORS = ['#8b5cf6', '#1a2e26', '#34d399'];

  return (
    <div className="stats-wrapper">
      <div className="stats-container">
        <h1 className="stats-title">Friendship Analytics</h1>
        
        <div className="analytics-card">
          <p className="chart-label">By Interaction Type</p>
          
          <div className="chart-box">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;