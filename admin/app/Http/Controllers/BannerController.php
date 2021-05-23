<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BannerModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BannerController extends Controller
{
    public function banner(){
        $result=BannerModel::all();
        return $result;
    }

    public function editBanner(Request $request){
        $id=$request->id;
        $result=DB::table('banner')->where('banner_id', $id)->get();
        return $result;
    }


    public function updateBanner(Request $request){
        $banner_id=$request->input('banner_id');
        $title=$request->input('title');
        $subtitle=$request->input('subtitle');

        $result=BannerModel::where('banner_id', $banner_id)->update([
            'title'=>$title,
            'subtitle'=>$subtitle,
        ]);
        return $result;
    }


    public function updateBannerWithImg(Request $request){

        $banner_id=$request->input('banner_id');
        $title=$request->input('title');
        $subtitle=$request->input('subtitle');

        $image=$request->file('img')->store('public/uploads/banner');

        $imgName=explode("/",$image)[3];

        $result=BannerModel::where('banner_id', $banner_id)->update([
            'title'=>$title,
            'subtitle'=>$subtitle,
            'img'=>$imgName
        ]);
        return $result;
    }
}
