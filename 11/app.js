//rund function when page has loaded
$(function(){
	var loading = $('#loading-marquee')
	loading.hide(); 
	;
$('#get-weather').on('click', function(event){
	loading.show();
	event.preventDefault();
	

	var long = $('#longitude').val();
	var lati = $('#latitude').val();
 

//Our URL format
	//https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/long,lat
var baseURL="https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43"
var weatherURL = baseURL+ "/" + long +"," + lati
//the weatherURL result is the baseURL concatinated with longitude and latitude 
//separated by space

$.get(weatherURL,function(r){
	loading.hide(); 
	var temp = r.currently.temperature; 

	$('#current-temp').html(temp); 
});

$.get(weatherURL,function(r){
	var humidity = r.currently.humidity; 

	$('#current-humidity').html((humidity*100) + "%"); 
});

$.get(weatherURL,function(r){
	var wind = r.currently.windSpeed; 

	$('#current-wind').html(wind); 
});

$.get(weatherURL,function(r){
	var timezone = r.timezone; 

	$('#current-location').html(timezone); 
});

}); 
}); 