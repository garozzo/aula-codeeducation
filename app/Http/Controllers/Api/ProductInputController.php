<?php

namespace CodeShopping\Http\Controllers\Api;

use \CodeShopping\Http\Controllers\Controller;
use \CodeShopping\Http\Requests\ProductInputRequest;
use \CodeShopping\Http\Resources\ProductInputResource;
use CodeShopping\Models\ProductInput;
use Illuminate\Http\Request;

use CodeShopping\Http\Filters\ProductInputFilter;


class ProductInputController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $filter = app(ProductInputFilter::class);
        $filterQuery = ProductInput::with('product')->filtered($filter);
        $inputs = $filterQuery->paginate();
        return ProductInputResource::collection($inputs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductInputRequest $request)
    {
        $input = ProductInput::create($request->all());

    //    $product = $input->product;
    //    $product->stock += $input->amount;
    //    $product->save();

        return new ProductInputResource($input);
    }

    /**
     * Display the specified resource.
     *
     * @param  \CodeShopping\Models\ProductInput  $productInput
     * @return \Illuminate\Http\Response
     */
    public function show(ProductInput $input)
    {
        return new ProductInputResource($input);
    }

}
