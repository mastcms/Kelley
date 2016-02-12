(function() {
  'use strict';

  angular
    .module('kelley')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
