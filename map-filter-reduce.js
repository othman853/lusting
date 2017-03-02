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
const pipeline =
  data =>
    (action, cb) =>
      (!action && !cb) ? data : pipeline(action(data)(cb));
const from = data => pipeline(data);

const not = criteria => subject => !criteria(subject);
const eq = criteria => subject => subject === criteria;
const included = (...criteria) => subject => criteria.includes(subject);
const gt = criteria => subject => subject > criteria;
const gte = criteria => subject => subject >= criteria;
const uppercase = Function.prototype.call.bind(String.prototype.toUpperCase);

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

const vowelsOnly = from(letters) (filter, included('a', 'e', 'i', 'o', 'u'));

const consonantsOnly =
  from(letters) (filter, not(included('a', 'e', 'i', 'o', 'u'))) (map, uppercase);


const a =
  () =>
    (b = (v=0) => v <= 3 ? (console.log(v), b(v + 1)) : undefined );


a()();
