import React from 'react'

export default function Create() {
  return (
    <>
        <h1>Create Color</h1>
        <form action="/colors" method="post">
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
