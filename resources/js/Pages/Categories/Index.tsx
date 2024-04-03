import React from 'react'

export default function Index() {
  return (
    <>
        <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
        <div className="mt-4">
            <div className="flex justify-end">
            <a href="/categories/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create
            </a>
            </div>
            <table className="min-w-full mt-4">
            <thead>
                <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    Category 1
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-right text-sm leading-5 font-medium">
                    <a href="/categories/1/edit" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
                </tr>
                <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    Category 2
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-right text-sm leading-5 font-medium">
                    <a href="/categories/2/edit" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
                </tr>
                <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    Category 3
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-right text-sm leading-5 font-medium">
                    <a href="/categories/3/edit" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </>
  )
}
