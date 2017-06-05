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

  var batsman = [{"Player":"Ricky Achillini","Appearances":1,"Inngs":1,"Runs":36,"NotOut":1,"Average":0},
{"Player":"Azad Ahktar","Appearances":1,"Inngs":1,"Runs":53,"NotOut":0,"Average":53},
{"Player":"Dave Arnold","Appearances":9,"Inngs":9,"Runs":233,"NotOut":0,"Average":25.89},
{"Player":"Jake Ashburner","Appearances":1,"Inngs":1,"Runs":0,"NotOut":0,"Average":0},
{"Player":"John Benbow","Appearances":7,"Inngs":6,"Runs":65,"NotOut":3,"Average":21.67},
{"Player":"Eamon Borg-Neal","Appearances":3,"Inngs":1,"Runs":1,"NotOut":1,"Average":0},
{"Player":"Dave Coster","Appearances":2,"Inngs":2,"Runs":22,"NotOut":0,"Average":11},
{"Player":"Nick Cotterill","Appearances":14,"Inngs":14,"Runs":291,"NotOut":3,"Average":26.45},
{"Player":"Steve Dowling","Appearances":1,"Inngs":1,"Runs":11,"NotOut":0,"Average":11},
{"Player":"Sam Durrant","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0},
{"Player":"Graham Durrant","Appearances":1,"Inngs":1,"Runs":24,"NotOut":0,"Average":24},
{"Player":"Chris Ellis","Appearances":7,"Inngs":7,"Runs":120,"NotOut":0,"Average":17.14},
{"Player":"Robin Emberson ","Appearances":10,"Inngs":9,"Runs":53,"NotOut":4,"Average":10.6},
{"Player":"Ben Facey","Appearances":4,"Inngs":3,"Runs":4,"NotOut":0,"Average":1.33},
{"Player":"Adam Goldthorpe","Appearances":5,"Inngs":4,"Runs":49,"NotOut":1,"Average":16.33},
{"Player":"Jay Goodwin","Appearances":2,"Inngs":1,"Runs":1,"NotOut":0,"Average":1},
{"Player":"Henry Haddaway","Appearances":4,"Inngs":4,"Runs":29,"NotOut":0,"Average":7.25},
{"Player":"Charlotte Harper","Appearances":3,"Inngs":2,"Runs":1,"NotOut":1,"Average":1},
{"Player":"Richard Harper","Appearances":11,"Inngs":5,"Runs":6,"NotOut":3,"Average":3},
{"Player":"Miles Harrison","Appearances":7,"Inngs":7,"Runs":113,"NotOut":0,"Average":16.14},
{"Player":"Alex Harriss","Appearances":3,"Inngs":3,"Runs":7,"NotOut":2,"Average":7},
{"Player":"Milan Laljani","Appearances":1,"Inngs":1,"Runs":6,"NotOut":1,"Average":0},
{"Player":"Colin Lambert","Appearances":8,"Inngs":7,"Runs":86,"NotOut":0,"Average":12.29},
{"Player":"T Masood","Appearances":6,"Inngs":5,"Runs":120,"NotOut":0,"Average":24},
{"Player":"Hamish McGregor","Appearances":2,"Inngs":2,"Runs":3,"NotOut":0,"Average":1.5},
{"Player":"Ijaz Mubasha","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0},
{"Player":"Jai Nandwani","Appearances":1,"Inngs":1,"Runs":19,"NotOut":0,"Average":19},
{"Player":"Richard Nichols","Appearances":8,"Inngs":8,"Runs":133,"NotOut":1,"Average":19},
{"Player":"0 Nitin","Appearances":1,"Inngs":1,"Runs":67,"NotOut":0,"Average":67},
{"Player":"Colin Philpott","Appearances":1,"Inngs":1,"Runs":0,"NotOut":0,"Average":0},
{"Player":"Sam Pinn","Appearances":1,"Inngs":1,"Runs":16,"NotOut":0,"Average":16},
{"Player":"Leslie Raj","Appearances":3,"Inngs":1,"Runs":1,"NotOut":0,"Average":1},
{"Player":"0 Rama","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0},
{"Player":"Azad Rasheed","Appearances":7,"Inngs":5,"Runs":6,"NotOut":1,"Average":1.5},
{"Player":"Amir Rasheed","Appearances":2,"Inngs":2,"Runs":33,"NotOut":0,"Average":16.5},
{"Player":"Steve Sells","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0},
{"Player":"Goutham Shastry","Appearances":2,"Inngs":2,"Runs":71,"NotOut":0,"Average":35.5},
{"Player":"Nav Singh","Appearances":1,"Inngs":1,"Runs":2,"NotOut":1,"Average":0},
{"Player":"James Wade","Appearances":1,"Inngs":0,"Runs":0,"NotOut":0,"Average":0},
{"Player":"Ian Wallis","Appearances":3,"Inngs":3,"Runs":59,"NotOut":0,"Average":19.67},
{"Player":"Jamie Wallis","Appearances":3,"Inngs":3,"Runs":30,"NotOut":1,"Average":15}];


  var bigBatters = [];
  var otherBatters = [];

  for ( var i = 0; i < batsman.length; i++) {
    if (batsman[i].Inngs >= 5 && batsman[i].Runs >= 50) {
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
      [{'Player':'Ricky Achillini','Overs':5,'Maidens':0,'Runs':17,'Wkts':1,'Average':17,'SR':30},
{'Player':'Azad Ahktar','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Dave Arnold','Overs':1,'Maidens':0,'Runs':3,'Wkts':0,'Average':null,'SR':null},
{'Player':'Jake Ashburner','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'John Benbow','Overs':49,'Maidens':4,'Runs':224,'Wkts':18,'Average':12.44,'SR':16.33},
{'Player':'Eamon Borg-Neal','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Dave Coster','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Nick Cotterill','Overs':61,'Maidens':3,'Runs':323,'Wkts':10,'Average':32.3,'SR':36.6},
{'Player':'Steve Dowling','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Sam Durrant','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Graham Durrant','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Chris Ellis','Overs':1,'Maidens':0,'Runs':10,'Wkts':0,'Average':null,'SR':null},
{'Player':'Robin Emberson ','Overs':10,'Maidens':0,'Runs':46,'Wkts':1,'Average':46,'SR':60},
{'Player':'Ben Facey','Overs':28,'Maidens':3,'Runs':90,'Wkts':6,'Average':15,'SR':28},
{'Player':'Adam Goldthorpe','Overs':30,'Maidens':2,'Runs':134,'Wkts':3,'Average':44.67,'SR':60},
{'Player':'Jay Goodwin','Overs':13,'Maidens':1,'Runs':62,'Wkts':1,'Average':62,'SR':78},
{'Player':'Henry Haddaway','Overs':4,'Maidens':0,'Runs':17,'Wkts':0,'Average':null,'SR':null},
{'Player':'Charlotte Harper','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Richard Harper','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Miles Harrison','Overs':13,'Maidens':0,'Runs':86,'Wkts':1,'Average':86,'SR':78},
{'Player':'Alex Harriss','Overs':17,'Maidens':1,'Runs':80,'Wkts':1,'Average':80,'SR':102},
{'Player':'Milan Laljani','Overs':7,'Maidens':0,'Runs':38,'Wkts':3,'Average':12.67,'SR':14},
{'Player':'Colin Lambert','Overs':42,'Maidens':7,'Runs':153,'Wkts':10,'Average':15.3,'SR':25.2},
{'Player':'T Masood','Overs':29,'Maidens':0,'Runs':160,'Wkts':5,'Average':32,'SR':34.8},
{'Player':'Hamish McGregor','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'ijaz Mubasha','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Jai Nandwani','Overs':5,'Maidens':0,'Runs':18,'Wkts':2,'Average':9,'SR':15},
{'Player':'Richard Nichols','Overs':44,'Maidens':4,'Runs':165,'Wkts':10,'Average':16.5,'SR':26.4},
{'Player':'0 Nitin','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Colin Philpott','Overs':1,'Maidens':0,'Runs':8,'Wkts':0,'Average':null,'SR':null},
{'Player':'Sam Pinn','Overs':6,'Maidens':0,'Runs':32,'Wkts':2,'Average':16,'SR':18},
{'Player':'Leslie Raj','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'0 Rama','Overs':4,'Maidens':1,'Runs':18,'Wkts':0,'Average':null,'SR':null},
{'Player':'Azad Rasheed','Overs':28,'Maidens':2,'Runs':112,'Wkts':9,'Average':12.44,'SR':18.67},
{'Player':'Amir Rasheed','Overs':14,'Maidens':0,'Runs':92,'Wkts':3,'Average':30.67,'SR':28},
{'Player':'Steve Sells','Overs':4,'Maidens':0,'Runs':27,'Wkts':0,'Average':null,'SR':null},
{'Player':'Goutham Shastry','Overs':13,'Maidens':1,'Runs':59,'Wkts':1,'Average':59,'SR':78},
{'Player':'Nav Singh','Overs':4,'Maidens':1,'Runs':28,'Wkts':0,'Average':null,'SR':null},
{'Player':'James Wade','Overs':0,'Maidens':0,'Runs':0,'Wkts':0,'Average':null,'SR':null},
{'Player':'Ian Wallis','Overs':21,'Maidens':2,'Runs':69,'Wkts':3,'Average':23,'SR':42},
{'Player':'Jamie Wallis','Overs':19,'Maidens':3,'Runs':61,'Wkts':5,'Average':12.2,'SR':22.8},
];

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