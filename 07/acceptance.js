window.onload = function(){
var form = document.getElementById('number'); 
var submit = document.getElementById('number-submit'); 

submit.onclick= function displayOutput() {
	event.preventDefault(); 

				var input = document.getElementById('number-submit').value; 
				newElem.input = parseInt(input); 

	
					if(input.length ===0){
						alert ('Please enter a valid number'); 
			
		                 } else {

						return document.getElementById('random').innerHTML = 'You have entered ' + newElem.input; 

					}
					

    }
};

/* Not sure how to incorporate FizzBuzz 

for (var i = 0; i < 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
     console.log("FizzBuzz");
  }

   else if (i % 3 === 0) {
      console.log( "Fizz");
  }
  else if (i % 5 === 0) {
      console.log( "Buzz");
  }
   else {
      console.log(i);
}
  } 
  
