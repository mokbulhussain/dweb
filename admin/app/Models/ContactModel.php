<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactModel extends Model
{
    use HasFactory;
    public $table="contact";
    public $primaryKey="id";
    public $keyType="integer";
    public $incrementing=true;
    public $timestamps=false;
}
