/**
 * Organization model
 *
 * @module       :: model
 * @description  :: Represent Organization in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Organization schema
 */

const OrganizationSchema = new Schema({
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  cuisines: [{ type: Schema.Types.ObjectId, ref: 'Cuisine' }],
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  title: String,
  description: String,
  name: String,
  content: String,
  image: String,
  address: String,
  latitude: Number,
  longitude: Number,
  site: String,
  roominess: Number,
  averageBill: Number,
  rating: Number,
  views: Number,
  workTime: {
    type: Array,
    default: [],
  },
  phoneNumbers: {
    type: Array,
    default: [],
  },
  social: {
    type: Array,
    default: [],
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
});

/**
 * Register
 */

mongoose.model('Organization', OrganizationSchema);
