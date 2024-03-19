<?php

namespace App\Http\Controllers\PurchaseOrder;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Supplier;
use App\Models\PurchaseOrder;
use App\Models\PurchaseRequisition;
use App\Http\Controllers\Controller;
use App\Models\PurchaseRequisitionItem;
use App\Http\Requests\StorePurchaseOrderRequest;
use App\Http\Requests\UpdatePurchaseOrderRequest;

class PurchaseOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('PurchaseOrders/Index', [
            'purchaseOrders' => PurchaseOrder::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $requestedItems = PurchaseRequisitionItem::query()
            ->with('product')
            ->whereHas('purchaseRequisition', function ($query) {
                $query->approved();
            })->orderBy('product_id', 'asc')
            ->get();

        $suppliers = Supplier::orderBy('name', 'asc')->get();

        return Inertia::render('PurchaseOrders/Create', [
            'requested_items' => $requestedItems,
            'suppliers' => $suppliers,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * add items to purchase order
     */
    public function store(StorePurchaseOrderRequest $request)
    {
        $purchaseOrder = PurchaseOrder::create($request->validated());

        $purchaseOrder->items()->createMany($request->items);

        return $purchaseOrder;
    }

    /**
     * Display the specified resource.
     */
    public function show(PurchaseOrder $purchaseOrder)
    {
        $purchaseOrder->load('items');

        return Inertia::render('PurchaseOrders/Show', [
            'purchaseOrder' => $purchaseOrder,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PurchaseOrder $purchaseOrder)
    {
        $purchaseOrder->load('items', 'supplier');

        return Inertia::render('PurchaseOrders/Edit', [
            'purchaseOrder' => $purchaseOrder,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePurchaseOrderRequest $request, PurchaseOrder $purchaseOrder)
    {
        return $purchaseOrder->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PurchaseOrder $purchaseOrder)
    {
        return $purchaseOrder->delete();
    }
}
