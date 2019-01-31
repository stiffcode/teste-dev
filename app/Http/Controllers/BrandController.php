<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Brand;

class BrandController extends Controller
{
    private $brand;

    public function __construct(Brand $brand)
    {   
        $this->brand = $brand;
    }

    public function index()
    {
        $brands = $this->brand->all();

        foreach ($brands as $brand) {
            $brand->cars = $brand->cars()->get();
        }

        return Response::json([
            'success' => true,
            'length' => count($brands),
            'data' => $brands,
        ], 200);
    }

}
