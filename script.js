alert("Hello world");

var date = new Date();
var dayText = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var day = date.getDay();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var ampm = pmam;
var whichDay = dayText[day];

function pmam() {
	if (hour <= 11) {
		ampm = "AM";
	} else {
		ampm = "PM";
	}
}
pmam();
hour = (hour > 12)? hour - 12 : hour 

console.log(`Today is: ${whichDay}\nCurrent time is: ${hour} ${ampm} : ${min} : ${sec}`);