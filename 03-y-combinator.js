const YCombinatorFactorial =
  ((y => y(givenFact => n => n < 2 ? 1 : n * givenFact(n - 1))(5)) (le => (f => f(f))(f => le(x => (f(f))(x)))));

console.log(YCombinatorFactorial);


const factorial = givenFact => n => (n < 2) ? 1 : n * givenFact(n - 1);

const firstPiece =
  y => y(givenFact => n => n < 2 ? 1 : n * givenFact(n - 1));

const secondPiece = (le => (f => f(f)));

const YCombinatorFactorial2 = (
  (firstPiece(5)) (secondPiece(f => le(x => (f(f))(x))))
);

console.log(YCombinatorFactorial2);
