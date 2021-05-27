<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoModel extends Model
{
    use HasFactory;
    public $table="info";
    public $primaryKey="id";
    public $keyType="integer";
    public $incrementing=false;
    public $timestamps=false;
}
