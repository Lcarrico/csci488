/*
The only edits you can make for this exercise are in this file.
Use JQuery objects and methods, not DOM objects.

For help:
See my JQuery vs Dom Example.
See my JQuery Each Iterator Example.
*/

$(document).ready(function(){

  //grab the ul with nav-bar-type as fancier
  var ul = $('ul[nav-bar-type="fancier"]');
  //create the style to make it black and no bullet points
  var styles = {
    "list-style-type": "none",
    "margin": "0",
    "padding": "0",
    "background-color": "black",
    "overflow": "hidden"
  };
  //add the style to the ul
  ul.css(styles);

  // //grab the li under fancy and make it float left
  $('ul[nav-bar-type="fancier"] li').css({"float": "left"});


  //grab the anchor and add styles to make it horizontal and look good
  var a = $('ul[nav-bar-type="fancier"] a');
  //here are the styles for the anchor
  var styles = {
    "display": "block",
    "color": "white",
    "text-align": "center",
    "padding": "14px 16px",
    "text-decoration": "none"
  };
  //add styles to a
  a.css(styles);

  //add the hover effect for the fancier navbar
  var a_hover = $(':hover');
  $('ul[nav-bar-type="fancier"] a').hover(function(){
    $(this).css("background-color", "grey");
    }, function(){
    $(this).css("background-color", "black");
  });


  //grab the ul with nav-bar-type as fancy
  var ul = $('ul[nav-bar-type="fancy"]');
  //create the style to make it black and no bullet points
  var styles = {
    "list-style-type": "none",
    "margin": "0",
    "padding": "0",
    "overflow": "hidden"
  };
  //add the style to the ul
  ul.css(styles);

  // //grab the li under fancy and make it float left
  $('ul[nav-bar-type="fancy"] li').css("float", "left");

  //grab the anchor and add styles to make it horizontal and look good
  var a = $('ul[nav-bar-type="fancy"] a');
  //here are the styles for the anchor
  var styles = {
    "color": "black",
    "display": "block",
    "text-align": "center",
    "padding": "8px 8px",
    "text-decoration": "none"
  };

  //add styles to a
  a.css(styles);

  //add fancy nav
  var a_hover = $(':hover');
  $('ul[nav-bar-type="fancy"] a').hover(function(){
    $(this).css({"text-decoration": "underline"});
    }, function(){
    $(this).css({"text-decoration": "none"});
  });

  //make it so vertical bars don't float left and give a fixed width
  $('ul[nav-bar-orientation="vertical"] li').css({"float": "none"});
  $('ul[nav-bar-orientation="vertical"]').css({"width": "60px"});

});
