import { giveCompliment } from '../assignment/ex1-giveCompliment.js';

describe('giveCompliment', () => {
  test('should exist and be executable', () => {
    expect(giveCompliment).toBeDefined();
  });

  test('should take a single parameter', () => {
    expect(giveCompliment).toHaveLength(1);
  });

  test('should give a random compliment: You are `compliment`, `name`!', () => {
    const name = 'HackYourFuture';
    const spy = jest.spyOn(Math, 'random').mockReturnValue(0);
    const received = giveCompliment(name);
    expect(
      spy.mock.calls.length > 0 ? '' : 'compliment is not randomly selected'
    ).toBe('');
    spy.mockRestore();
    // const [compliment] = state.compliments;
    // expect(received).toBe(`You are ${compliment}, ${name}!`);
  });
});
