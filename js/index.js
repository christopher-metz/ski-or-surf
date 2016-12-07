(function() {
  'use strict';

  $('.button-collapse').sideNav();

  const option = 'surf';

  if (option === 'surf') {
    const $body = $('body');
    const $h1 = $('h1');
    $body.prop('style', 'background-image: url(https://static.pexels.com/photos/32318/pexels-photo.jpg)');
    $h1.text('Go Surfing at Twin Rivers Dude!');
  }
})();
