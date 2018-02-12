var current = 0;
var playing = 1;
var timeReturn;
var prev = 3;
timer();
function timer() {
    timeReturn = setInterval(function() {
        prev = current;
        current = (++current) % 4; // next
        
        $('#slide' + prev).fadeOut(2000);
        $('#slide' + current).fadeIn(2000);
    }, 5000);
}
$(document).on('click','.fa-pause',function(){
    $(this).removeClass('fa-pause');
   $(this).addClass('fa-play');
   playing = 0;
   clearInterval(timeReturn);

 })
 $(document).on('click','.fa-play',function(){
    $(this).removeClass('fa-play');
   $(this).addClass('fa-pause');
   playing = 1;
   timer();
  

 })
 $('.fa-forward').click(function(){
    clearInterval(timeReturn);
    prev = current;
    current = (++current) % 4; // next  
    $('#slide' + prev).fadeOut();
    $('#slide' + current).fadeIn();

    if (playing){
        timer();
    }
    
 });
  $('.fa-backward').click(function(){
    clearInterval(timeReturn);
    
    $('#slide' + prev).fadeIn();
    $('#slide' + current).fadeOut();
    current = prev;
    if (prev == 0){
      prev = 3;
    } else {
        prev = --prev;
    }
    
    if (playing){
      timer();
    } 
    
 });





