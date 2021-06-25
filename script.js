$(document).ready(function()
{
$(window).scroll(function()
    {
if(this.scrollY > 20)
{
$('.navbar').addClass("sticky");
}
else{
    $('.navbar').removeClass("sticky");
}
});

    
//toggle menu/navbar script

 $('.menu-btn').click(function(){

$('.navbar .menu').toggleClass("active");
$('.menu-btn i').toggleClass("active");

 });

// typeing animation script

var typed = new Typed(".typeing",{
    strings : ["Full Stack Developer", "Backend Developer","Software Engineer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});


});