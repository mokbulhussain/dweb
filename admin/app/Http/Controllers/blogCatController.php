<?php

namespace App\Http\Controllers;

use App\Models\blogCatModel;
use Illuminate\Http\Request;

class blogCatController extends Controller
{

    public function blogCat(){
        $result=blogCatModel::all();
        return $result;
    }
}
