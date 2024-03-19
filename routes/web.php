<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Supplier\SupplierController;
use App\Http\Controllers\PurchaseOrder\PurchaseOrderController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
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
    Route::resource('purchase-orders', PurchaseOrderController::class);
    Route::resource('suppliers', SupplierController::class);
});

require __DIR__.'/auth.php';
