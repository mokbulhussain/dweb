<?php

namespace App\Http\Controllers;

use App\Models\ServiceModel;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function service(){
        $result=ServiceModel::all();
        return $result;
    }

    public function addService(Request $request){

        $title=$request->input('title');

        $detail=$request->input('detail');

        $image=$request->file('image')->store('public');

        $imgName=explode("/",$image)[1];

        $PhotoURL="http://".$_SERVER['HTTP_HOST']."/storage/".$imgName;

        $result=ServiceModel::insert([
            'title'=>$title,
            'detail'=>$detail,
            'img'=>$PhotoURL
        ]);
        return $result;
    }

}
