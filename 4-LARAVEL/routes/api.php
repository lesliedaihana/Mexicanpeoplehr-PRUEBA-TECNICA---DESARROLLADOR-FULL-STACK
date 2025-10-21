<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TareaController;

Route::prefix('tareas')->group(function () {
    Route::get('/', [TareaController::class, 'index']);
    Route::post('/', [TareaController::class, 'store']);
    Route::put('/{tarea}', [TareaController::class, 'update']);
    Route::delete('/{tarea}', [TareaController::class, 'destroy']);
});