<?php

namespace App\Http\Controllers\PurchaseOrder;

use Inertia\Inertia;
use App\Models\PurchaseOrderItem;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePurchaseOrderItemRequest;
use App\Http\Requests\UpdatePurchaseOrderItemRequest;

class PurchaseOrderItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePurchaseOrderItemRequest $request)
    {
        return PurchaseOrderItem::create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(PurchaseOrderItem $purchaseOrderItem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PurchaseOrderItem $purchaseOrderItem)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePurchaseOrderItemRequest $request, PurchaseOrderItem $purchaseOrderItem)
    {
        return $purchaseOrderItem->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PurchaseOrderItem $purchaseOrderItem)
    {
        return $purchaseOrderItem->delete();
    }
}
