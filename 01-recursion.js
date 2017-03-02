const aDecimal = 56;
const aBinary = '111000';

const binary = n => {

  const bit = n => (n % 2 | 0);
  const next = n => n / 2;
  const bin = (binValue = '', bit = '') => bit + binValue;

  const sweep = (n, b) => (n < 1) ? b : sweep(next(n), bin(b, bit(n)));

  return sweep(n);
};

console.log(`${aDecimal} should become ${aBinary}. It is actually ${binary(aDecimal)}`);
