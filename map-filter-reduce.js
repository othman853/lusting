const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

const each = array => callback => {

  const next = (current = 0) => {
    if (current < array.length) {
      callback(array[current]);
      return next(current + 1);
    }
  };

  return next();
};

const map = array => mapper => {

  const next = (current = 0, mapped = []) => {

    if (current < array.length) {
      return next(current + 1, [...mapped, mapper(array[current])]);
    }

    return mapped;

  };

  return next();
};

const filter = array => criteria => {

  const get = i => array[i];

  const next = (current = 0, filtered = []) => {

    if (current < array.length) {

      return next(
        current + 1,
        (criteria(get(current)) ? [...filtered, get(current)] : filtered)
      );
    }

    return filtered;

  };

  return next();

};

const pipeline = data => (action, cb) => pipeline(action(data, cb));

const on = data => {
  console.log('on => ' + data);
  pipeline(data);
};


on(letters)
  (m, l => l + 'a')
  (f, l => l !== 'b')
  ();

letters
  .map(l => l + 'a')
  .filter(l => l !== 'b')


map(letters)(l => l)(map, l => )

each(letters)(console.log);

filter(letters, l => l === 'a')

each(map(filter(letters)(l => l === 'a'))(l => l + l ))(console.log);
