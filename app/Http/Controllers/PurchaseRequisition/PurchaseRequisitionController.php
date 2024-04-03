<?php

namespace App\Http\Controllers\PurchaseRequisition;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePurchaseRequisitionRequest;
use App\Http\Requests\UpdatePurchaseRequisitionRequest;
use App\Models\Product;
use App\Models\PurchaseRequisition;
use Inertia\Inertia;

class PurchaseRequisitionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $purchaseRequisitions = PurchaseRequisition::paginate(10);

        return Inertia::render('PurchaseRequisitions/Index', [
            'purchaseRequisitions' => $purchaseRequisitions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $products = Product::orderBy('name')->get();

        return Inertia::render('PurchaseRequisitions/Create', [
            'products' => $products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePurchaseRequisitionRequest $request)
    {
        return PurchaseRequisition::create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(PurchaseRequisition $purchaseRequisition)
    {
        return Inertia::render('PurchaseRequisitions/Show', [
            'purchaseRequisition' => $purchaseRequisition,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PurchaseRequisition $purchaseRequisition)
    {
        return Inertia::render('PurchaseRequisitions/Edit', [
            'purchaseRequisition' => $purchaseRequisition,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePurchaseRequisitionRequest $request, PurchaseRequisition $purchaseRequisition)
    {
        return $purchaseRequisition->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PurchaseRequisition $purchaseRequisition)
    {
        return $purchaseRequisition->delete();
    }
}
