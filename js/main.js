$(function(){
  var $root = $('html, body');
  //Smooth scrolling
  $('a[href*=#]').click(function(){
    event.preventDefault();
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  });

});
