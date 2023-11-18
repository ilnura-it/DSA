const steps = require('./index'); // Replace with your actual filename

describe('steps', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('prints steps for n = 3', () => {
    steps(3);
    expect(console.log).toHaveBeenCalledWith('#  ');
    expect(console.log).toHaveBeenCalledWith('## ');
    expect(console.log).toHaveBeenCalledWith('###');
    expect(console.log).toHaveBeenCalledTimes(3);
  });

  it('prints steps for n = 5', () => {
    steps(5);
    expect(console.log).toHaveBeenCalledWith('#    ');
    expect(console.log).toHaveBeenCalledWith('##   ');
    expect(console.log).toHaveBeenCalledWith('###  ');
    expect(console.log).toHaveBeenCalledWith('#### ');
    expect(console.log).toHaveBeenCalledWith('#####');
    expect(console.log).toHaveBeenCalledTimes(5);
  });

  // Add more test cases as needed
});