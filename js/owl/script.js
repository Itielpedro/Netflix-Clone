$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function assistir(){
    window.open('flash.html', '_self')
}

function abrir(){
    document.getElementById('modal').style.top = 0
}

function fechar(){
    document.getElementById('modal').style.top = -100
}
