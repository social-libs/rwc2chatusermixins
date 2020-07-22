var lR = ALLEX.execSuite.libRegistry,
  createCompositeRealms = require('./compositerealmscreator')(ALLEX);

lR.register('social_rwc2chatusermixinslib', require('./webindex')(ALLEX, lR.get('social_rwc2chatmethoddescriptorslib'), lR.get('allex_varargfunctionhandlerlib'), createCompositeRealms));
