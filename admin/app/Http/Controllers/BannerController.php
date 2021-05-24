<?php

namespace App\Http\Controllers;

use App\Models\BannerModel;
use Illuminate\Http\Request;
class BannerController extends Controller
{
    public function banner(){
        $result=BannerModel::all();
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

        $image=$request->file('img')->store('public');

        $imgName=explode("/",$image)[1];
        $PhotoURL="http://".$_SERVER['HTTP_HOST']."/storage/".$imgName;

        $result=BannerModel::where('banner_id', $banner_id)->update([
            'title'=>$title,
            'subtitle'=>$subtitle,
            'img'=>$PhotoURL
        ]);
        return $result;
    }

}
