import React from 'react'

export default function Show() {
  return (
    <>
        <h1 className="text-2xl font-bold mb-4">Show Category</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
            </label>
            <p className="text-gray-700 text-base">Category 1</p>
            </div>
        </div>
    </>
  )
}
