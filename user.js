function createUserUserMixin (execlib, methoddescriptors, vararglib, createCompositeRealms) {
  'use strict';

  var lib = execlib.lib;

  function RWC2ChatUserUserMixin () {
  }
  RWC2ChatUserUserMixin.prototype.destroy = function () {
  };

  function addMethodsForCompositeRealm (klass, compositerealm) {
    compositerealm = 'On'+compositerealm;
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'initiateRelation', 3, 0, null, compositerealm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'acceptRelation', 3, 0, null, compositerealm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'rejectRelation', 1, 0, null, compositerealm);
  }

  RWC2ChatUserUserMixin.addMethods = function (klass, rwcrealms, chatrealms) {
    var compositerealms = createCompositeRealms(rwcrealms, chatrealms);
    if (!lib.isArray(compositerealms)) {
      addMethodsForCompositeRealm(klass, compositerealms);
      return;
    }
    compositerealms.forEach(addMethodsForCompositeRealm.bind(null, klass));
    klass = null;
  };

  return RWC2ChatUserUserMixin;
}
module.exports = createUserUserMixin;
