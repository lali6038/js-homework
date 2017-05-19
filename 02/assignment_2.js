var streetNumber=[100, 636, 23779, 890]
var streetName = [' Dupont Street ',' Broadway Street ', ' Shooting Star Street ', ' Eagle Street '];
var city = [' New York ', ' Brooklyn ', ' Dever ', ' Boulder ']; 
var state = [' New York ', ' Colorado ', ' Arizona ', ' California ']; 
var zip = [11221, 10018, 80401, 11206]


var randomStreetNumber = Math.floor(Math.random()*streetNumber.length); 
var randomElement = streetNumber[randomStreetNumber];

var randomStreetName = Math.floor(Math.random()*streetName.length); 
var randomElement1 = streetName[randomStreetName];

var randomCity = Math.floor(Math.random()*city.length);
var randomElement2 = city[randomCity];

var randomState = Math.floor(Math.random()*state.length);
var randomElement3 = state[randomState];

var randomZip = Math.floor(Math.random()*zip.length);
var randomElement4 = zip[randomZip];
console.log(randomElement + "" +  randomElement1 + ", " + randomElement2 + ", " + randomElement3 + ", " + randomElement4); 





