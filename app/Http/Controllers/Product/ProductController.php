<?php

namespace App\Http\Controllers\Product;

use App\Models\Size;
use Inertia\Inertia;
use App\Models\Color;
use App\Models\Product;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Product::query();

        // Sorting
        if ($request->has('sort_by')) {
            $sortColumn = $request->input('sort_by');
            $sortDirection = $request->input('sort_dir', 'asc');
            $query->orderBy($sortColumn, $sortDirection);
        }

        // Pagination
        $data = $query->paginate($request->input('per_page', 10));

        return Inertia::render('Products/Index', [
            'products' => $data,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $colors = Color::all();
        $sizes = Size::all();
        $categories = Category::all();

        return Inertia::render('Products/Create', [
            'colors' => $colors,
            'sizes' => $sizes,
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        return Product::create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Products/Show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        return $product->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        return $product->delete();
    }
}
