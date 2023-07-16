import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('test button', () => {
  test('test button exists', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test button theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
