$('.btn-iniciar').click(function () {
    $('.tela-1').fadeOut();
    setTimeout(function () {
        $('.tela-2').fadeIn();
    }, 500)
    $('.msg-1').fadeIn()
})

$('.btn-proximo').click(function () {
    let telaAtual = $(this).parents('.tela');
    let next = $(this).parents('.tela').next();
    console.log(telaAtual)
    if(next.length>0){
        telaAtual.fadeOut()
        setTimeout(()=>{
            next.fadeIn()
            console.log(next.hasClass('tela-3'))
            if(next.hasClass('tela-3')){
                setTimeout(() => {
                    $('.tela-3 .indio_small').addClass('anim');
                }, 1500);
            }
            if(next.hasClass('tela-4')){
                setTimeout(() => {
                    $('.tela-4 .indio_small').addClass('anim');
                }, 1500);
            }
        }, 500)
    } else {
        console.log('Ops, não há mais telas!')
    }
})

$('.btn-anterior').click(function () {
    let telaAtual = $(this).parents('.tela');
    let prev = $(this).parents('.tela').prev();
    console.log(telaAtual)
    if(prev.length>0){
        telaAtual.fadeOut()
        setTimeout(()=>{
            prev.fadeIn()
            console.log(prev.hasClass('tela-3'))
            if(prev.hasClass('tela-3')){
                setTimeout(() => {
                    $('.tela-3 .indio_small').addClass('anim');
                }, 1500);
            }
            if(prev.hasClass('tela-4')){
                setTimeout(() => {
                    $('.tela-4 .indio_small').addClass('anim');
                }, 1500);
            }
        }, 500)
    } else {
        console.log('Ops, não há mais telas!')
    }
})

$('.btn-reiniciar').click(function(){
    $('.tela').fadeOut()
    setTimeout(() => {
        $('.tela-1').fadeIn()
    }, 500);
})

// Aqui você adiciona ou remove os containers pra onde devem ir os cards
var containers = [
    // Container com os cards que serão realocados
    document.querySelector("#cardPile"),  
    // Containers que irão receber os cards
    document.querySelector("#slot-1"),
  ];  
  var scrollable = true;
  
  var listener = function(e) {
    console.log(scrollable)
      if (! scrollable) {
          e.preventDefault();
      }
  }
  
  document.addEventListener('touchmove', listener, { passive:false });
  
  // drag n drop
  
  dragula({
    containers: containers,
    revertOnSpill: true,
    direction: 'vertical',
    accepts: function (el, target, source, sibling) {
        return el.dataset.target == target.id; 
    }
  }).on('drag', function(el, source) {
    // On mobile this prevents the default page scrolling while dragging an item.
    scrollable = false;
  }).on("drop", function(){
    scrollable = true;    
    $('.tela-5').fadeOut()
    setTimeout(()=>{$('.tela-6').fadeIn()}, 500)
  }).on("cancel", function(){
    scrollable = true;

  });