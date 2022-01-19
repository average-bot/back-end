// Timer
let seconds = 10;

const timer = () => { // lambda function.
    //write code here, countdown.
    seconds--;
    console.log(seconds);

    // conditional statement.
    if (seconds === 0) {
        clearInterval(countdown); // stops the interval.
        console.log('The time is up, dude!');
    }
};

const countdown = setInterval(timer, 1000);
console.log(myFunction(3, 2));
alert('hele');

// assignment =
// equal to == doesnt matter which datatype but same value
// strictly equal to ==== same datatype and same value

// no difference between '' and "", but need to be balanced symbols.
function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}
