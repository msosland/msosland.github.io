function Country(name, capital, population, largestCity) {
  this.name = name;
  this.capital = capital;
  this.population = population;
  this.largestCity = largestCity;
  this.unread = 3;
  this.decrement = function() {
    this.unread--;
  }
  this.fact = function() {
    var remaining = this.unread;
    if (remaining == 0) {
      this.unread = 3;
      return ("You have already learned about " + this.name + "! Resetting facts so you can review!");

      //this.fact();
    }
    else if (remaining == 3) {
      this.decrement();
      return ("The capital of " + this.name + " is " + this.capital + ".");

    }
    else if (remaining == 2) {
      this.decrement();
      return ("The population of " + this.name + " is " + this.population + ".");

    }
    else if (remaining == 1) {
      this.decrement();
      return ("The largest city in " + this.name + " is " + this.largestCity + ".");

    }
  }
}

//here I am creating a bunch of Country objects. Thanks wikipedia!
var Peru = new Country('Peru', 'Lima', '31 million', 'Lima');
var Colombia = new Country('Colombia', 'Bogot\341', '48 million', 'Bogot\341');
var Mongolia = new Country('Mongolia', 'Ulaanbaatar', '3 million', 'Ulaanbaatar');
var China = new Country('China', 'Beijing', '1.37 billion', 'Shanghai');
var uae = new Country('United Arab Emirates', 'Abu Dhabi', '9 million', 'Dubai');
var Brazil = new Country('Brazil', 'Bras\355lia', '205 million', 'S\343o Paulo');
var Canada = new Country('Canada', 'Ottawa', '36 million', 'Toronto');
var India = new Country('India', 'New Delhi', '1.3 billion', 'Mumbai');
var Morocco = new Country('Morocco', 'Rabat', '34 million', 'Casablanca');
var Tanzania = new Country('Tanzania', 'Dodoma', '50 million', 'Dar es Salaam');
var Australia = new Country('Australia', 'Canberra', '24 million', 'Sydney');
var Cameroon = new Country('Cameroon', 'Yaound\351', '22 million', 'Douala');
var Ecuador = new Country('Ecuador', 'Quito', '16 million', 'Guayaquil');
var Nigeria = new Country('Nigeria', 'Abuja', '182 billion', 'Lagos');
var Turkey = new Country('Turkey', 'Ankara', '77 million', 'Istanbul');
var Vietnam = new Country('Vietnam', 'Hanoi', '91 million', 'Ho Chi Minh City');


//here I will create an array of all the country objects in case I want to use it later
var database = [Peru, Colombia, Mongolia, China, uae, Brazil, Canada, India, Morocco, Tanzania, Australia, Ecuador, Cameroon, Nigeria, Turkey, Vietnam];

function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

function displayFact(e) {
  var board = document.getElementById('knowledge');
  var target = getTarget(e);
  var country = target.textContent;
  var att = eval(country);
  var result = att.fact();
  board.textContent = result;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

var elem = document.getElementById('counts');
if (elem.addEventListener) {
  elem.addEventListener('click', function(e) {
    displayFact(e);
  }, false);
} else {
  elem.attachEvent('onclick', function(e) {
    displayFact(e);
  });
}

