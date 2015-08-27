describe('FizzBuzz Test', function() {

  it('works with 20', function() {
    expect(fizzbuzz(20)).toEqual([ 'Fizz', 'Buzz', 'Fizz', 'Fizz', 'Buzz', 'Fizz', 'FizzBuzz', 'Fizz', 'Buzz' ]);
  });

  it('works with 12.34', function() {
    expect(12.344).toBeCloseTo(12.34, 2);
  });

  it('works with false', function() {
    expect(false).toBeFalsy();
  });

  it('works with Hello', function() {
    expect("Hello!").toBeDefined();
  });

  it('works with me', function() {
    expect(hello(me)).toBe("Hi Anthony");
  });

});
