import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { NavbarListItemButton } from './NavbarListItemButton';

jest.mock('next/router', () => require('next-router-mock'));

describe('NavbarListItemButton', () => {
  it('should render correctly', () => {
    mockRouter.push('/test');

    const { container } = render(
      <NavbarListItemButton label="Test" href="/test" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
