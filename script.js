/*=============== NAVBAR ===============*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

/*=============== GALLERY ===============*/
document.addEventListener("DOMContentLoaded", function() {

    document.querySelector('.button').click(function(){
        document.querySelector(this).addClass('active').siblings().removeClass('active');

        var filter = document.querySelector(this).attr('data-filter')

        if(filter == 'all'){
            document.querySelector('.gallery .image').show(400);
        }
        else{
            document.querySelector('.gallery .image').not('.' +filter).hide(200);
            document.querySelector('.gallery .image').filter('.' +filter).show(200);
        }

    });

    document.querySelector('.gallery').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true,
        }
    });

});
