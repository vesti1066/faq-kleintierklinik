import 'css/wow.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



$('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".quest_icon").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".quest_icon").removeClass("fa-minus").addClass("fa-plus");
    });