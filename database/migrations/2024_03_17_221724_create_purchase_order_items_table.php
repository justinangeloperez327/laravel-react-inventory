<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('purchase_order_items', function (Blueprint $table) {
            $table->id();
            $table->text('description')->nullable();
            $table->foreignId('product_id')->constrained();
            $table->unsignedInteger('quantity');
            $table->decimal('price', 8, 2);
            $table->decimal('total', 8, 2);

            $table->unsignedBigInteger('po_id');
            $table->unsignedBigInteger('pr_id');
            $table->foreign('po_id')->references('id')->on('purchase_orders');
            $table->foreign('pr_id')->references('id')->on('purchase_requisitions');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_order_items');
    }
};
