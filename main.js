// General variables
var openMenu = $('.fa-bars');
var hamburger = $('.hamburger-menu');
var exitMenu = $('.fa-times');

// Open the hamburger menu on click
openMenu.click(function(){
    hamburger.fadeIn();
});

// Close the hamburger menu on click
exitMenu.click(function(){
    hamburger.fadeOut();
});
