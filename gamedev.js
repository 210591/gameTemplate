$( document ).ready(function() {

	$("#getRekt").hide();

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/164.png')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").show();
		$("#getRekt").hide();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/555.png')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
		$("#getRekt").hide();
	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/Hospital.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
		$("#getRekt").hide();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
		$("#getRekt").hide();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/rekt.gif')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
		$("#getRekt").hide();
		$(document).ready(function() {
    // Create an audio element, and set it to autoplay, 
   // and show the player when the page loads.
    var audio = $('<audio />', {
      autoPlay : 'autoplay',
      controls : 'controls'
    });
     
    // Call our addSource function, and pass in the audio element
    // and the path(s) to your audio.
    addSource(audio, 'sound/XSCREAM.wav');
    addSource(audio, 'audioFile.mp3');
   
    // When some event is fired...
    $('a').click(function() {
     // Add the audio + source elements to the page.
      audio.appendTo('body');  
      // Fadeout the anchor tag to keep the user from clicking it again.
      $(this).fadeOut('slow');
      return false;
    });
     
   // Adds a source element, and appends it to the audio element, represented 
   // by elem.
    function addSource(elem, path) {
      $('<source />').attr('src', path).appendTo(elem);
    }
    
});
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/asdf.gif')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
		$("#goRight1").hide();
		$("#getRekt").show();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft2.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
		$("#getRekt").hide();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/dead.gif')");
		$("#goBack").hide();
		$("#goRight1").hide();
		$("#goLeft1").hide();
		$("#getRekt").show();
		$("#goRight-Straight2").hide();
	});

	$("#getRekt").click(function() {
		$("#exploreBody").css("background-image", "url('img/lose.jpg')");
		$("#getRekt").hide();
		$("#goRight-Straight1").hide();
		$(".audioDemo").trigger('load');
		

	});



});

