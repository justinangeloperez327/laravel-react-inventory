import React from 'react'

export default function Edit() {
  return (
    <>
        <h2>Edit Product</h2>
        <form>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            </div>
            <div>
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" />
            </div>
            <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description"></textarea>
            </div>
            <div>
            <button type="submit">Save</button>
            </div>
        </form>
    </>
  )
}
