<?php

use App\Http\Controllers\Product\CategoryController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\PurchaseOrder\PurchaseOrderController;
use App\Http\Controllers\PurchaseRequisition\PurchaseRequisitionController;
use App\Http\Controllers\Supplier\SupplierController;
use App\Http\Controllers\User\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('products', ProductController::class);
    Route::resource('purchase-orders', PurchaseOrderController::class);
    Route::resource('categories', CategoryController::class);
    Route::resource('purchase-requisitions', PurchaseRequisitionController::class);
    Route::resource('suppliers', SupplierController::class);
});

require __DIR__.'/auth.php';
