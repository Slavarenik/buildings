$(document).ready(function(){

  var stepItem = $('.step-item');
  var currStep = 0;

  $('.btn').on('click', function(e){
    e.preventDefault()
    stepToggle($(this))
  })

  function stepToggle(el){
    this.el = el

    if(el.hasClass('continue') && currStep <= stepItem.length){
      currStep++
    } else if(el.hasClass('back') && currStep >= 0){
      currStep--
    }

    stepItem.map(function(i, item){
      if(i == currStep && i < stepItem.length){
        $('.step-item').fadeOut(100).promise().done(function(){
            $('.step-item:eq('+ i +')').fadeIn(100)
        });
      }
    })
  }

})
