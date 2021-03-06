angular.module('PortfolioApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl : 'home.html',
	})
	.when('/work', {
		templateUrl : 'work.html',
	});
}])

.controller('PortfolioCtrl', ['$scope', function($scope) {
	$scope.buttons = [{
		"title": "Introduction",
		"url": "#/"
	}, {
		"title": "Projects",
		"url": "#/work"
	}];

	$('.navbar').click(function() {
		$('html, body').animate({
			scrollTop: $('[id^="project"]').offset().top
		}, 'slow');
	});

	// $(window).scroll(function(){
	// 	$('[id^="project"]').each(function () {
	// 		if (($(this).offset().top - $(window).scrollTop()) < 20) {
	// 			$(this).stop().fadeTo('slow', 0, 'linear');
	// 		} else {
	// 			$(this).stop().fadeTo('slow', 1, 'linear');
	// 		}
	// 	});
	// });


	$scope.projects = [{
		"id": 1,
		"class": "quiz",
		"title": "JavaScript and jQuery",
		"name": "Soccer Quiz",
		"img": "images/soccer.jpg",
		"text": "A quick, interactive quiz about one of my favorite sports. I used jQuery to get the app started then I designed it using Bootstrap.",
		"demo": "http://spencer814.github.io/quiz-app/",
		"code": "https://github.com/Spencer814/quiz-app"
	}, {
		"id": 2,
		"class": "api",
		"title": "Using API's and AJAX",
		"name": "Political Representation",
		"img": "images/politic.jpg",
		"text": "I used data provided by Google Maps and Cicero Election Data to ask a user for an address then display the current elected officials in that area.",
		"demo": "http://spencer814.github.io/api-project/",
		"code": "https://github.com/Spencer814/api-project"
	}, {
		"id": 3,
		"class": "tips",
		"title": "ngRoutes and ngAnimate",
		"name": "Tip Calculator",
		"img": "images/tips.jpg",
		"text": "This App is a tool for waitstaff to keep track of tips received and for customers to calculate tip totals. It was built utilizing ngRoute and ngAnimate.",
		"demo": "http://spencer814.github.io/waitstaff/",
		"code": "https://github.com/Spencer814/waitstaff"
	}, {
		"id": 4,
		"class": "cnc",
		"title": "Working with Angular",
		"name": "Countries and Capitals",
		"img": "images/cnc.jpg",
		"text": "Using the geonames API, this app allows the user to search for any country then returns demographic information and a list of neighbors with a link to wikipedia and satellite images.",
		"demo": "http://spencer814.github.io/countries-capitals/app/#/",
		"code": "https://github.com/Spencer814/countries-capitals"
	}, {
		"id": 5,
		"class": "node",
		"title": "Developing with Node",
		"name": "Pictionary",
		"img": "images/pictionary.jpg",
		"text": "This is a collaborative drawing app and chatroom built using Node, Express, and Socket.io. Users can send each other messages and draw images using different colors.",
		"demo": "https://ide.c9.io/spencer814/pictionary",
		"code": "https://github.com/Spencer814/pictionary"
	}, {
		"id": 6,
		"class": "wba",
		"title": "Mobile Apps with Ionic",
		"name": "Western Branch Academy",
		"img": "images/wba.jpg",
		"text": "App for Western Branch Academy. Built with Angular using Ionic Framework for a hybrid mobile app and Bootstrap to add responsive qualities for larger devices.",
		"demo": "https://spencer814.github.io/wba/www/#/wba/home",
		"code": "https://github.com/Spencer814/wba"
	}];

	$scope.links = [{
		"name": "GitHub",
		"icon": "fa-github",
		"url": "https://github.com/Spencer814"
	}, {
		"name": "LinkedIn",
		"icon": "fa-linkedin",
		"url": "https://www.linkedin.com/in/andrenewman15"
	}, {
		"name": "Twitter",
		"icon": "fa-twitter",
		"url": "https://twitter.com/andre_d_newman"
	}, {
		"name": "Facebook",
		"icon": "fa-facebook",
		"url": "https://www.facebook.com/andre.d.newman15"
	}, {
		"name": "Mail",
		"icon": "fa-envelope",
		"url": "mailto:andre.d.newman@gmail.com?subject=Website"
	}];
}]);
