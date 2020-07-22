(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var lR = ALLEX.execSuite.libRegistry,
  createCompositeRealms = require('./compositerealmscreator')(ALLEX);

lR.register('social_rwc2chatusermixinslib', require('./webindex')(ALLEX, lR.get('social_rwc2chatmethoddescriptorslib'), lR.get('allex_varargfunctionhandlerlib'), createCompositeRealms));

},{"./compositerealmscreator":2,"./webindex":4}],2:[function(require,module,exports){
function createCreateCompositeRealms (execlib) {
  'use strict';

  var lib = execlib.lib;

  function mismatchThrow () {
    throw new lib.Error('RWC_AND_CHAT_REALMS_HAVE_TO_MATCH', 'Both rwcrealms and chatrealms have to be either Arrays of same length or both Strings');
  }

  function compositeRealmer (chatrealms, rwcrealm, rwcindex) {
    return rwcrealm+'2'+chatrealms[rwcindex];
  }

  function createCompositeRealms (rwcrealms, chatrealms) {
    var compositerealms;
    if (lib.isArray(rwcrealms)) {
      if (!(lib.isArray(chatrealms) && chatrealms.length===rwcrealms.length)) {
        mismatchThrow();
      }
      compositerealms = rwcrealms.map(compositeRealmer.bind(null, chatrealms));
      console.log('compositerealms', compositerealms)
      return compositerealms;
    }
    if (!lib.isString(rwcrealms)) {
      mismatchThrow();
    }
    if (!lib.isString(chatrealms)) {
      mismatchThrow();
    }
    compositerealms = rwcrealms+'2'+chatrealms;
    console.log('compositerealms', compositerealms);
    return compositerealms;
  }


  return createCompositeRealms;
}
module.exports = createCreateCompositeRealms;

},{}],3:[function(require,module,exports){
function createMethodDescriptors (execlib, methoddescriptors, vararglib, createCompositeRealms) {
  'use strict';

  function methodDescriptors (rwcrealms, chatrealms) {
    return vararglib.realmizeMethodDescriptors(methoddescriptors.user.user, createCompositeRealms(rwcrealms, chatrealms));
  }

  return methodDescriptors;
}
module.exports = createMethodDescriptors;

},{}],4:[function(require,module,exports){
function createWebLib (execlib, methoddescriptors, vararglib, createCompositeRealms) {
  'use strict';

  return {
    methoddescriptors: {
      user: require('./methoddescriptors')(execlib, methoddescriptors, vararglib, createCompositeRealms)
    }
  };
}
module.exports = createWebLib;

},{"./methoddescriptors":3}]},{},[1]);
