var app = angular.module('cricketApp', []);

app.controller('fixturesController', function($scope) {

  var fixtures = [{"Date":1494111600000,"Location":"Home","Opposition":"Aldenham","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1494716400000,"Location":"Home","Opposition":"Frogmore","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1495321200000,"Location":"Away","Opposition":"Chesham Bois","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1495926000000,"Location":"Home","Opposition":"BBC Mishits","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1496530800000,"Location":"Home","Opposition":"Ivanhoe","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1497135600000,"Location":"Away","Opposition":"Chinnor","StartTime":"1.30pm","Result":"","Link":null},
{"Date":1497740400000,"Location":"Home","Opposition":"Batchworth","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1498345200000,"Location":"Home","Opposition":"Chesham Bois","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1498950000000,"Location":"Home","Opposition":"Harrow On The Hill","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1499554800000,"Location":"Home","Opposition":"Camel","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1500159600000,"Location":"Home","Opposition":"Yeading","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1500764400000,"Location":"Home","Opposition":"Berkhamsted","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1501369200000,"Location":"Home","Opposition":"Cubington","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1501974000000,"Location":"Home","Opposition":"Old Citizens","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1502578800000,"Location":"Home","Opposition":"Wendover","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1503183600000,"Location":"Home","Opposition":"Full Tossers","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1503788400000,"Location":"Home","Opposition":"Wisley","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1504393200000,"Location":"Home","Opposition":"BBC Mishits","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1504998000000,"Location":"Away","Opposition":"Frogmore","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1505602800000,"Location":"Away","Opposition":"Aldenham","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1506207600000,"Location":"Away","Opposition":"Ickenham","StartTime":"1.00 pm","Result":"","Link":null}]

  $scope.fixtures = fixtures;

  now = new Date();

  var prevGame, nextGame;

  for (var j = 0; j < fixtures.length; j++) {
	  var nextTest = new Date(fixtures[j].Date);
	  if (nextTest > now) {
		  nextGame = fixtures[j];
      prevGame = fixtures[j - 1];
		  break;
	  }
  }

  $scope.prevGame = prevGame;
  $scope.nextGame = nextGame;

})
