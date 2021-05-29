<?php

namespace App\Http\Controllers;

use App\Models\StartProjectModel;
use Illuminate\Http\Request;

class StartProjectController extends Controller
{
    public function startProject(){
        $result=StartProjectModel::all();
        return $result;
    }
}
