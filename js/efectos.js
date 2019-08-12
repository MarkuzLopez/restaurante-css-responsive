$(document).ready(function () {
    // animacion de menu  en el header
    $('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 2000 + (index * 500));
    });
    
    // Efecto de header con el texto
    // validar que solo se pueda aplicar el efecto en modo escritorio  
    if($(window).width() > 800)  { 
        // acceder al tag y a la clase y 
        $('header .textos').css({
            opacity: 0,
            margintop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            margintop: '-52px'
        }, 1800)
    }
});
