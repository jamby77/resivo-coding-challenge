import { render } from '@testing-library/react';
import { XSScreenMenu } from './XSScreenMenu';

jest.mock('next/router', () => require('next-router-mock'));

describe('XSScreenMenu', () => {
  it('should render correctly', () => {
    const handleNavMenuOpen = jest.fn();
    const handleNavMenuClose = jest.fn();

    const { container } = render(
      <XSScreenMenu
        navAnchorElement={null}
        onNavMenuOpen={handleNavMenuOpen}
        onNavMenuClose={handleNavMenuClose}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
