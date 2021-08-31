import { render } from '@testing-library/react';
import Profile from '../Profile/Profile';

describe('SignUp tests', () => {
  test('render profile', () => {
    render(<Profile />);
  });
});
