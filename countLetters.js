const assertEqual = require('./assertEqual')

const countLetters = (string) => {
  const arr = string.replace(/ /g, '').split('');
  const results = {};
  for (const item of arr) {
    if (results[item]){
      results[item] += 1;
    } else {
      results[item] = 1;
    } 
  }
  return results;
}

const actual = countLetters("lighthouse in the house")

assertEqual(actual['l'], 1)
assertEqual(actual['i'], 2)
assertEqual(actual['g'], 1)
assertEqual(actual['h'], 4)
assertEqual(actual['t'], 2)
assertEqual(actual['o'], 2)
assertEqual(actual['u'], 2)
assertEqual(actual['s'], 2)
assertEqual(actual['n'], 1)
assertEqual(actual['e'], 3)
assertEqual(actual[''], undefined)

module.exports = countLetters;