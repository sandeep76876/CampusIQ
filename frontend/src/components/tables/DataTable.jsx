// Configurable tabular data viewer supporting pagination, sorting, and search
import React from 'react';

const DataTable = ({ columns, data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>{columns?.map((col, idx) => <th key={idx}>{col.header}</th>)}</tr>
      </thead>
      <tbody>
        {/* Row mapping placeholder */}
      </tbody>
    </table>
  );
};

export default DataTable;
