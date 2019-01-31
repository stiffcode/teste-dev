<?php

use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cars')->insert([
            'id' => 1,
            'brand_id' => 2,
            'model' => 'Fiat uno 1.0',
            'year' => 2007
        ]);

        DB::table('cars')->insert([
            'id' => 2,
            'brand_id' => 5,
            'model' => 'HB20',
            'year' => 2015
        ]);

        DB::table('cars')->insert([
            'id' => 3,
            'brand_id' => 1,
            'model' => 'Gol 1.6',
            'year' => 2012
        ]);
    }
}
