$(function () {
	AOS.init();
	
	function makeTimer() {
		var endTime = new Date("06 December 2020 9:56:00 GMT+01:00");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#adays").html(days);
		$("#ahours").html(hours);
		$("#aminutes").html(minutes);
		$("#aseconds").html(seconds);		
	
	}

	setInterval(function() { makeTimer(); }, 1000);

	function makeTimerTwo() {
		var endTime = new Date("08 December 2020 9:56:00 GMT+01:00");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#rdays").html(days);
		$("#rhours").html(hours);
		$("#rminutes").html(minutes);
		$("#rseconds").html(seconds);		
	
	}

	setInterval(function() { makeTimerTwo(); }, 1000);


		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 300);
			return false;
		});
	
	$(document).on('click', '.mob-toggle', function () {
		$(this).toggleClass("open");
		$(".navmenu").toggleClass("open");
	});


	$(".headerBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#header").offset().top - 0)
		}, 1500);
	});
	$(".ankitintroBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#ankitintro").offset().top - 0)
		}, 1500);
	});
	$(".ankitdaminiBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#ankitdamini").offset().top - 0)
		}, 1500);
	});
	$(".ankitritualBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#ankitritual").offset().top - 0)
		}, 1500);
	});
	$(".rohanintroBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#rohanintro").offset().top - 0)
		}, 1500);
	});
	$(".rohanankitaBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#rohanankita").offset().top - 0)
		}, 1500);
	});
	$(".rohanritualBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#rohanritual").offset().top - 0)
		}, 1500);
	});
	$(".receptionBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#reception").offset().top - 0)
		}, 1500);
	});
	$(".galleryBtn a").click(function() {
		$(".mob-toggle").removeClass("open");
		$(".navmenu").removeClass("open");
		$('html, body').animate({
				scrollTop: ($("#gallery").offset().top - 0)
		}, 1500);
	});
	
	
});
