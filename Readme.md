# LUSTing

Things I am `(Learn|Understand|Study|Test)ing`.

## Activities

What I've been up to so far:

ID | Type | What | Language/Tool
---|------|------|---------------------|
01 | Learn      | Recursion   | JavaScript
02 | Study      | Closures    | JavaScript
03 | Understand | YCombinator | JavaScript


## Links

 [YCombinator explained](http://kestas.kuliukas.com/YCombinatorExplained/)

## Dear diary, today I...

__Found out that YCombinator is also a pattern, not just the name of a company__

As I was trying to find a more elegant way to solve `01-recursion` using closures, I realized I was trying to do a closure with a `recursive annonymous arrow function` (which led me to [here](http://stackoverflow.com/questions/25228394/how-do-i-write-an-arrow-function-in-es6-recursively)):
```js
const binary = n => {
  const bit = n => (n % 2 | 0);
  const next = n => n / 2;
  const bin = (binValue = '', bit = '') => binValue + bit;
  // What the hell was I thinking?
  return ((n, b) => (n < 1) ? b : WTF_DO_I_CALL_HERE(next(n), bin(b, bit(n))))(n);
};
```
This is a problem that can apparently be solved by applying __YCombinator__.
