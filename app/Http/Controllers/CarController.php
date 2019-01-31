<?php

namespace App\Http\Controllers;

use App\Car;
use App\Brand;
use App\Http\Requests\CarValidation;
use Illuminate\Support\Facades\Response;

class CarController extends Controller
{

    private $car;
    private $brand;

    public function __construct(Car $car, Brand $brand) 
    {
        $this->car = $car;
        $this->brand = $brand;
    }

    public function index()
    {
        $cars = $this->car->all();
        
        foreach ($cars as $car) {
            $car->brand = $car->brand()->get();
        }

        return Response::json([
            'success' => true,
            'length' => count($cars),
            'data' => $cars,
        ], 200);
    }

    public function store(CarValidation $request)
    {
        $car = new Car();
        $car->brand_id = $request->brand_id;
        $car->model = $request->model;
        $car->year = $request->year;

        if ($car->save()) {

            $car->brand = $car->brand()->get();
            
            return Response::json([
                'success' => true,
                'message' => 'Created Car',
                'data' => $car,
            ], 200);

        } else {

            return Response::json([
                'success' => false,
                'message' => 'Sorry, car could not be added'
            ], 400);

        }
    }

    public function update(CarValidation $request, $id)
    {
        $car = $this->car->find($id);

        if (!$car) {
            return Response::json(['response' => 'Invalid car'], 400);
        }

        $car->brand_id = $request->brand_id;
        $car->model = $request->model;
        $car->year = $request->year;

        if ($car->save()) {

            $car->brand = $car->brand()->get();
            
            return Response::json([
                'success' => true,
                'message' => 'Updated Car',
                'data' => $car,
            ], 200);

        } else {

            return Response::json([
                'success' => false,
                'message' => 'Sorry, car could not be updated'
            ], 400);

        }
    }

    public function show($id)
    {
        $car = $this->car->find($id);

        if ($car) {
            $car->brand = $car->brand()->get();

            return Response::json([
                'success' => true,
                'data' => $car,
            ], 200);
        
        }

        return Response::json([
            'success' => false,
            'message' => 'Invalid car',
        ], 400);

    }

    public function destroy($id)
    {
        $car = $this->car->find($id);

        if ($car) {
            
            $car->delete();

            return Response::json([
                'success' => true,
                'message' => 'Deleted car',
                'data' => $car,
            ], 200);
            
        }

        return Response::json([
            'success' => false,
            'message' => 'Invalid car',
        ], 400);

    }

}
