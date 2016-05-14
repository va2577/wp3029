'use strict';

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('a'), function (node) {
      if (node.href && node.href.indexOf(location.hostname) < 0) node.setAttribute('target', '_blank');
    });
  });
})();