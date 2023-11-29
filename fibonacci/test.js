const fibonacci = require("./index");

describe('fibonacci', () => {
   it('should return the correct value for n = 0', () => {
     expect(fibonacci(0)).toBe(0);
   });
 
   it('should return the correct value for n = 1', () => {
     expect(fibonacci(1)).toBe(1);
   });
 
   it('should return the correct value for n = 2', () => {
     expect(fibonacci(2)).toBe(1);
   });
 
   it('should return the correct value for n = 3', () => {
     expect(fibonacci(3)).toBe(2);
   });
 
   it('should return the correct value for n = 4', () => {
     expect(fibonacci(4)).toBe(3);
   });
 
   it('should return the correct value for n = 8', () => {
      expect(fibonacci(8)).toBe(21);
    });
 });