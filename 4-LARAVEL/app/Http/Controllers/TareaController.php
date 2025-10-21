<?php
namespace App\Http\Controllers;

use App\Models\Tarea;
use App\Http\Requests\TareaRequest;
use Illuminate\Http\Request;

class TareaController extends Controller
{
    public function index(Request $request)
    {
        $query = Tarea::with('usuario');
        if ($request->query('completadas')) {
            $query->completadas();
        }
        return $query->get();
    }

    public function store(TareaRequest $request)
    {
        $tarea = Tarea::create($request->validated());
        return response()->json($tarea->load('usuario'), 201);
    }

    public function update(TareaRequest $request, Tarea $tarea)
    {
        $tarea->update($request->validated());
        return $tarea->load('usuario');
    }

    public function destroy(Tarea $tarea)
    {
        $tarea->delete();
        return response()->json(null, 204);
    }
}