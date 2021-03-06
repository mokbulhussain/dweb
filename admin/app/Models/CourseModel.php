<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseModel extends Model
{
    use HasFactory;
    public $table="course";
    public $primaryKey="course_id";
    public $keyType="integer";
    public $incrementing=true;
    public $timestamps=false;
}
