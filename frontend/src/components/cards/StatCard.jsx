// Summary metric card component for analytical dashboards
import React from 'react';

const StatCard = ({ title, value, icon, change }) => {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <p className="value">{value}</p>
    </div>
  );
};

export default StatCard;
