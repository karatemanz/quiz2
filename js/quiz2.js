
	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$submit    = $('.submit');
	var getQuiz = [];
	var change = 0;

(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	

	$mouseover.on('mouseover', function() {

		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);

	});

	
	$('#theForm').on('submit', function(e) {

		console.log(e);
		e.preventDefault();
		

		if ($(this).find('input[type="text"]').val() !== "") {

			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append("<h2>Congratulations! You've entered some text!</h2>");

		}
	});



	// completed down here... for quiz2 to elimate mind game based confusion
	$click.on('click', function() {
		
		$this = $(this);

		console.log($this.context);

		$click.html('Peace Out!');
		$(this).fadeOut(1500);
		return false;

	});


	$(document).ready(function() {

		$timeout = $('.timeout');

		setTimeout(function(){ 

			$timeout.fadeOut('slow'); }, 
			1000

		);

	});

})(jQuery);


function getTitle(){

	$.getJSON("http://www.mattbowytz.com/simple_api.json?data=quizData", function(info){

		console.log(info);

		for(var i = 0; i < info.data.length; i++){
			getQuiz.push(info.data[i]);
		}

		$('.content').empty();
		$('.content').append("<button class='change' id='change-button' onclick='getChange()''>Change It!</button>");
		$('.content').append("<div class='data'></div>");


		if(document.cookie.indexOf("storedtitle=") >= 0){

			var cookieText = document.cookie.split('=');
			cookieTitle = cookieText[1].split(';');
			$('.data').append(cookieTitle[0]);

		}



	});

}

function getChange(){


	$('.data').empty();
	$('.keep').remove();

	var random = Math.floor(Math.random() * getQuiz.length) + 0;
	$('.data').append(getQuiz[random]);


	$('.content').append("<button class='keep' id='keep-button' onclick='setKeep()''>Keep It!</button>");

}

function setKeep(){

	var title = $('.data').text();

	console.log(title);

	document.cookie="storedtitle=" + title;
	change = 0;

}