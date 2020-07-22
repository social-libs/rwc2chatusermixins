function createLib (execlib, methoddescriptors, vararglib) {
  'use strict';

  var createCompositeRealms = require('./compositerealmscreator')(execlib);

  return execlib.lib.extend({
    mixins: {
      service: require('./service')(execlib, methoddescriptors, vararglib),
      user: require('./user')(execlib, methoddescriptors, vararglib, createCompositeRealms)
    }
  }, require('./webindex.js')(execlib, methoddescriptors, vararglib, createCompositeRealms));

}
module.exports = createLib;
