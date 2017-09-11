'use strict';

/**
 * Module dependencies
 */
var peers = require('../controllers/peers.server.controller'),
  torrentsPolicy = require('../policies/torrents.server.policy');


module.exports = function (app) {
  // Articles collection routes
  app.route('/api/my/seeding').all(torrentsPolicy.isAllowed)
    .get(peers.getMySeeding);

  app.route('/api/my/downloading').all(torrentsPolicy.isAllowed)
    .get(peers.getMyDownloading);

  app.route('/api/my/warning').all(torrentsPolicy.isAllowed)
    .get(peers.getMyWarning);

  app.route('/api/:userId/seeding').all(torrentsPolicy.isAllowed)
    .get(peers.getUserSeeding);

  app.route('/api/:userId/downloading').all(torrentsPolicy.isAllowed)
    .get(peers.getUserDownloading);

  app.route('/api/:userId/warning').all(torrentsPolicy.isAllowed)
    .get(peers.getUserWarning);

};
