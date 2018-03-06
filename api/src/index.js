/**
 * Dependencies
 */

const fs       = require('fs');
const path     = require('path');
const cors     = require('micro-cors')();
const compose  = require('micro-compose');
const mongoose = require('mongoose');

const { send } = require('micro');
const { router, get, post } = require('microrouter');

/**
 * DataBase
 */

mongoose.connect('mongodb://localhost/resto');
mongoose.Promise = global.Promise;

/**
 * Models require
 */

fs.readdirSync(path.join(__dirname, '/models')).forEach((file) => {
  if (file.includes('.js')) {
    require(path.join(__dirname, '/models/', file));
  }
});

/**
 * Routes
 */

const pagesController         = require('./controllers/pagesController');
const categoriesController    = require('./controllers/categoriesController');
const usersController         = require('./controllers/usersController');
const organizationsController = require('./controllers/organizationsController');
const postsController         = require('./controllers/postsController');
const settingsController      = require('./controllers/settingsController');

const notfound = (req, res) => send(res, 404, 'You shall not passs :)');

/**
 * Expo
 */

module.exports = compose(
  cors,
)(router(
  /** PAGES **/
  get('/pages',            pagesController.index),
  get('/pages/:id',        pagesController.show),
  post('/pages/create',    pagesController.create),
  post('/pages/update',    pagesController.update),
  post('/pages/delete',    pagesController.delete),

  /** CATEGORIES **/
  get('/categories',         categoriesController.index),
  get('/categories/:id',     categoriesController.show),
  post('/categories/create', categoriesController.create),
  post('/categories/update', categoriesController.update),
  post('/categories/delete', categoriesController.delete),

  /** ORGANIZATIONS **/
  get('/organizations',         organizationsController.index),
  get('/organizations/:id',     organizationsController.show),
  post('/organizations/create', organizationsController.create),
  post('/organizations/update', organizationsController.update),
  post('/organizations/delete', organizationsController.delete),

  /** USERS **/
  get('/users',            usersController.index),
  get('/users/info/:id',   usersController.info),
  post('/users/create',    usersController.create),
  post('/users/update',    usersController.update),
  post('/users/delete',    usersController.delete),
  post('/users/login',     usersController.login), 

  /** POSTS **/
  get('/posts',            postsController.index),
  get('/posts/:id',        postsController.show),
  post('/posts/create',    postsController.create),
  post('/posts/update',    postsController.update),
  post('/posts/delete',    postsController.delete),

  /** SETTINGS **/
  get('/settings',         settingsController.index),
  post('/settings/create', settingsController.create),
  post('/settings/update', settingsController.update),
  post('/settings/delete', settingsController.delete),

  /** 404 **/
  get('/*', notfound),
));
