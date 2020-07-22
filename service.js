function createUserServiceMixin (execlib, methoddescriptors, vararglib) {
  'use strict';

  function UserServiceMixin () {
  }
  UserServiceMixin.prototype.destroy = function () {};
  UserServiceMixin.addMethods = function () {
  }

  return UserServiceMixin;
}
module.exports = createUserServiceMixin;
