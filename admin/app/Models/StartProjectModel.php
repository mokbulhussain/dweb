<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StartProjectModel extends Model
{
    use HasFactory;
    public $table="start_project";
    public $primaryKey="id";
    public $keyType="integer";
    public $incrementing=true;
    public $timestamps=false;
}
