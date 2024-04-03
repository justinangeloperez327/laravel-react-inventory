import React from 'react'

export default function Create() {
  return (
    <>
        <h1>Create Category</h1>
        <form action="/categories" method="post">
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            </div>
            <div>
            <button type="submit">Create</button>
            </div>
        </form>
    </>
  )
}
