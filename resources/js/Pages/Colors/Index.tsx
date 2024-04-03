import React from 'react'

export default function Index() {
  return (
    <>
        <h1>Colors</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Red</td>
                    <td>
                        <a href="/colors/1/edit">Edit</a>
                        <form action="/colors/1" method="post">
                            <input type="hidden" name="_method" value="DELETE" />
                            <button type="submit">Delete</button>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>Green</td>
                    <td>
                        <a href="/colors/2/edit">Edit</a>
                        <form action="/colors/2" method="post">
                            <input type="hidden" name="_method" value="DELETE" />
                            <button type="submit">Delete</button>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>Blue</td>
                    <td>
                        <a href="/colors/3/edit">Edit</a>
                        <form action="/colors/3" method="post">
                            <input type="hidden" name="_method" value="DELETE" />
                            <button type="submit">Delete</button>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
  )
}
