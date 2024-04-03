import React from 'react';

interface Column {
    title: string;
    key: string;
    render?: (row: any) => JSX.Element;
}

interface TableProps {
    columns: Column[];
    data: Array<any>;
    children?: React.ReactNode;
}

const Table = ({ columns, data, children } : TableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        {column.title}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
                <tr key={index}>
                    {columns.map((column, index) => (
                            <td key={index} className="px-6 pt-3 pb-2 whitespace-no-wrap border-b border-gray-400">
                                {column.render ? column.render(row) : row[column.key]}
                            </td>
                        ))}
                    {children}
                </tr>
            ))}
        </tbody>
    </table>
  );
};

export default Table;
