import React from 'react';

interface TableProps {
    columns: Array<{ header: string; accessor: (row: any) => any }>;
    data: Array<any>;
}

const Table = ({ columns, data } : TableProps) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="px-4 py-2">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-200' : ''}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex} className="px-4 py-2">
                {column.accessor(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
