var menutime;
function showOptionsMenu (button, caption){
	clearInterval(menutime);
	var menu = $(".optionsMenu");
	var menuWidth = menu.width();
	var scrollTop = $(window).scrollTop(); // how far is the window from top of document
	var elementOffset = $(button).offset().top; // position from the top
	var top = elementOffset - scrollTop;
	var left = $(button).position().left;
    var height = $(button).height();
    $('.optionsMenu h3').text(caption);
	menu.css({ "top": top - height/2  + 'px', "left" : left + "px","display" : "inline"});
	

}
function hideOptionsMenu(button){
	menutime = setTimeout(function(){
		var menu = $(".optionsMenu");
		menu.fadeOut();
	}, 500)
	
}
function showImageMenu (button, caption){
	clearInterval(menutime);
	var menu = $(".optionsMenu");
	var menuWidth = menu.width();
	var scrollTop = $(window).scrollTop(); // how far is the window from top of document
	var elementOffset = $(button).offset().top; // position from the top
	var top = elementOffset - scrollTop;
	var left = $(button).position().left;
    var height = $(button).height();
    $('.optionsMenu h3').text(caption);
	menu.css({ "top": top  + 'px', "left" : left + "px" ,"display" : "inline"});
}
window.onscroll = function () { 
var menu = $(".optionsMenu"); 
 menu.fadeOut();
} 
function showPublication (button, caption){
	clearInterval(menutime);
	var menu = $(".optionsMenu");
	var menuWidth = menu.width();
	var scrollTop = $(window).scrollTop(); // how far is the window from top of document
	var elementOffset = $(button).offset().top; // position from the top
	var top = elementOffset - scrollTop;
	var left = $(button).position().left;
    var height = $(button).height();
    $('.optionsMenu h3').text(caption);
	menu.css({ "top": top - 15  + 'px', "left" : left + "px" ,"display" : "inline"});
}
