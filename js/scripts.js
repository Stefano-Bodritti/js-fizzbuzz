/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// 1. ciclo for che vada da 1 a 100
for (var i = 1; i <= 100; i++) {

  // 2. se multiplo di 3 e 5 stampo FizzBuzz
  // 2a. se multiplo di 3 stampo FizzBuzz
  // 2b. se multiplo di 5 stampo Buzz
  // 2c. altrimenti stampo il numero
  if ( (i % 3 == 0) && (i % 5 == 0) ) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
