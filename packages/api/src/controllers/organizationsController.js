/**
 * Organizations controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle organizations ( create, update and etc )
 *
 *
 * Module dependencies
 */
const mongoose = require('mongoose');

const { send, json } = require('micro');

const Organization = mongoose.model('Organization');

/*!
 * Expos
 */

exports.index = async (req, res) => {
  try {
    const organizations = await Organization.find().limit(80);

    return send(res, 200, organizations);
  } catch(e) {
    return send(res, 500, e);
  }
};

exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    let organization = null;

    if (mongoose.Types.ObjectId.isValid(id)) {
      organization = await Organization.findOne({ _id: id });
    } else {
      organization = await Organization.findOne({ slug: decodeURI(id) });
    }

    return send(res, 200, organization);
  } catch(e) {
    return send(res, 500, e);
  }
}

exports.create = async (req, res) => {
  try {
    const data = await json(req);
    const organization = await Organization.create(data);

    return send(res, 200, organization);
  } catch(e) {
    return send(res, 500, e);
  }
};

exports.update = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const organization = await Organization.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, organization);
};

exports.delete = async (req, res) => {
  try {
    const data   = await json(req);
    const organization = await Organization.remove(data);
    
    return send(res, 200);
  } catch(e) {
    return send(res, 500);
  }
};
