<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Brand;

class BrandSeeder extends Seeder
{
    public function run(): void
    {
        $brands = [
            [
                'brand_name' => 'Cashed Casino',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/cashed-casino.png',
                'rating' => 5,
                'country_code' => 'FR',
            ],
            [
                'brand_name' => 'Vegasino',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/vegasino.png',
                'rating' => 4,
                'country_code' => 'FR',
            ],
            [
                'brand_name' => 'Alexander Casino',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/alexander-casino.png',
                'rating' => 4,
                'country_code' => 'FR',
            ],
            [
                'brand_name' => 'Talismania Casino',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/talismania-casino.png',
                'rating' => 3,
                'country_code' => 'FR',
            ],
            [
                'brand_name' => 'Betalright',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/betalright.png',
                'rating' => 3,
                'country_code' => 'FR',
            ],
            [
                'brand_name' => 'Wonaco',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/wonaco.png',
                'rating' => 2,
                'country_code' => 'FR',
            ],
            
            [
                'brand_name' => 'Wildsino Casino',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/wildsino-casino.png',
                'rating' => 5,
                'country_code' => 'FR',
            ],
            [
                'brand_name' => 'Magius Casino',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/magius-casino.png',
                'rating' => 4,
                'country_code' => 'US',
            ],
            [
                'brand_name' => 'Nomini Casino',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/nomini-casino.png',
                'rating' => 4,
                'country_code' => 'DE',
            ],
            [
                'brand_name' => 'Casinova Casino',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/casinova-casino.png',
                'rating' => 3,
                'country_code' => 'IT',
            ],
            [
                'brand_name' => 'Bruno Casino',
                'brand_image' => 'https://www.casinoonlinefrancais.info/images/casinos/bruno-casino.png',
                'rating' => 3,
                'country_code' => 'CA',
            ],
        ];

        foreach ($brands as $brand) {
            Brand::create($brand);
        }
    }
}
