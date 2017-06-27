$(function(){
	var loading = $('#loading-marquee')
	loading.show(); 

	$('#submit').on('click', function(event){
		loading.show();
		event.preventDefault();
		console.log('it works');
		
		var baseURL="https://newsapi.org/v1/articles?source=techcrunch&apiKey=1909688488a2418daa902b49ac5b8bbb"
		
		$.get(baseURL, function(response){
			loading.hide();
		
			var articles = response.articles[0].title; 
		  	console.log(response.articles[0].title);
		  	$('#article-title').html(articles);

		  	var articles = response.articles[0].author; 
		  	console.log(response.articles[0].author);
		  	$('#article-author').html(articles);

		  	var articles = response.articles[0].description; 
		  	console.log(response.articles[0].description);
		  	$('#article-description').html(articles);

		  	var photo = response.articles[0].urlToImage; 
            $('<img>').attr('src', photo).appendTo($('body'))

	 });

	}); 
	
	$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(response){

  	console.log('the response :', response.data.feed[0].content.title); 
  
  	response.data.feed.forEach(function(response){

	  	var articles2 = response.data.feed[0].content.title; 
	  	$('#article-title2').html(data); 

  	
   
  })
})
	}); 
	

