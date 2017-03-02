const aDecimal = 56;
const aBinary = '111000';

const spit =
  bin => console.log(`${aDecimal} should become ${aBinary}. It became ${bin(aDecimal)}`);

const binary = (() => {

  const
    bit = n => n % 2 | 0,
    next = n => n / 2,
    bin = (binValue = '', aBit = '') => aBit + binValue,

    sweep = (decimal, binary) =>
      (decimal < 1) ? binary : sweep(next(decimal), bin(binary, bit(decimal)));

  return sweep;
})();

spit(binary);
