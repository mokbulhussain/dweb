<?php

namespace App\Http\Controllers;

use App\Models\CourseModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CourseController extends Controller
{
    public function course(){
        $result=CourseModel::all();
        return $result;
    }

    public function addCourse(Request $request){

        $title=$request->input('title');

        $detail=$request->input('detail');

        $image=$request->file('image')->store('public');

        $imgName=explode("/",$image)[1];

        $PhotoURL="http://".$_SERVER['HTTP_HOST']."/storage/".$imgName;

        $result=CourseModel::insert([
            'title'=>$title,
            'detail'=>$detail,
            'image'=>$PhotoURL
        ]);
        return $result;
    }


    public function editCourse(Request $request){
        $id=$request->id;
        $result=DB::table('course')->where('course_id', $id)->get();
        return $result;
    }


    public function updateCourseWithImg(Request $request){

        $id=$request->input('id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $image=$request->file('image')->store('public');

        $imgName=explode("/",$image)[1];

        $PhotoURL="http://".$_SERVER['HTTP_HOST']."/storage/".$imgName;

        $result=CourseModel::where('course_id', $id)->update([
            'title'=>$title,
            'detail'=>$detail,
            'image'=>$PhotoURL
        ]);
        return $result;
    }

    public function updateCourse(Request $request){
        $id=$request->input('id');
        $title=$request->input('title');
        $detail=$request->input('detail');

        $result=CourseModel::where('course_id', $id)->update([
            'title'=>$title,
            'detail'=>$detail,
        ]);
        return $result;
    }

    public function deleteCourse(Request $request){
        $id=$request->id;
        $result=DB::table('course')->where('course_id', $id)->delete();
        return $result;
    }


}
