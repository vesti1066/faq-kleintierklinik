import 'css/wow.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Data from '../dist/data.json';

$('.card.bg-success').mouseenter(function (event) {
  let current = event.currentTarget;
  $(current).children().eq(0).addClass("hidden");
  $(current).children().eq(1).removeClass('hidden');
});

$('.card.bg-success').mouseleave(function (event) {
  let current = event.currentTarget;
  $(current).children().eq(1).addClass("hidden");
  $(current).children().eq(0).removeClass('hidden');
});

$('.card.bg-success').click(function (event) {
  let id = $(event.currentTarget).attr('id');
  console.log(id);
  window.location = id + '.html';

})


$('#previous').click(function (event) {
  window.location = "index.html"
});


let score = 0
// bonhommes de satisfactions 

$('.fa-frown').click(function () {
  $(this).toggleClass('sadClicked');
  $(this).siblings().removeClass('mehClicked happyClicked d-none');
  score--;
  console.log(score)



});

$('.fa-meh').click(function () {
  $(this).toggleClass('mehClicked');
  $(this).siblings().removeClass('sadClicked happyClicked d-none');


});

$('.fa-smile').click(function () {
  $(this).toggleClass('happyClicked');
  $(this).siblings().removeClass('mehClicked sadClicked d-none');
  score++;
  console.log(score)

})



$('.collapse').on('shown.bs.collapse', function () {
  $(this).parent().find(".quest_icon").removeClass("fa-plus").addClass("fa-minus");
}).on('hidden.bs.collapse', function () {
  $(this).parent().find(".quest_icon").removeClass("fa-minus").addClass("fa-plus");
});


$('div.list-group button').click(function (event) {
  let id = $(event.currentTarget).attr('id');
  console.log(id);
  window.location = id + '.html';
})

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let sn = getParameterByName('search');
let re = new RegExp(sn, 'i');
let dataFilter = Data.filter(d => d.title.match(re));

if (dataFilter.length <= 0) {
  $('#search-results').append(`
  <p class='text-center'>  <i class="fas fa-cat"></i>
   Désolé. Le mot '${sn}' n'a donné aucun résultat.
  <i class="fas fa-dog"></i> 
  </p>
  `);
} else {

  dataFilter.forEach(d => $('#search-results').append(

    `
    <div class="mb-3 card">
    <div data-target="#collapse-${d.id}" data-toggle="collapse" class="question btn bg-white card-header"
      id="heading-${d.id}">
      <h5 class="text-center mb-0"><i class="quest_icon mt-2 float-right fas fa-plus"></i>
        <button class=" btn font-weight-bold collapsed" aria-expanded="false" aria-controls="collapseTwo">
        ${d.title}
        </button>
      </h5>
    </div>
    <div id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
    <div class="card-body">
      <p>${d.answer}</p>
      <br>
      <h5 class="mb-3">Cela a t-il répondu a votre question ?</h5>
      <i class="far fa-frown fa-3x pr-3"></i><i class="far fa-meh fa-3x pr-3"></i><i
        class="far fa-3x fa-smile "></i>
      <div class="d-none mt-2">
        <p class="font-weight-bold">Merci pour votre Feedback !</p>
      </div>
    </div>
  </div>`

  ))

};




  // $('#search-results').append(Data.forEach(d => d.answer));