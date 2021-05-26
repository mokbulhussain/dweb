<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogModel extends Model
{
    use HasFactory;
    public $table="blog";
    public $primaryKey="blog_id";
    public $keyType="integer";
    public $incrementing=true;
    public $timestamps=false;
}
