<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    public function tag(): BelongsToMany
    {
        return $this->belongsToMany(Tags::class, 'post_tag_table');
    }
}
