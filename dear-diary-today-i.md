# Dear diary...

#### 

### 02/03/2017

#### I f**ound out that YCombinator is also a pattern, not just the name of a company**

As I was trying to find a more elegant way to solve recursion using closures, I realised I was trying to do a closure with a **anonymous.**

```js
const binary = n => {
const bit = n => (n % 2 | 0);
const next = n => n / 2;
const bin = (binValue = '', bit = '') => binValue + bit;
// What the hell was I thinking?
return ((n, b) => (n < 1) ? b : WTF_DO_I_CALL_HERE(next(n), bin(b, bit(n))))(n);
};
```

This is a problem that can apparently be solved by applying **YCombinator **according to this StackOverflow [discussion](http://stackoverflow.com/questions/25228394/how-do-i-write-an-arrow-function-in-es6-recursively).

