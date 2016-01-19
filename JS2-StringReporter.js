var word = prompt("Enter a word!");
//alert("You entered: " +word);
 
var myLength = (word.length); 
var third = (word.charAt(2));
var lower = (word.toLowerCase());
var upper = (word.toUpperCase());
var example = ("Your name is " + word);
var subword = (word.substring(1, 3));

alert("You entered: " +word);
alert("There are " + myLength + " characters in the word.");
alert("The third character is " + third);
alert("Lowercase: " + lower);
alert("Uppercase: " + upper);
alert("Example: You have a pretty name " + word);
alert("Subword: "+ subword);


//The alert's output might look like this: 
//You entered: Mango 
//There are 5 characters in the word. 
//The third character is 'n' 
//Lowercase: mango 
//Uppercase: MANGO 
//Example: I have wanted a Mango since I was a little boy. 
//Subword: ang
