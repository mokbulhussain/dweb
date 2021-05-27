<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectCatModel extends Model
{
    use HasFactory;
    public $table="project_cat";
    public $primaryKey="project_cat_id";
    public $keyType="integer";
    public $incrementing=true;
    public $timestamps=false;

}
