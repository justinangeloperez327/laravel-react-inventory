import React from 'react'

export default function Edit() {
  return (
    <>
        <h2>Edit Category</h2>
        <form>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            </div>
            <div>
            <button type="submit">Save</button>
            </div>
        </form>
    </>
  )
}
