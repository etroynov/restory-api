const { router, get } = require('microrouter');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

async function setup (handler) {
  await app.prepare();
  return handler;
}

module.exports = setup(router(
  get('/pages', (req, res) => app.render(req, res, '/pages', req.params)),

  get('*', (req, res) => handle(req, res))
));
