import { render } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});
