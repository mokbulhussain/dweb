<?php

namespace App\Http\Controllers;

use App\Models\blogCatModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class blogCatController extends Controller
{

    public function blogCat(){
        $result=blogCatModel::all();
        return $result;
    }

    public function addBlogCat(Request $request){
        $title=$request->input('title');
        $result=blogCatModel::insert([
            'title'=>$title,
        ]);
        return $result;
    }

    public function editBlogCat(Request $request){
        $id=$request->id;
        $result=DB::table('blog_cat')->where('blog_cat_id', $id)->get();
        return $result;
    }

    public function updateBlogCat(Request $request){
        $id=$request->input('id');
        $title=$request->input('title');

        $result=blogCatModel::where('blog_cat_id', $id)->update([
            'title'=>$title,
        ]);
        return $result;
    }


    public function deleteBlogCat(Request $request){
        $id=$request->id;
        $result=DB::table('blog_cat')->where('blog_cat_id', $id)->delete();
        return $result;
    }

}
