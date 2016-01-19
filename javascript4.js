var victims = prompt("How many disaster victims do you have?");

var victimList = [];
var volunteerList = [];

var names = [];
var phones = [];
var streets = [];

for(var i=1; i<=victims; i++){
	var name = prompt("Enter name.");
	names.push(name);

	var phone = prompt("Enter phone");
	phones.push(phone);

	var street = prompt("Enter street.");
	streets.push(street);

	var vi = {
		name: name,
		phone: phone,
		street: street
	};
	victimList.push(vi);
}

var volunteers = prompt("How many volunteers do you need?");

var volunteernames = [];
var volunteerphones = [];
var volunteerstreets = [];

for(var i=1; i<=volunteers; i++){
	var name = prompt("Enter name.");
	volunteernames.push(name);

	var phone = prompt("Enter phone");
	volunteerphones.push(phone);

	var street = prompt("Enter street.");
	volunteerstreets.push(street);
}

for(var i=0; i<victims; i++){
	console.log(names[i]);
	console.log(phones[i]);
	console.log(streets[i]);
}

for(var i=0; i<volunteers; i++){
	console.log(volunteernames[i]);
	console.log(volunteerphones[i]);
	console.log(volunteerstreets[i]);
}






    // First prompt the user to ask how many disaster victims they wish to enter.

    // For each disaster victim that will be added, prompt the user to enter their name, phone number, and street. You don't need to validate the information. 
    //Add each newly entered user to three arrays, one for each piece of information, using array.push.

    // Think! How will you know how many times to prompt the user for a name/phone/street? How can you make this dynamic so that it works for any number of people?

    // Repeat steps 1 and 2, but this time you are asking for volunteers. You'll need a separate set of arrays.

    // Note: There is an easier way to store this info than in 3 separate arrays for each set of people. We'll learn how to do that when we cover objects. Bonus: Implement this exercise using only 2 total arrays of objects.

    // At the end, print out, in a single alert, the number of persons in need, the number of volunteers, and a list of all persons in need and all volunteers. You may format this in any way that looks reasonable.

