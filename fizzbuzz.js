/* write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not three), print "Buzz" instead. When you have that working, 
modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

*/

let counter = 0;
for (let i = 0; i < 100; i++) {
  counter++

  if (counter % 5 == 0 && counter % 3 == 0){
    console.log("FizzBuzz");
  } else if (counter % 3 && !counter % 5 == 0){
    console.log("fizz");
  } else if (counter % 5 == 0 && !counter % 3 == 0) {
    console.log("buzz");
  } else {
    console.log(counter);
  }

}

