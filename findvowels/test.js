const vowels = require('./index');  // Adjust the file path based on your structure

test('counts vowels in a string and logs the result', () => {
  const spyLog = jest.spyOn(console, 'log');

  vowels('Hello, World!');

  // Assuming the expected count for 'Hello, World!' is 3
  expect(spyLog).toHaveBeenCalledWith(3);
});

test('counts vowels in an empty string and logs the result', () => {
  const spyLog = jest.spyOn(console, 'log');

  vowels('');

  // Assuming the expected count for an empty string is 0
  expect(spyLog).toHaveBeenCalledWith(0);
});