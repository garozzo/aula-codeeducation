<?php

use Faker\Generator as Faker;

$factory->define(CodeShopping\Models\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->city,
        'description' => $faker->text($maxNbChars = 400),
        'price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 100, $max = 1000)
    ];
});
