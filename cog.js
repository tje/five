var teeth = 12;
var trackList = [
    { title: 'Miscommunicate', duration: 259 }
  , { title: 'Viscous Black Venom', duration: 231 }
  , { title: 'Here\'s Your Fucking Remix, Asshole', duration: 204, liner: 'Remix of ANgR. MgMT. &ndash; Distant Light, Distant Warmth' }
  , { title: 'Iron Piston', duration: 196 }
  , { title: 'Muse', duration: 306 }
  , { title: 'Dusty Beef', duration: 169 }
  , { title: 'Coffin', duration: 262 }
  , { title: 'Eyes', duration: 173, liner: 'Co-written with Kris Norris, bass guitar provided by Ryan Schremp' }
  , { title: 'Untitled (216e_comp)', duration: 306 }
  , { title: 'Untitled (264)', duration: 294 }
  , { title: 'Untitled (235)', duration: 482 }
];

$(document).ready(function () {
  $('*[data-teeth]').each(function () {
    for (var i = 0; i < teeth; i++) {
      $(this).append('<div class="tooth" />');
    }
  });
  var runTime = 0;
  $(trackList).each(function () {
    var $el = $('<li />');
    runTime += this.duration;

    var ts = [Math.floor(this.duration / 60), this.duration % 60];
    ts[1] = (ts[1] < 10 ? '0' : '') + ts[1];
    $el.text(this.title);
    $('<small />').addClass('timestamp').text(ts.join(':')).appendTo($el);
    if (this.hasOwnProperty('liner')) {
      $('<small />').addClass('liner').html(this.liner).appendTo($el);
    }
    $el.appendTo('#tracklist');
  });

  var runTs = [Math.floor(runTime / 60), runTime % 60];
  runTs[1] = (runTs[1] < 10 ? '0' : '') + runTs[1];
  $('#runtime').text(runTs.join(':'));
});
