         $('.fa-times').click(function() {
             $(this).parent().slideUp(250);
         });
         $('.topic, .crew-topic, .topic-media, .motive').click(function() {
             var Top = $(this);
             var ThisRef = this;

             if ($(this).next().is(':visible')) {

                 $(this).next().slideUp();

             } else {

                 $('html,body').animate({
                         scrollTop: Top.offset().top
                     },
                     300);

                 $(this).next().slideDown();

             }
             setTimeout(function() {
                 $('.topic, .crew-topic, .motive').not(ThisRef).each(function() {
                     $(this).next().fadeOut();
                 });
             }, 310);




             /*  $('.topic, .crew-topic, .motive').not(this).each(function() {
                   $(this).next().slideUp();
               }); */




         })
         $('.button').click(function() {
             $('.portfolio').slideDown();
         });
         $('.fa-chevron-circle-down').click(function() {
             $("body").css("overflow", "scroll");

             $('.portfolio').slideUp();
         });
