$(document).ready(function() {

  $('#bowlStats').hide();

  $('#batBtn').on("click", function() {
    $(this).addClass("btn-primary");
    $('#bowlBtn').removeClass("btn-primary");
    $('#bowlStats').hide('slow');
    $('#batStats').show('slow');
  });

  $('#bowlBtn').on("click", function() {
    $(this).addClass("btn-primary");
    $('#batBtn').removeClass("btn-primary");
    $('#batStats').hide('slow');
    $('#bowlStats').show('slow');
  });

})

var app = angular.module('cricketApp', []);

app.controller('battingController', function($scope) {

  var batsman = [{"Player":"Bruce Alexander","Appearances":13,"Inngs":12,"Runs":545,"NotOut":3,"Average":60.56},
    {"Player":"Z Allen","Appearances":1,"Inngs":1,"Runs":9,"NotOut":0,"Average":9.00},
    {"Player":"Dave Arnold","Appearances":10,"Inngs":8,"Runs":120,"NotOut":2,"Average":20.00},
    {"Player":"Jamie Bell","Appearances":4,"Inngs":3,"Runs":10,"NotOut":0,"Average":3.33},
    {"Player":"John Benbow","Appearances":8,"Inngs":5,"Runs":19,"NotOut":3,"Average":9.50},
    {"Player":"Bhyvan","Appearances":1,"Inngs":1,"Runs":7,"NotOut":0,"Average":7.00},
    {"Player":"Eamon Borg-Neal","Appearances":3,"Inngs":2,"Runs":4,"NotOut":0,"Average":2.00},
    {"Player":"Mike Cooray","Appearances":4,"Inngs":4,"Runs":106,"NotOut":0,"Average":26.50},
    {"Player":"Minilla Cooray","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Nick Cotterill","Appearances":11,"Inngs":10,"Runs":78,"NotOut":0,"Average":7.80},
    {"Player":"Graham Durrant","Appearances":2,"Inngs":2,"Runs":8,"NotOut":0,"Average":4.00},
    {"Player":"Sam Durrant","Appearances":2,"Inngs":2,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Sam Edney","Appearances":1,"Inngs":1,"Runs":1,"NotOut":0,"Average":1.00},
    {"Player":"Robin Emberson ","Appearances":6,"Inngs":5,"Runs":13,"NotOut":0,"Average":2.60},
    {"Player":"Ben Facey","Appearances":2,"Inngs":2,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Jose Felix","Appearances":1,"Inngs":1,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Adam Goldthorpe","Appearances":2,"Inngs":2,"Runs":11,"NotOut":0,"Average":5.50},
    {"Player":"Charlotte Harper","Appearances":5,"Inngs":2,"Runs":2,"NotOut":1,"Average":2.00},
    {"Player":"Richard Harper","Appearances":6,"Inngs":3,"Runs":5,"NotOut":3,"Average":0.00},
    {"Player":"Z Harris","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Miles Harrison","Appearances":8,"Inngs":8,"Runs":171,"NotOut":2,"Average":28.50},
    {"Player":"Josh Johnson","Appearances":1,"Inngs":1,"Runs":40,"NotOut":0,"Average":40.00},
    {"Player":"Milan Laljani","Appearances":3,"Inngs":3,"Runs":32,"NotOut":0,"Average":10.67},
    {"Player":"Narendra Laljani","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Colin Lambert","Appearances":8,"Inngs":6,"Runs":96,"NotOut":0,"Average":16.00},
    {"Player":"Z Maddern","Appearances":1,"Inngs":1,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Ben Mannering","Appearances":1,"Inngs":1,"Runs":0,"NotOut":1,"Average":0.00},
    {"Player":"Ijaz Mubasha","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Colin Philpott","Appearances":1,"Inngs":1,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Leslie Raj","Appearances":6,"Inngs":5,"Runs":4,"NotOut":0,"Average":0.80},
    {"Player":"Amir Rasheed","Appearances":1,"Inngs":1,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Azad Rasheed","Appearances":8,"Inngs":5,"Runs":39,"NotOut":2,"Average":13.00},
    {"Player":"Alain Rupp","Appearances":5,"Inngs":5,"Runs":180,"NotOut":1,"Average":45.00},
    {"Player":"Sandro Rupp","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"John Scott","Appearances":1,"Inngs":1,"Runs":6,"NotOut":1,"Average":0.00},
    {"Player":"B  Seath","Appearances":1,"Inngs":1,"Runs":26,"NotOut":0,"Average":26.00},
    {"Player":"Steve Sells","Appearances":2,"Inngs":1,"Runs":6,"NotOut":1,"Average":0.00},
    {"Player":"Gautham Shastry","Appearances":4,"Inngs":4,"Runs":56,"NotOut":1,"Average":18.67},
    {"Player":"Z Shaw","Appearances":1,"Inngs":1,"Runs":13,"NotOut":0,"Average":13.00},
    {"Player":"Z Suresh","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0.00},
    {"Player":"Ian Wallis","Appearances":5,"Inngs":4,"Runs":59,"NotOut":1,"Average":19.67},
    {"Player":"Jamie Wallis","Appearances":8,"Inngs":7,"Runs":214,"NotOut":1,"Average":35.67}];


  var bigBatters = [];
  var otherBatters = [];

  for ( var i = 0; i < batsman.length; i++) {
    if (batsman[i].Inngs >= 5 || batsman[i].Runs >= 50) {
      bigBatters.push(batsman[i]);
    } else {
      otherBatters.push(batsman[i]);
    }
  };

  $scope.bigBatters = bigBatters;
  $scope.otherBatters = otherBatters;

  $scope.batsman = batsman;
  $scope.tab = 1;
  $scope.filtText = 'Average';

  $scope.select = function(setTab) {
    $scope.tab = setTab;



    if (setTab === 2) {
      $scope.filtText = "Runs";
    /*} else if (setTab === 3) {
      this.filtText = "HS";*/ // High scores are strings due to not outs (eg 104*) - need to fix __DB
    } else if (setTab === 4) {
      $scope.filtText = "Inngs";
    } else {
      $scope.filtText = "Average";
    }
  }

  $scope.isSelected = function(checkTab) {
    return ($scope.tab === checkTab);
  }

})

app.controller('bowlingController', function($scope) {

  var bowlers = 
      [{"Player":"Milan Laljani","Overs":16,"Maidens":0,"Runs":101,"Wkts":1,"Average":101.00,"SR":96.00},
      {"Player":"Colin Lambert","Overs":21,"Maidens":1,"Runs":98,"Wkts":2,"Average":49.00,"SR":63.00},
      {"Player":"Jamie Wallis","Overs":31,"Maidens":3,"Runs":110,"Wkts":3,"Average":36.67,"SR":62.00},
      {"Player":"Adam Goldthorpe","Overs":13,"Maidens":2,"Runs":67,"Wkts":3,"Average":22.33,"SR":26.00},
      {"Player":"Alain Rupp","Overs":22,"Maidens":4,"Runs":109,"Wkts":5,"Average":21.80,"SR":26.40},
      {"Player":"Nick Cotterill","Overs":23,"Maidens":0,"Runs":104,"Wkts":5,"Average":20.80,"SR":27.60},
      {"Player":"Ben Facey","Overs":11,"Maidens":1,"Runs":41,"Wkts":2,"Average":20.50,"SR":33.00},
      {"Player":"John Benbow","Overs":49,"Maidens":7,"Runs":204,"Wkts":11,"Average":18.55,"SR":26.73},
      {"Player":"B  Seath","Overs":6,"Maidens":0,"Runs":37,"Wkts":2,"Average":18.50,"SR":18.00},
      {"Player":"Azad Rasheed","Overs":21,"Maidens":2,"Runs":116,"Wkts":8,"Average":14.50,"SR":15.75},
      {"Player":"Bhyvan","Overs":7,"Maidens":1,"Runs":27,"Wkts":2,"Average":13.50,"SR":21.00},
      {"Player":"Ian Wallis","Overs":9,"Maidens":1,"Runs":27,"Wkts":2,"Average":13.50,"SR":27.00},
      {"Player":"Bruce Alexander","Overs":49,"Maidens":8,"Runs":234,"Wkts":18,"Average":13.00,"SR":16.33},
      {"Player":"Gautham Shastry","Overs":19,"Maidens":6,"Runs":63,"Wkts":5,"Average":12.60,"SR":22.80},
      {"Player":"Robin Emberson ","Overs":4,"Maidens":1,"Runs":12,"Wkts":1,"Average":12.00,"SR":24.00},
      {"Player":"Mike Cooray","Overs":3,"Maidens":0,"Runs":23,"Wkts":2,"Average":11.50,"SR":9.00},
      {"Player":"Jamie Bell","Overs":17,"Maidens":5,"Runs":44,"Wkts":4,"Average":11.00,"SR":25.50},
      {"Player":"Amir Rasheed","Overs":7,"Maidens":1,"Runs":37,"Wkts":4,"Average":9.25,"SR":10.50},
      {"Player":"Steve Sells","Overs":6,"Maidens":1,"Runs":27,"Wkts":3,"Average":9.00,"SR":12.00},
      {"Player":"Sandro Rupp","Overs":7,"Maidens":3,"Runs":9,"Wkts":2,"Average":4.50,"SR":21.00},
      {"Player":"Jose Felix","Overs":3,"Maidens":0,"Runs":10,"Wkts":4,"Average":2.50,"SR":4.50},
      {"Player":"Z Harris","Overs":4,"Maidens":0,"Runs":18,"Wkts":0,"Average":null,"SR":null},
      {"Player":"Colin Philpott","Overs":4,"Maidens":0,"Runs":22,"Wkts":0,"Average":null,"SR":null},
      {"Player":"Z Shaw","Overs":4,"Maidens":0,"Runs":36,"Wkts":0,"Average":null,"SR":null},
      {"Player":"Ijaz Mubasha","Overs":6,"Maidens":1,"Runs":28,"Wkts":0,"Average":null,"SR":null},
      {"Player":"John Scott","Overs":6,"Maidens":1,"Runs":50,"Wkts":0,"Average":null,"SR":null},
      {"Player":"Z Suresh","Overs":6,"Maidens":0,"Runs":37,"Wkts":0,"Average":null,"SR":null},
      {"Player":"Josh Johnson","Overs":7,"Maidens":1,"Runs":33,"Wkts":0,"Average":null,"SR":null},
      {"Player":"Miles Harrison","Overs":13,"Maidens":1,"Runs":69,"Wkts":0,"Average":null,"SR":null}];

  var otherBowlers = [];

  var otherBowlers = [];
  var bigBowlers = [];

  for ( var i = 0; i < bowlers.length; i++) {
    if (bowlers[i].Overs < 10) {
      otherBowlers.push(bowlers[i]);
    } else {
      bigBowlers.push(bowlers[i]);
    }
  };

  $scope.bigBowlers = bigBowlers;
  $scope.otherBowlers = otherBowlers;

  $scope.bowlers = bowlers;
  $scope.tab = 1;
  $scope.filtText = 'Average';
  $scope.orderFilter = false;

  $scope.select = function(setTab) {
    $scope.tab = setTab;

    if (setTab === 2) {
      $scope.filtText = "Overs";
      $scope.orderFilter = true;
    } else if (setTab === 3) {
      $scope.filtText = "Wkts";
      $scope.orderFilter = true;
    } else if (setTab === 4) {
      $scope.filtText = "Runs";
      $scope.orderFilter = false;
    } else if (setTab === 5) {
      $scope.filtText = "SR";
      $scope.orderFilter = false;
    } else {
      $scope.filtText = "Average";
      $scope.orderFilter = false;
    }
  }

  $scope.isSelected = function(checkTab) {
    return ($scope.tab === checkTab);
  }

})

app.controller('fixturesController', function($scope) {

  var fixtures = [{"Date":1494111600000,"Location":"Home","Opposition":"Aldenham","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1494716400000,"Location":"Home","Opposition":"Frogmore","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1495321200000,"Location":"Away","Opposition":"Chesham Bois","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1495926000000,"Location":"Home","Opposition":"BBC Mishits","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1496530800000,"Location":"Home","Opposition":"Ivanhoe","StartTime":"1.00 pm","Result":"","Link":null},
{"Date":1497135600000,"Location":"","Opposition":"TBC","StartTime":"","Result":"","Link":null},
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
