import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';
import { renderWithTranslation } from 'shared/config/tests/renderWithTranslation';
import { componentRender } from 'shared/config/tests/componentRender';

describe('test sidebar', () => {
  test('test sidebar exists', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle sidebar', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('toggle-sidebar');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
