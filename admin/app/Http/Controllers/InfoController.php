<?php

namespace App\Http\Controllers;

use App\Models\InfoModel;
use Illuminate\Http\Request;

class InfoController extends Controller
{
    public function getInfo(){
        $result=InfoModel::all();
        return $result;
    }
}
