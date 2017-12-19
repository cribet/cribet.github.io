// When the user clicks the hamburger menu
  //hide the hamburger menu
  //slideOut the #menu

  $('.hamburger').on('click', function(event){
   event.preventDefault();
   $('ul').slideToggle();
  });

//When the user clicks the header
  //slideOut the #location

//When the user hovers over #location
  //show image of location map

//when the user clicks on h3 for article whotobring
//slide out the answer article who to bring p

// When the user clicks the hamburger menu (all pages)
//hide the hamburger menu
//slideOut the .menuar
$('.hamburger').on('click', function(event){
 event.preventDefault();
 $('header nav ul').slideToggle();
});

//when the user clicks "we'd love to hear from you"  (after.html)
//slideDown the information with post-event survey

$('.survey').on('click', function(event){
 $('.feedback-form').slideDown('slow');
});
//when the user hovers over "View Photos", (after.html)
//slideDown link with Google Photos link to see photos from the event
$('.view-photos').on('click', function(event){
 $('#photo').show('slow');
});

//when user hovers over "how to prepare" (before.html)
//slideDown "wrap" with information on preparing for sprint
$('.how-to-prepare').on('click',function(event){
 $('.prepare').slideDown();
});

//when user hovers "We have design sprints coming up in:" (before.html)
//slideDown ul
$('.coming-up').on('click',function(event){
 $('.location').slideDown();
 });

 $('.whoq').on('click',function(event){
  $('.whoa').slideDown();
 });

 $('.peopleq').on('click',function(event){
  $('.peoplea').slideDown();
 });


  $('.swapq').on('click',function(event){
   $('.swapa').slideDown();
  });

  $('.projectq').on('click',function(event){
   $('.projecta').slideDown();
  });

  $('.appq').on('click',function(event){
   $('.appa').slideDown();
  });

  $('.bringq').on('click',function(event){
   $('.bringa').slideDown();
  });

  $('.wearq').on('click',function(event){
   $('.weara').slideDown();
  });

 $('.whoa').on('click',function(event){
   $('.whoa').slideUp();
  });

  $('.peoplea').on('click',function(event){
   $('.peoplea').slideUp();
  });


   $('.swapa').on('click',function(event){
    $('.swapa').slideUp();
   });

   $('.projecta').on('click',function(event){
    $('.projecta').slideUp();
   });

   $('.appa').on('click',function(event){
    $('.appa').slideUp();
   });

   $('.bringa').on('click',function(event){
    $('.bringa').slideUp();
   });

   $('.weara').on('click',function(event){
    $('.weara').slideUp();
   });
