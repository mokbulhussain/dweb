<?php

namespace App\Http\Controllers;

use App\Models\ServiceModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function editService(Request $request){
        $id=$request->id;
        $result=DB::table('service')->where('service_id', $id)->get();
        return $result;
    }

    public function updateServiceWithImg(Request $request){

        $service_id=$request->input('id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $image=$request->file('image')->store('public');

        $imgName=explode("/",$image)[1];

        $PhotoURL="http://".$_SERVER['HTTP_HOST']."/storage/".$imgName;

        $result=ServiceModel::where('service_id', $service_id)->update([
            'title'=>$title,
            'detail'=>$detail,
            'img'=>$PhotoURL
        ]);
        return $result;
    }

    public function updateService(Request $request){
        $service_id=$request->input('id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $result=ServiceModel::where('service_id', $service_id)->update([
            'title'=>$title,
            'detail'=>$detail,
        ]);
        return $result;
    }

    public function deleteService(Request $request){
        $id=$request->id;
        $result=DB::table('service')->where('service_id', $id)->delete();
        return $result;
    }


}
