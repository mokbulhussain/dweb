<?php

namespace App\Http\Controllers;

use App\Models\BlogModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{
    public function getBlog(){
        $result = DB::table('blog')
            ->join('blog_cat', 'blog_cat.blog_cat_id', '=', 'blog.blog_cat_id')
            ->select('blog.*', 'blog_cat.title')
            ->get();
        return $result;
    }


    public function addBlog(Request $request){

        $date = date("Y-m-d");

        $title=$request->input('title');
        $blogCatId=$request->input('blogCatId');
        $detail=$request->input('detail');
        $image=$request->file('img')->store('public');
        $imgName=explode("/",$image)[1];
        $PhotoURL="http://".$_SERVER['HTTP_HOST']."/storage/".$imgName;

        $result=BlogModel::insert([
            'blog_title'=>$title,
            'date'=>$date,
            'detail'=>$detail,
            'blog_cat_id'=>$blogCatId,
            'img'=>$PhotoURL
        ]);
        return $result;
    }



}
