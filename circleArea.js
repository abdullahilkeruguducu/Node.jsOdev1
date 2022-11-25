
const arguments = process.argv.slice(2);

function circleArea(radius) {
    circleArea = radius * 2 * 3.14;
    console.log (circleArea);
}

circleArea(arguments[0]*1);