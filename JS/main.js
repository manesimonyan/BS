"use strict";
// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});


// ************fixed menu*************

window.onscroll = function () {
	var scrolled = document.scrollTop || document.documentElement.scrollTop;

    if(scrolled > 100){
        document.getElementById('header').style.position = "fixed";
        document.getElementById('header').style.background = "rgba(139, 195, 74, 0.32)";
    }else if(scrolled < 100){
         document.getElementById('header').style.background = "transparent";
      }
}

// **************anchor*************

$(document).ready(function(){
 $("a").on("click", function(e){
 var a = $(e.target).attr("data-id")
 var block = "#" + a;
 var ofs = $(block).offset().top
 $("html,body").animate({scrollTop: ofs-45}, 1000);
 $("#nav").toggleClass("active");
   $('body').toggleClass('over');
})
})

$(document).ready(function(){
 $("#nav ul li a").on("click", function(e){
 var button = $(e.target).attr("data-id")
 var block = "#" + button;
 var ofs = $(block).offset().top;
 $("html,body").animate({scrollTop: ofs-45}, 1000)
})
})


// ***********phone menu**********
$(document).ready(function(){
  $(".phonemenu button").click(function(){
   $("#nav").toggleClass("active");
   $('body').toggleClass('over');
  })
})

$(document).ready(function(){

  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  $('#input2').on("input", function(){
        if(reg.test($(this).val())){
            $(this).css('background', '#578b57e6');
            $('#button').removeAttr('disabled',false);
        } else {
            $(this).css('background', ' #ee7373d1');
            $('#button').attr('disabled',true);
        }
    })
   $('#input1').on("input", function(){
         if(!$(this).val()){
           $(this).css('background', ' #ee7373d1');
            $('#button').attr('disabled',true);
         }else{
          $(this).css('background', '#578b57e6');
            $('#button').removeAttr('disabled',false);
         }
   })
   $('#textarea').on("input", function(){
         if(!$(this).val()){
           $(this).css('background', ' #ee7373d1');
            $('#button').attr('disabled',true);
         }else{
          $(this).css('background', '#578b57e6');
            $('#button').removeAttr('disabled',false);
         }
    })

})



$(document).ready(function(){
  $(window).on('scroll',function(){
    console.log($(window).scrollTop());
  if($(window).scrollTop() > $('.bg5').offset().top){
    $('.col-lg-3').addClass('scale-up-ver-center')
  }
})
})





