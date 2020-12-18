/* eslint-disable no-undef */
import validate from '../validateFunc';

test.each([
  ['show length error', '427652001081', 'Card number cannot be less than 13 digits'],
  ['show type error', 'f402400j71611701', 'Not correct data! Please type in digits from 0 to 9'],
  ['be truthy', '4024007161170153', true],
])(('it should %s'), (_, input, expected) => {
  expect(validate(input)).toBe(expected);
});
