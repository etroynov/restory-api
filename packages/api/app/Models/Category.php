<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    public function organizations()
    {
        return $this->belongsToMany(Organizations::class, 'categories_organizations');
    }
}
