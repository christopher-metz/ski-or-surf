(function() {
  'use strict';

  $('.button-collapse').sideNav();

  const option = 'home';
  const $body = $('body');
  const $h1 = $('h1');
  const $buttoncollapse = $('.button-collapse');

  if (option === 'surf') {
    $body.prop('style', 'background-image: url(https://www.outsideonline.com/sites/default/files/styles/img_850x480/public/final-shot-pnw-surfing_h.jpg?itok=9iCsvMv5)');
    $h1.text('Go Surfing at Twin Rivers Dude!');
    $h1.addClass('grey-text text-darken-2');
    $buttoncollapse.addClass('grey-text text-darken-2');
  }
  else if (option === 'ski') {
    $body.prop('style', 'background-image: url(https://images.pexels.com/photos/47356/freerider-skiing-ski-sports-47356.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)');
    $h1.text('Grab the sticks and head to Crystal!');
    $h1.addClass('grey-text text-darken-2');
    $buttoncollapse.addClass('grey-text text-darken-2');
  }
  else if (option === 'sickSkiing') {
    $body.prop('style', 'background-image: url(https://www.skis.com/on/demandware.static/-/Sites-Skis-Library/default/dw83fb8f05/images/images%20for%20content/Skiing-deep-powder.gif)');
    $h1.text('Call In Siiiick! Grab The Snorkel! Go Skiing At Crystal!');
    $h1.addClass('grey-text text-darken-2');
    $buttoncollapse.addClass('grey-text text-darken-2');
  }
  else if (option === 'work') {
    $body.prop('style', 'background-image: url(http://2.design-milk.com/images/2014/01/OXYMORON-Desk-Anna-Lotova-1.jpg)');
    $h1.text('Go To Work. It\'s not that good out there.');
    $h1.addClass('grey-text text-darken-2');
    $h1.prop('style=margin-top: 0.5rem');
    $buttoncollapse.addClass('grey-text text-darken-2');
  }
  else {
    $body.prop('style', 'background-image: url(http://i4.mirror.co.uk/incoming/article7745698.ece/ALTERNATES/s1200/Man-watching-football-on-television.jpg)');
    $h1.text('Stay Home. It\'s not that good out there.');
    $h1.addClass('grey-text text-darken-2');
    $h1.prop('style=margin-top: 0.5rem');
    $buttoncollapse.addClass('grey-text text-darken-2');
  }
})();
