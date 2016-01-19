// var phone = prompt("Please enter your phone number with dashes.");	
// 	if (phone.charAt(3) === "-" && phone.charAt(7) === "-"){
// 		alert("Your phone number is valid.");
// 	}
// 	else { 
// 		alert("Your phone number is invalid.");
// 	}

// var married = prompt("Are you married? Yes or No.");
// 		if (married.toLowerCase() === "yes" || married.toLowerCase() === "no"){
// 		alert("Great!");
// 	}
// 	else {
// 		alert("Incorrect input.");
// 	}


// var dob = prompt("Please enter your birth date (XX/XX/XX)");
// 	if (dob.charAt(2) === "/" && dob.charAt(5) === "/" && dob.length === 8){
// 		alert("Correct format.");
// 	}
// 	else {
// 		alert("Incorrect format. Please check the format.");
// 	}

// var postal = prompt("Please enter your postal code - must follow the format xxxxx OR xxxxx-xxxx)")
// 	if (postal.length === 5 || postal.length === 10 && postal.charAt(5) === "-"){
// 		alert("Correct format.");
// 	}
// 	else {
// 		alert("Incorrect format. Please check the format.");
// 	}


	var state = prompt("Please enter your state - must be two characters)")
	if (state.length === 2 && state === state.toUpperCase()){
		alert("Correct format.");
	}
	else {
		alert("Incorrect format. Please check the format.");
	}


//Following the same procedure as #2 and #3 above to prompt and validate the following fields:
//Alert the user if their phone number is valid (just true or false) according to the simple rule that the fourth and eighth characters must be dashes.
//birth date
//must follow the format xx/xx/xx
//postal code
//must follow the format xxxxx OR xxxxx-xxxx
//state abbreviation
//must be two characters
//must be all caps
//married
//must be yes or no
//may be any capitalization: YES, Yes, yes