import 'css/wow.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Data from '../dist/data.json';
const axios = require('axios');

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

/*
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

$('#contenu').on('click', '.fa-smile', function() {
  console.log('clicked');
  $(this).toggleClass('happyClicked');
  $(this).siblings().removeClass('mehClicked sadClicked d-none');
  score++;
  console.log(score)
})


$('#contenu').on('click', '.fa-meh', function() {
  $(this).toggleClass('mehClicked');
  $(this).siblings().removeClass('sadClicked happyClicked d-none');
  console.log(score)
})


$('#contenu').on('click', '.fa-frown', function() {
  $(this).toggleClass('sadClicked');
  $(this).siblings().removeClass('mehClicked happyClicked d-none');
  score--;
  console.log(score)
})
*/

$('.plus-minus').on('shown.bs.collapse', '.collapse', function () {
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

      </div>
    </div>
  </div>`

  ))

};



let facturation = Data.filter(d => d.category == 'Facturation');

facturation.forEach(d => $('#facturation_content').append(

  `
  <div class="mb-3 card">
  <div  data-target="#collapse-${d.id}" data-toggle="collapse" class="question btn bg-white card-header"
    id="heading-${d.id}">
    <h5 class="text-center mb-0"><i class="quest_icon mt-2 float-right fas fa-plus"></i>
      <button class=" btn font-weight-bold collapsed" aria-expanded="false" aria-controls="collapseTwo">
      ${d.title}
      </button>
    </h5>
  </div>
  <div data-id="${d.id}" id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
  <div class="card-body">
    <p>${d.answer}</p>
    <br>
    </div>
  </div>
</div>`

))

let divers = Data.filter(d => d.category == 'Divers');

divers.forEach(d => $('#divers_content').append(

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
  <div data-id="${d.id}" id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
  <div class="card-body">
    <p>${d.answer}</p>
    <br>
    </div>
  </div>
</div>`

))

let hospitalisation = Data.filter(d => d.category == 'Hospitalisation');

hospitalisation.forEach(d => $('#hospitalisation_content').append(

  `
  <div class="mb-3 card">
  <div  data-target="#collapse-${d.id}" data-toggle="collapse" class="question btn bg-white card-header"
    id="heading-${d.id}">
    <h5 class="text-center mb-0"><i class="quest_icon mt-2 float-right fas fa-plus"></i>
      <button class=" btn font-weight-bold collapsed" aria-expanded="false" aria-controls="collapseTwo">
      ${d.title}
      </button>
    </h5>
  </div>
  <div data-id="${d.id}" id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
  <div class="card-body">
    <p>${d.answer}</p>
    <br>
    </div>
  </div>
</div>`

))

let info = Data.filter(d => d.category == 'Informations pratiques');
info.forEach(d => $('#informations_content').append(

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
  <div data-id="${d.id}" id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
  <div class="card-body">
    <p>${d.answer}</p>
    <br>
    </div>
  </div>
</div>`

))

let priseencharge = Data.filter(d => d.category == 'Prise en charge');

priseencharge.forEach(d => $('#priseencharge_content').append(

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
  <div data-id="${d.id}" id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
  <div class="card-body">
    <p>${d.answer}</p>
    <br>
    </div>
  </div>
</div>`

))

let retablissement = Data.filter(d => d.category == 'Retablissement');

retablissement.forEach(d => $('#retablissement_content').append(

  `
  <div class="mb-3 card">
  <div  data-target="#collapse-${d.id}" data-toggle="collapse" class="question btn bg-white card-header"
    id="heading-${d.id}">
    <h5 class="text-center mb-0"><i class="quest_icon mt-2 float-right fas fa-plus"></i>
      <button class=" btn font-weight-bold collapsed" aria-expanded="false" aria-controls="collapseTwo">
      ${d.title}
      </button>
    </h5>
  </div>
  <div data-id="${d.id}" id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
  <div class="card-body">
    <p>${d.answer}</p>
    <br>
    </div>
  </div>
</div>`

))

let sejour = Data.filter(d => d.category == 'Sejour');

sejour.forEach(d => $('#sejour_content').append(

  `
  <div class="mb-3 card">
  <div  data-target="#collapse-${d.id}" data-toggle="collapse" class="question btn bg-white card-header"
    id="heading-${d.id}">
    <h5 class="text-center mb-0"><i class="quest_icon mt-2 float-right fas fa-plus"></i>
      <button class=" btn font-weight-bold collapsed" aria-expanded="false" aria-controls="collapseTwo">
      ${d.title}
      </button>
    </h5>
  </div>
  <div data-id="${d.id}" id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
  <div class="card-body">
    <p>${d.answer}</p>
    <br>
    </div>
  </div>
</div>`

))

let bonnepratique = Data.filter(d => d.category == 'Bonnes pratiques');

bonnepratique.forEach(d => $('#bonnepratique_content').append(

  `
  <div class="mb-3 card">
  <div  data-target="#collapse-${d.id}" data-toggle="collapse" class="question btn bg-white card-header"
    id="heading-${d.id}">
    <h5 class="text-center mb-0"><i class="quest_icon mt-2 float-right fas fa-plus"></i>
      <button class=" btn font-weight-bold collapsed" aria-expanded="false" aria-controls="collapseTwo">
      ${d.title}
      </button>
    </h5>
  </div>
  <div data-id="${d.id}" id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
  <div class="card-body">
    <p>${d.answer}</p>
    <br>
    </div>
  </div>
</div>`

))

let consultation = Data.filter(d => d.category == 'Consultation');

consultation.forEach(d => $('#consultation_content').append(

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
  <div data-id="${d.id}" id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
  <div class="card-body">
    <p>${d.answer}</p>
    <br>
    </div>
  </div>
</div>`

))



let recurrent = Data.filter(d => d.id == 'idk');

recurrent.forEach(d => $('#recurrent_content').append(

  `
  <div class="mb-3 card">
  <div  data-target="#collapse-${d.id}" data-toggle="collapse" class="question btn bg-white card-header"
    id="heading-${d.id}">
    <h5 class="text-center mb-0"><i class="quest_icon mt-2 float-right fas fa-plus"></i>
      <button class=" btn font-weight-bold collapsed" aria-expanded="false" aria-controls="collapseTwo">
      ${d.title}
      </button>
    </h5>
  </div>
  <div data-id="${d.id}" id="collapse-${d.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#heading-${d.id}">
  <div class="card-body">
    <p>${d.answer}</p>
    <br>
    </div>
  </div>
</div>`

))
/*
function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
      if (err) {
          return cb && cb(err)
      }
      try {
          const object = JSON.parse(fileData)
          return cb && cb(null, object)
      } catch(err) {
          return cb && cb(err)
      }
  })
}


$('.plus-minus').on('shown.bs.collapse','.collapse', function () {

  jsonReader('../dist/data.json', (err, customer) => {
    if (err) {
        console.log('Error reading file:',err)
        return
    }
// increase customer order count by 1
    customer.seen += 1
fs.writeFile('../dist/data.json', JSON.stringify(customer), (err) => {
        if (err) console.log('Error writing file:', err)
    })
})
  
});



const data = JSON.parse(fs.readFileSync("../dist/data.json"));
console.log(data)
*/


// $('#search-results').append(Data.forEach(d => d.answer));

$('.plus-minus').on('shown.bs.collapse', '.collapse', function () {

  let idQuestion = $(this).data('id')
  console.log($(this).data('id'))
  console.log(this)

  axios.get('https://kleintierklinik-stats-service.herokuapp.com/'+idQuestion)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });


});