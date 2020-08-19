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
    window.location = "index.html"
  });


  // bonhommes de satisfactions 

  $('.fa-frown').click(function(){
    $(this).toggleClass('sadClicked');
    $(this).siblings().removeClass('mehClicked happyClicked d-none');
    

  });

  $('.fa-meh').click(function(){
    $(this).toggleClass('mehClicked');
    $(this).siblings().removeClass('sadClicked happyClicked d-none');

  });

  $('.fa-smile').click(function(){
    $(this).toggleClass('happyClicked');
    $(this).siblings().removeClass('mehClicked sadClicked d-none');

  });

  

$('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".quest_icon").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function(){
      $(this).parent().find(".quest_icon").removeClass("fa-minus").addClass("fa-plus");
    });


    $('div.list-group button').click(function (event) {
      let id = $(event.currentTarget).attr('id');
      console.log(id);
     window.location = id+'.html';
   })
