(() => {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    Array.prototype.forEach.call(document.querySelectorAll('a'), (node) => {
      if (node.href && node.href.indexOf(location.hostname) < 0) node.setAttribute('target', '_blank');
    });
  });
})();
