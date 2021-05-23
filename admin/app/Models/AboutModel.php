<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutModel extends Model
{
    use HasFactory;
    public $table="about";
    public $primaryKey="about_id";
    public $keyType="integer";
    public $incrementing=true;
    public $timestamps=false;
}
