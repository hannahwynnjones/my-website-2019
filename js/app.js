console.log('hello');

$(document).ready(function(){
  $( '#skill-one' ).hover(
    function(){
      $('.skills-one').css("display", "block");
    },
    function(){
      $('.skills-one').css("display", "none");
    }
  );
  $( '#skill-two' ).hover(
    function(){
      $('.skills-two').css("display", "block");
    },
    function(){
      $('.skills-two').css("display", "none");
    }
  );
  $( '#skill-three' ).hover(
    function(){
      $('.skills-three').css("display", "block");
    },
    function(){
      $('.skills-three').css("display", "none");
    }
  );
  $( '#skill-four' ).hover(
    function(){
      $('.skills-four').css("display", "block");
    },
    function(){
      $('.skills-four').css("display", "none");
    }
  );

});
