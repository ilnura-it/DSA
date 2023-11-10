const fizzBuzz = require('./index'); // Update the path accordingly
const mockConsole = require('jest-mock-console');

describe('fizzBuzz', () => {
   it('prints "Fizz" for multiples of 3', () => {
      const restoreConsole = mockConsole(); // Mock console.log

      fizzBuzz(6);

      // Assert the console output
      expect(console.log).toHaveBeenCalledWith(1);
      expect(console.log).toHaveBeenCalledWith(2);
      expect(console.log).toHaveBeenCalledWith('fizz');
      expect(console.log).toHaveBeenCalledWith(4);
      expect(console.log).toHaveBeenCalledWith('buzz');
      expect(console.log).toHaveBeenCalledWith('fizz');

      restoreConsole(); // Restore console.log to its original state
   });

   it('prints "Buzz" for multiples of 5', () => {
      const restoreConsole = mockConsole(); // Mock console.log

      fizzBuzz(5);

      // Assert the console output
      expect(console.log).toHaveBeenCalledWith(1);
      expect(console.log).toHaveBeenCalledWith(2);
      expect(console.log).toHaveBeenCalledWith('fizz');
      expect(console.log).toHaveBeenCalledWith(4);
      expect(console.log).toHaveBeenCalledWith('buzz');

      restoreConsole(); // Restore console.log to its original state
   });

   
});






