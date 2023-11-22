const pyramid = require('./index'); 

describe('pyramid', () => {
  let originalConsoleLog;

  beforeEach(() => {
    // Mock console.log to capture the output
    originalConsoleLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    // Restore the original console.log
    console.log = originalConsoleLog;
  });

  it('prints a pyramid with spaces on both sides', () => {
    // Call the function with N = 3
    pyramid(3);

    // Assert against the expected console log calls
    expect(console.log.mock.calls.length).toBe(3);
    expect(console.log.mock.calls[0][0]).toBe('  #  ');
    expect(console.log.mock.calls[1][0]).toBe(' ### ');
    expect(console.log.mock.calls[2][0]).toBe('#####');
  });

  it('prints a pyramid with spaces on both sides', () => {
   // Call the function with N = 5
   pyramid(5);

   // Assert against the expected console log calls
   expect(console.log.mock.calls.length).toBe(5);
   expect(console.log.mock.calls[0][0]).toBe('    #    ');
   expect(console.log.mock.calls[1][0]).toBe('   ###   ');
   expect(console.log.mock.calls[2][0]).toBe('  #####  ');
   expect(console.log.mock.calls[3][0]).toBe(' ####### ');
   expect(console.log.mock.calls[4][0]).toBe('#########');
 });
});