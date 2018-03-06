/**
 * Category model
 *
 * @module       :: model
 * @description  :: Represent Category in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Category schema
 */

const CategorySchema = new Schema({
  title: String,
  description: String,
  name: String,
  content: String,
  icon: String,
  organizations: [{ type: Schema.Types.ObjectId, ref: 'Organization' }],
  status: {
    type: Number,
    default: 0,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
});

/**
 * Register
 */

mongoose.model('Category', CategorySchema);
