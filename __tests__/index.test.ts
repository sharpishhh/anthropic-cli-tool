import { validateInput, responseParser } from '../src';

describe('validateInput', () => {
  test('valid input returns true', () => {
    const userInput = validateInput({ user_input: 'Cheetah' });
    expect(userInput).toBe(true);
  });

  test('too short returns false', () => {
    const userInput = validateInput({ user_input: 'as' });
    expect(userInput).toBe(false);
  });

  test('too long returns false', () => {
    const userInput = validateInput({
      user_input: 'How do you say bathroom in Japanese?',
    });
    expect(userInput).toBe(false);
  });

  test('special characters return false', () => {
    const userInput = validateInput({
      user_input: 'There i$ no *&^( in Team!!!',
    });
    expect(userInput).toBe(false);
  });
});

describe('responseParser', () => {
  test('valid response returns reponse', () => {
    const responseObject = {
      content: [
        {
          type: 'text',
          text: 'A fast feline mammal.',
        },
      ],
    };
    const result = responseParser(responseObject);
    expect(result).toBe('A fast feline mammal.');
  });
});
