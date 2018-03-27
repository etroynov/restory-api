/**
 * Tag model
 *
 * @module       :: model
 * @description  :: Represent Tag in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Tag schema
 */

const TagSchema = new Schema({
  title: String,
  description: String,
  name: String,
  content: String,
  icon: String,
  organizations: [{ type: Schema.Types.ObjectId, ref: 'Organization' }],
  slug: {
    type: String,
    unique: true,
    required: true,
  },
});

/**
 * Register
 */

mongoose.model('Tag', TagSchema);
