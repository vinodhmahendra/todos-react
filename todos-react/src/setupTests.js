// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.spyOn(console, 'warn').mockImplementation((msg) => {
    if (!msg.includes('React Router Future Flag Warning')) {
      console.warn(msg);
    }
  });
  
