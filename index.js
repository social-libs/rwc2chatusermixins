function createLib (execlib) {
  'use strict';
  return execlib.loadDependencies('client', ['social:rwc2chatmethoddescriptors:lib', 'allex:varargfunctionhandler:lib'], require('./libindex').bind(null, execlib));
}
module.exports = createLib;
