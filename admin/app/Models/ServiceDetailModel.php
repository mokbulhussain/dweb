<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceDetailModel extends Model
{
    use HasFactory;
    public $table="service_detail";
    public $primaryKey="id";
    public $keyType="integer";
    public $incrementing=true;
    public $timestamps=false;
}
