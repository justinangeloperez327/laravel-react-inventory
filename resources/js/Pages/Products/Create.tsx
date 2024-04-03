import React from 'react'

// use tailwind css in designing the form
// use the form to create a new product
export default function Create({ sizes, colors, categories } : { sizes: any, colors: any, categories: any }) {
  return (
    <>
        <h1>Create Product</h1>
        <form action="/products" method="post">
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            </div>
            <div>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description"></textarea>
            </div>
            <div>
            <label htmlFor="price">Price</label>
            <input type="text" name="price" id="price" />
            </div>
            <div>
            <label htmlFor="category_id">Category</label>
            <select name="category_id" id="category_id">
                {categories.map((category: any) => (
                <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            </div>
            <div>
            <label htmlFor="color_id">Color</label>
            <select name="color_id" id="color_id">
                {colors.map((color: any) => (
                <option key={color.id} value={color.id}>{color.name}</option>
                ))}
            </select>
            </div>
            <div>
            <label htmlFor="size_id">Size</label>
            <select name="size_id" id="size_id">
                {sizes.map((size: any) => (
                <option key={size.id} value={size.id}>{size.name}</option>
                ))}
            </select>
            </div>
            <div>
            <button type="submit">Create</button>
            </div>
        </form>
    </>
  )
}
