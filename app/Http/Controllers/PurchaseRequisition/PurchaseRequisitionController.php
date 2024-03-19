<?php

namespace App\Http\Controllers\PurchaseRequisition;

use Inertia\Inertia;
use App\Models\PurchaseRequisition;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePurchaseRequisitionRequest;
use App\Http\Requests\UpdatePurchaseRequisitionRequest;

class PurchaseRequisitionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('PurchaseRequisitions/Index', [
            'purchaseRequisitions' => PurchaseRequisition::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('PurchaseRequisitions/Create');
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
