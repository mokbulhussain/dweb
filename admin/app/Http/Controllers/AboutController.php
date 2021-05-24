<?php

namespace App\Http\Controllers;

use App\Models\AboutModel;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function about(){
       $result=AboutModel::all();
       return $result;
    }

    public function updateAbout(Request $request){
        $about_id=$request->input('about_id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $result=AboutModel::where('about_id', $about_id)->update([
            'title'=>$title,
            'detail'=>$detail,
        ]);
        return $result;
    }


    public function updateAboutWithImg(Request $request){

        $about_id=$request->input('about_id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $image=$request->file('img')->store('public');

        $imgName=explode("/",$image)[1];

        $PhotoURL="http://".$_SERVER['HTTP_HOST']."/storage/".$imgName;

        $result=AboutModel::where('about_id', $about_id)->update([
            'title'=>$title,
            'detail'=>$detail,
            'img'=>$PhotoURL
        ]);
        return $result;
    }
}
