
            var url = [
            	'images/2017/Group-Photo-2017.jpg',
            	 'images/data/Bacteria-fragmentation.png',
            	'images/data/super.jpg',
              'images/data/merge-epi.jpg'
            ]
            var time;
            var index = 0;
            var currentOption;
            Timer();
            $('.slide a').click(function(){
              var options = ($(this).attr('id'));
              currentOption = options;
              startTime();

     	      $('.slide a').not(options).each(function(){
	              $(this).children().removeClass('fa fa-circle');
	              $(this).children().addClass('fa fa-circle-o');
              });
              $('#'+options).children().addClass('fa fa-circle');
              
              $('.fade').fadeIn(500);
              $('#header0').children().fadeOut(500);
              setTimeout(function(){
              	 
              	 if (options.toString() == 'circleOne'){
                   var background = $('#main > section.one');
              	 	background.css('background-image', 'url('+url[0]+')');
                    background.css('background-size', 'cover');
                   
              	 	$('#header-1').fadeIn();
              	 	index = 0;

              	 } else if (options == 'circleTwo'){
                   var background = $('#main > section.one');
             	  	 background.css('background-image', 'url('+url[1]+')');
                  background.css('background-size', 'cover');
             	 	 $('#header-2').fadeIn();
              	 	 index = 1;

              	 } else if (options =='circleThree'){
                   var background = $('#main > section.one');
              		 background.css('background-image', 'url('+url[2]+')');
                    background.css('background-size', 'cover');
              		 $('#header-3').fadeIn();
              	 	index = 2;


              	 } 
                  else if (options =='circleFour'){
                   var background = $('#main > section.one');
                   background.css('background-size', 'contain');
                   background.css('background-image', 'url('+url[3]+')');
                   background.css('background-repeat', 'no-repeat');
                   
                   
                   $('#header-4').fadeIn();
                  index = 3;


                 } 

            	 $('.fade').fadeOut(500);

              },500);
            });
            function Timer (){
            	time = setInterval(function(){
            	$('.fade').fadeIn(500);
            	$('#header0').children().fadeOut(500);
            	 index = (++index % 4);
            	 setTimeout(function(){
            	 	var option;
                var background = $('#main > section.one')
            	 	background.css('background-image', 'url('+url[index]+')');

            	 	if (index == 0){
            	 		option = 'circleOne';
                   background.css('background-size', 'cover');
            	 		$('#header-1').fadeIn(1500);


            	 	} else if (index == 1){
            	 		option = 'circleTwo';
                   background.css('background-size', 'cover');
            	 		$('#header-2').fadeIn(1500);

            	 	} else if (index == 2) {
            	 		option = 'circleThree';
                   background.css('background-size', 'cover');
                  
            	 		$('#header-3').fadeIn(1500);


            	 	}
                else {
                  option = 'circleFour';
                    background.css('background-size', 'contain');
                   background.css('background-repeat', 'no-repeat');
                  $('#header-4').fadeIn();


                }
	        	 	  $('.slide a').not(option).each(function(){
			              $(this).children().removeClass('fa fa-circle');
			              $(this).children().addClass('fa fa-circle-o');
		              });
	         		  $('#'+option).children().addClass('fa fa-circle');

            	 	$('.fade').fadeOut(500);
            	 },500);
            }, 8000);
            }
            function startTime(){
            	clearInterval(time);
            	Timer();
            }
   
