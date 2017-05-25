//#1 Write a function that returns the largest element in an array. *This one works!* 

var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];

function largestElement(numberList)
{return Math.max(...numberList); 
}; 
 console.log("The Largest Element is : " + largestElement(numberList)); 


//----------------------------------------------------------------------------------------

//#2 Write a function that checks whether an element occurs in an array. Make the function return true or false. For example:
//function inArray(array, element) { ... }
//if(inArray(numberList, 3)) { console.log("It exists!") } *This one does not work - returns it exists no matter what* 

 function inArray(numberList, i) {
    for (var i=0; i< numberList.length; i++) {
        if (numberList[i]===i) {
            return "it exists!";
           
        }
    }
        	return "it doesn't exist!";
    	};

 
console.log ( " The number : "   +  inArray(numberList, 5)); 


//----------------------------------------------------------------------------------------

//#3 Write a function that returns the elements on odd positions in an array. For the list given above, it would print 5, 20, 90 *this does not work* 


function odd(numberList){
 var ar = [];
 for (var i = 1; i < numberList.length; i++) {
   if(i % 2 === 1) { // index is odd
       ar.push(numberList[i]);
   }
}
return ar;
}
console.log(odd(numberList));



//----------------------------------------------------------------------------------------

//#4 Write a function that computes the running total of an array. (IE: What is the sum of all of the values in an array) *this works!*


function sum(numberList)
{
var i =numberList[0] + numberList[1] + numberList[2] + numberList[3] + numberList[4] + numberList[5]+ numberList[6]; 
{
return "The sum is " + i; 
}
}

console.log (sum(numberList)); 

//Other code I tried for #4
//function sum(numberList)
//{
//var i = numberList.length + numberList.push(); i++; 
//{
//return "The sum is " + i; 
//}
//}

//console.log (sum(numberList)); 

//----------------------------------------------------------------------------------------

//#5 Write a function that tests whether a string is a palindrome. For example "racecar" would return true, but "cat" would not. *this works!* 

function palindromeCheck(palindrome)
{
	for( var i = palindrome.length; i > 0; i-- )
    {
        if(palindrome[i] = palindrome.charAt(palindrome.length)-1 )
        {
            return "The word " + palindrome + " is a palindrome." ;
        }
        {
           return "The word " + palindrome + " is anot palindrome.";
        }
    }
}
var palindrome = 'hannah'; 

console.log(palindromeCheck(palindrome));

