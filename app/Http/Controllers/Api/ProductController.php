<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Common\OnlyTrashed;
use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ProductRequest;
use CodeShopping\Http\Resources\ProductResource;
use CodeShopping\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

use CodeShopping\Http\Filters\ProductFilter;

class ProductController extends Controller
{

    use OnlyTrashed;

    public function index(Request $request)
    {
        //return Product::paginate(10);

        $filter = app(ProductFilter::class);

        $query = Product::query();
        $query = $this->onlyTrashedIfRequested($request, $query);

        $filterQuery = $query->filtered($filter);

        $products = $filter->hasFilterParameter() ?
            $filterQuery->get() :
            $filterQuery->paginate(10);

        return ProductResource::collection($products);
    }

    public function store(ProductRequest $request)
    {
        $product = Product::create($request->all());
        $product->refresh();
        return new ProductResource($product);
    }

    public function show(Product $product)
    {
        //return $product;
        return new ProductResource($product);
    }

    public function update(ProductRequest $request, Product $product)
    {
        $product->fill($request->all());
        $product->save();

        //return $product;
        return new ProductResource($product);
        //return response([], 204);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response([], 204);
    }

    public function restore(Product $product)
    {
        $product->restore();
        return response()->json([], 204);
    }

}
