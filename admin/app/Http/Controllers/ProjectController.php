<?php

namespace App\Http\Controllers;

use App\Models\ProjectModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    public function project(){
        $result = DB::table('project')
            ->join('project_cat', 'project_cat.project_cat_id', '=', 'project.project_cat_id')
            ->select('project.*', 'project_cat.title')
            ->get();
        return $result;
    }

    public function addProject(Request $request){
        $project_cat_id=$request->input('project_cat_id');
        $title=$request->input('title');
        $url=$request->input('url');



        $image=$request->file('img')->store('public');

        $imgName=explode("/",$image)[1];

        $PhotoURL="http://".$_SERVER['HTTP_HOST']."/storage/".$imgName;


        $result=ProjectModel::insert([
            'project_title'=>$title,
            'url'=>$url,
            'project_cat_id'=>$project_cat_id,
            'image'=>$PhotoURL
        ]);
        return $result;
    }

}
