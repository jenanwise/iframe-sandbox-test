(function() {
  document.querySelector('#new-tab').addEventListener('click', function() {
    window.open('window.html');
  });
  document.querySelector('#top-nav').addEventListener('click', function() {
    window.top.location.assign('window.html');
  });
})();
