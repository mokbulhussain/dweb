<?php

namespace App\Http\Controllers;

use App\Models\ContactModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function contact(){
        $result=ContactModel::all();
        return $result;
    }
}
