function createWebLib (execlib, methoddescriptors, vararglib, createCompositeRealms) {
  'use strict';

  return {
    methoddescriptors: {
      user: require('./methoddescriptors')(execlib, methoddescriptors, vararglib, createCompositeRealms)
    }
  };
}
module.exports = createWebLib;
