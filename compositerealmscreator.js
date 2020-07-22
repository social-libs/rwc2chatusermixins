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
