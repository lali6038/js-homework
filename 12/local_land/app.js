$(function() {



  	// DOM is now ready
	_500px.init({
		sdk_key:'52e70023149fa7a633e1ac635227f04148b20150'
	});

	$('#login').click(function(){
	
		_500px.login();
	});

	_500px.on('authorization_obtained', function(){
		console.log("Authorized Successfully!");
		$('#login').hide();

	
	$('#photo-btn').click(function()
		{
			navigator.geolocation.getCurrentPosition(function(pos){
		console.log(pos); 

		var lat = pos.coords.latitude;
		var long = pos.coords.longitude; 

		var searchOptions = {
			geo: lat + ',' + long + ',' + '25mi', 
			only: 'Landscapes', 
			image_size:3,
			rpp:28, 
			sort: 'highest_rating'

		}

		$('#photo-btn').on('click', function(event){
		loading.show();
		event.preventDefault();

	}


	navigator.geolocation.getCurrentPosition(function(pos){
		console.log(pos); 

		var lat = pos.coords.latitude;
		var long = pos.coords.longitude; 

		var searchOptions = {
			geo: lat + ',' + long + ',' + '25mi', 
			only: 'Landscapes', 
			image_size:3,
			rpp:28, 
			sort: 'highest_rating'
		};

		console.log(searchOptions);


$('#photo-btn').on('click', function(event){
	loading.show();
	event.preventDefault();
	
	var long = $('#longitude').val();
	var lati = $('#latitude').val();
 
}


		_500px.api('/photos/search' , searchOptions, function(resp){
			$('.image-results-view').show();
			
			var photos = resp.data.photos; 
			for (var i=0; i<photos.length; i++) {
			var newImg = $('<img>').attr('src', photos[i].image_url)
			.addClass('image'); 
			$('.images').append(newImg);
			}
		});

		$.get(resp.data.photos, function(response){
			loading.hide();


	});

	});
});





/*1. Add a button to the page that when clicked, uses the
browsers current location for searching 500px and loads the photos.

2. Add an input box for a user to type in a latitude and longitude
in the format of "42.0,42.0" and use that to search 500px and display
the photos

3. When the photos are being loaded (they have not loaded yet),
display a "Loading..." somewhere on the page that disappears
when the photos have loaded.