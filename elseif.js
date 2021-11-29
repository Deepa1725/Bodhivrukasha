var time = 10;
var Greeting = 'Not yet set';
if (time <= 10) {
    Greeting = 'Good Morning';
} else if (time < 15) {
    Greeting = 'Good Afternoon';
} else {
    Greeting = 'Good Evening';
}
console.log(Greeting);