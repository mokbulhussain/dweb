<?php

namespace App\Http\Controllers;

use App\Models\ServiceDetailModel;
use Illuminate\Http\Request;

class ServiceDetailController extends Controller
{
    public function serviceDetail(){
        $result=ServiceDetailModel::all();
        return $result;
    }

    public function updateServiceDetail(Request $request){
        $id=$request->input('id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $result=ServiceDetailModel::where('id', $id)->update([
            'title'=>$title,
            'detail'=>$detail,
        ]);
        return $result;
    }


    public function updateServiceDetailWithImg(Request $request){

        $id=$request->input('id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $image=$request->file('img')->store('public');

        $imgName=explode("/",$image)[1];

        $PhotoURL="http://".$_SERVER['HTTP_HOST']."/storage/".$imgName;

        $result=ServiceDetailModel::where('id', $id)->update([
            'title'=>$title,
            'detail'=>$detail,
            'img'=>$PhotoURL
        ]);
        return $result;
    }
}
