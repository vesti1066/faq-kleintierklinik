import 'css/wow.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

  $('.card.bg-success').mouseenter(function( event ) {
    let current = event.currentTarget;
    $( current ).children().eq(0).addClass("hidden");
    $( current ).children().eq(1).removeClass('hidden');
  });

  $('.card.bg-success').mouseleave(function( event ) {
    let current = event.currentTarget;
    $( current ).children().eq(1).addClass("hidden");
    $( current ).children().eq(0).removeClass('hidden');
  });

  $('.card.bg-success').click(function (event) {
     let id = $(event.currentTarget).attr('id');
     console.log(id);
    window.location = id+'.html';
  })

  $('#previous').click(function (event) {
    history.back();
  });

