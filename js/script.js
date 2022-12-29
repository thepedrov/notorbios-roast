var profiles = [
  // Profiles from: https://randomuser.me/
  { name: 'Kent Watkins', srcPhoto: 'kent.jpg' },
  { name: 'Lesa Wallace', srcPhoto: 'lesa.jpg' },
  { name: 'Liam Campbell', srcPhoto: 'liam.jpg' },
  { name: 'Natalie Hansen', srcPhoto: 'natalie.jpg' }
];

var profilesAsRoaster = [];

var profilesAsRoastee = [];

$(document).ready(function () {
  $('#btnRoast').click(function () {
    if (profilesAsRoaster.length == profiles.length) {
      $('.vertical-center').remove();
      jQuery('<div>', { id: 'end-roast' }).appendTo('body');
      return;
    }

    $('#nameRoaster').text('');
    $('#nameRoastee').text('');

    jQuery('<div>', { id: 'random-roast' }).appendTo('body');

    $('#photoRoaster').attr('src', 'images/drum.gif');
    $('#photoRoastee').attr('src', 'images/drum.gif');

    $('#audioDrums')[0].currentTime = 0;
    $('#audioDrums')[0].play();

    setTimeout(showRoast, 4500);

    var indexRoaster;
    var indexRoastee;

    while (true) {
      indexRoaster = Math.floor(Math.random() * profiles.length);
      indexRoastee = Math.floor(Math.random() * profiles.length);

      if (indexRoaster != indexRoastee && !profilesAsRoaster.includes(indexRoaster) && !profilesAsRoastee.includes(indexRoastee)) {
        profilesAsRoaster.push(indexRoaster);
        profilesAsRoastee.push(indexRoastee);
        break;
      }
    }
  });
});

function showRoast() {
  $('#random-roast').remove();

  $('#nameRoaster').text(profiles[profilesAsRoaster[profilesAsRoaster.length - 1]].name);
  $('#photoRoaster').attr('src', 'images/profiles/' + profiles[profilesAsRoaster[profilesAsRoaster.length - 1]].srcPhoto);

  $('#nameRoastee').text(profiles[profilesAsRoastee[profilesAsRoastee.length - 1]].name);
  $('#photoRoastee').attr('src', 'images/profiles/' + profiles[profilesAsRoastee[profilesAsRoastee.length - 1]].srcPhoto);

  $(window).scrollTop($('#roaster').offset().top);

  setTimeout(function() {
    $(window).scrollTop($('#roastee').offset().top);
  }, 1500);
}