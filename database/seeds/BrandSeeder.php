<?php

use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brands')->insert([
            'id' => 1,
            'name' => 'Chevrolet',
            'label' => 'Car chevrolet'
        ]);

        DB::table('brands')->insert([
            'id' => 2,
            'name' => 'Fiat',
            'label' => 'Car fiat'
        ]);

        DB::table('brands')->insert([
            'id' => 3,
            'name' => 'Volkswagen',
            'label' => 'Car volkswagen'
        ]);

        DB::table('brands')->insert([
            'id' => 4,
            'name' => 'Ford',
            'label' => 'Car ford'
        ]);

        DB::table('brands')->insert([
            'id' => 5,
            'name' => 'Hyundai',
            'label' => 'Car hyundai'
        ]);

        DB::table('brands')->insert([
            'id' => 6,
            'name' => 'Toyota',
            'label' => 'Car toyota'
        ]);

        DB::table('brands')->insert([
            'id' => 7,
            'name' => 'Renault',
            'label' => 'Car renault'
        ]);

        DB::table('brands')->insert([
            'id' => 8,
            'name' => 'Honda',
            'label' => 'Car honda'
        ]);

        DB::table('brands')->insert([
            'id' => 9,
            'name' => 'Jeep',
            'label' => 'Car jeep'
        ]);

        DB::table('brands')->insert([
            'id' => 10,
            'name' => 'Nissan',
            'label' => 'Car nissan'
        ]);
    }
}
