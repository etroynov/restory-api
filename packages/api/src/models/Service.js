/**
 * Service model
 *
 * @module       :: model
 * @description  :: Represent Service in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Service schema
 */

const ServiceSchema = new Schema({
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

mongoose.model('Service', ServiceSchema);
