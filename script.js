$(document).ready(function(){
   $(window).scroll(function(){
       if(this.scrollY > 100)
       { $('.navbar').addClass("sticky");}
       else
       { $('.navbar').removeClass("sticky");}

       if(this.scrollY > 500)
       {$('.scroll-up-btn').addClass('show');}
       else{$('.scroll-up-btn').removeClass('show');}      
   });

//    slide up
   $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0});
   });

//    typing animation
var typed = new Typed(".typing", {
    strings: ['Youtuber', "Developer", "Blogger", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ['Youtuber', "Developer", "Blogger", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

//    toggle menu/navbar
   $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
   });


   //    owl carosoel 
   $('.carousel').owlCarousel({
       margin:20,
       loop: true,
       autoplayHoverPause:true,
       responsive:{
       0:{
           iteam: 1,
           nav:false
       },
       600:{
        iteam: 2,
        nav:false
       },
        1000:{
            iteam: 3,
            nav:false
        }
    }

   });
});