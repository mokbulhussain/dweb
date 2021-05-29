<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectModel extends Model
{
    use HasFactory;
    public $table="project";
    public $primaryKey="project_id";
    public $keyType="integer";
    public $incrementing=true;
    public $timestamps=false;
}
