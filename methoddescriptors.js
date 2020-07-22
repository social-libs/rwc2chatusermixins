function createMethodDescriptors (execlib, methoddescriptors, vararglib, createCompositeRealms) {
  'use strict';

  function methodDescriptors (rwcrealms, chatrealms) {
    return vararglib.realmizeMethodDescriptors(methoddescriptors.user.user, createCompositeRealms(rwcrealms, chatrealms));
  }

  return methodDescriptors;
}
module.exports = createMethodDescriptors;
