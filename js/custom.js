$(document).ready(function() {


   // NAVIGRATION ----------
   window.addEventListener("scroll", function(){
      var header = document.getElementById("headerThree");
      header.classList.toggle("fixed-top", window.scrollY > 100);
   })

   $("#showsidenav, #hamburger").click(function(e){
      e.preventDefault();
      $("#sidenav").toggleClass("show");
   });

   $("#sidenav i.fa-angle-down").click(function(){
      $(this).next().toggle('fast');
      $(this).toggleClass('active');
      $(this).siblings().toggleClass('active-a');
   });



   $(".remove-item").click(function() {
      $(this).parents(".cart-box").toggle();
   });



   $("#trendyProductSection .switcher").click(function() {
      $("#trendyProductSection .switcher").removeClass("active");
      $(this).addClass("active");
   });




   /*-- SCROLL UP --*/
   $(".scroll-up").fadeOut();
   $(window).scroll(function() {
      if ( $(this).scrollTop()>100 ) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function() {
      $("html").animate({scrollTop: 0}, 1000);
      return false;
   });




   var owl = $('#homeSection .owl-carousel');
   owl.owlCarousel({
      animateOut: 'fadeOut',
      loop:true,
      nav:true,
      margin:0,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive:{
         0:{
            items:1
         }
      }
   });



   var owl = $('#trendyProductSection .owl-carousel');
   owl.owlCarousel({
      animateOut: 'fadeOut',
      loop:false,
      nav:true,
      margin: 0,
      autoplay:false,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      responsive:{
         0: {
            items:2
         },
         552: {
            items:2
         },
         768: {
            items:3
         },
         992: {
            items:4
         }
      }
   });



   $('#accordion .collapse').on('shown.bs.collapse', function () {
      $(this).parent().addClass('active');
      $(this).siblings(".indicator").css({
         background: "white"
      });
      $(this).siblings(".indicator").children(".fal").removeClass("fa-plus");
      $(this).siblings(".indicator").children(".fal").addClass("fa-minus");
   });
   $('#accordion .collapse').on('hidden.bs.collapse', function () {
      $(this).parent().removeClass('active');
      $(this).siblings(".indicator").css({
         background: "#fafafa"
      });
      $(this).siblings(".indicator").children(".fal").removeClass("fa-minus");
      $(this).siblings(".indicator").children(".fal").addClass("fa-plus");
   });



   $('.xzoom, .xzoom-gallery').xzoom({zoomWidth: 400, title: true, tint: '#333', Xoffset: 15});
   $('.xzoom2, .xzoom-gallery2').xzoom({position: '#xzoom2-id', tint: '#cc9966'});
   $('.xzoom3, .xzoom-gallery3').xzoom({position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden'});
   $('.xzoom4, .xzoom-gallery4').xzoom({tint: '#000000b3', Xoffset: 15});
   $('.xzoom5, .xzoom-gallery5').xzoom({tint: '#000000b3', Xoffset: 15});

   //Integration with hammer.js
   var isTouchSupported = 'ontouchstart' in window;

   if (isTouchSupported) {
       //If touch device
       $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
           var xzoom = $(this).data('xzoom');
           xzoom.eventunbind();
       });

       $('.xzoom, .xzoom2, .xzoom3').each(function() {
           var xzoom = $(this).data('xzoom');
           $(this).hammer().on("tap", function(event) {
               event.pageX = event.gesture.center.pageX;
               event.pageY = event.gesture.center.pageY;
               var s = 1, ls;

               xzoom.eventmove = function(element) {
                   element.hammer().on('drag', function(event) {
                       event.pageX = event.gesture.center.pageX;
                       event.pageY = event.gesture.center.pageY;
                       xzoom.movezoom(event);
                       event.gesture.preventDefault();
                   });
               }

               xzoom.eventleave = function(element) {
                   element.hammer().on('tap', function(event) {
                       xzoom.closezoom();
                   });
               }
               xzoom.openzoom(event);
           });
       });

   $('.xzoom4').each(function() {
       var xzoom = $(this).data('xzoom');
       $(this).hammer().on("tap", function(event) {
           event.pageX = event.gesture.center.pageX;
           event.pageY = event.gesture.center.pageY;
           var s = 1, ls;

           xzoom.eventmove = function(element) {
               element.hammer().on('drag', function(event) {
                   event.pageX = event.gesture.center.pageX;
                   event.pageY = event.gesture.center.pageY;
                   xzoom.movezoom(event);
                   event.gesture.preventDefault();
               });
           }

           var counter = 0;
           xzoom.eventclick = function(element) {
               element.hammer().on('tap', function() {
                   counter++;
                   if (counter == 1) setTimeout(openfancy,300);
                   event.gesture.preventDefault();
               });
           }

           function openfancy() {
               if (counter == 2) {
                   xzoom.closezoom();
                   $.fancybox.open(xzoom.gallery().cgallery);
               } else {
                   xzoom.closezoom();
               }
               counter = 0;
           }
       xzoom.openzoom(event);
       });
   });

   $('.xzoom5').each(function() {
       var xzoom = $(this).data('xzoom');
       $(this).hammer().on("tap", function(event) {
           event.pageX = event.gesture.center.pageX;
           event.pageY = event.gesture.center.pageY;
           var s = 1, ls;

           xzoom.eventmove = function(element) {
               element.hammer().on('drag', function(event) {
                   event.pageX = event.gesture.center.pageX;
                   event.pageY = event.gesture.center.pageY;
                   xzoom.movezoom(event);
                   event.gesture.preventDefault();
               });
           }

           var counter = 0;
           xzoom.eventclick = function(element) {
               element.hammer().on('tap', function() {
                   counter++;
                   if (counter == 1) setTimeout(openmagnific,300);
                   event.gesture.preventDefault();
               });
           }

           function openmagnific() {
               if (counter == 2) {
                   xzoom.closezoom();
                   var gallery = xzoom.gallery().cgallery;
                   var i, images = new Array();
                   for (i in gallery) {
                       images[i] = {src: gallery[i]};
                   }
                   $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
               } else {
                   xzoom.closezoom();
               }
               counter = 0;
           }
           xzoom.openzoom(event);
       });
   });

   } else {
       //If not touch device

       //Integration with fancybox plugin
       $('#xzoom-fancy').bind('click', function(event) {
           var xzoom = $(this).data('xzoom');
           xzoom.closezoom();
           $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
           event.preventDefault();
       });

       //Integration with magnific popup plugin
       $('#xzoom-magnific').bind('click', function(event) {
           var xzoom = $(this).data('xzoom');
           xzoom.closezoom();
           var gallery = xzoom.gallery().cgallery;
           var i, images = new Array();
           for (i in gallery) {
               images[i] = {src: gallery[i]};
           }
           $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
           event.preventDefault();
       });
   }






});
