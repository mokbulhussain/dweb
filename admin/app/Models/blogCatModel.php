<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class blogCatModel extends Model
{
    use HasFactory;
    public $table="blog_cat";
    public $primaryKey="blog_cat_id";
    public $keyType="integer";
    public $incrementing=true;
    public $timestamps=false;
}
