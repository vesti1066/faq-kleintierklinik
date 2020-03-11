import 'css/wow.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



$('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".fas").removeClass("fa-plus").addClass("fa-times");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".fas").removeClass("fa-times").addClass("fa-plus");
    });