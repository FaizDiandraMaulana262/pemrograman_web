<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductCategoryRequest;
use App\Http\Requests\UpdateProductCategoryRequest;
use App\Http\Resources\ProductCategoryCollection;
use App\Http\Resources\ProductCategoryResource;
use App\Models\ProductCategory;
use Illuminate\Support\Str;
use Exception;
use Illuminate\Http\Request;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        try {
            $query = ProductCategory::all();
            $format = new ProductCategoryCollection($query);
            return response()->json([
                "message" => "success",
                "data" => $format
            ]);
        } catch (Exception $err) {
            return response()->json($err->getMessage(), 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = new ProductCategory();
            $data->id = Str::uuid();
            $data->name = $request->name;
            $data->description = $request->description;
            $data->save();
            return response()->json([
                "message" => "success",
                "data" => $data
            ]);
        } catch (Exception $err) {
            return response()->json([
                $err->getMessage(),
                400
            ]);
        }
        
        // $validation = $request->validate();
        // try {
        //     $query = ProductCategory::created($validation);
        //     $format = new ProductCategoryResource($query);
        //     return response()->json([
        //         "message" => "success",
        //         "data" => $format
        //     ]);
        // } catch (Exception $err) {
        //     return response()->json([
        //         $err->getMessage()
        //     ]);
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $query = ProductCategory::findOrFail($id);
            $format = new ProductCategoryResource($query);
            return response()->json([
                "message" => "success",
                "data" => $format
            ]);
        } catch (Exception $err) {
            return response()->json([
                $err->getMessage()
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validate = $request->validated();
        try {
            $query = ProductCategory::findOrFail($id)->update($validate)->save();
            $format = new ProductCategoryResource($query);
            return response()->json([
                "message" => "success",
                "data" => $format,
                200
            ]);
        } catch (Exception $err) {
            return response()->json([
                $err->getMessage(),
                400
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $query = ProductCategory::findOrFail($id)->delete();
            return response()->json([
                "message" => "success",
                "data" => $query,
                200
            ]); 
        } catch (Exception $err) {
            return response()->json([
                $err->getMessage(),
                400
            ]);
        }
    }
}
