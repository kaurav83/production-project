import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";

import { Sidebar } from "widgets/Sidebar/ui/Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";

describe('test sidebar', () => {
  test('test sidebar exists', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle sidebar', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('toggle-sidebar');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  });
});
