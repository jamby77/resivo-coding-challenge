import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { NavBarMenuItem } from './NavBarMenuItem';

jest.mock('next/router', () => require('next-router-mock'));

describe('NavBarMenuItem', () => {
  it('should render correctly', () => {
    mockRouter.push('/test');

    const onNavBarMenuItemClick = jest.fn();

    const { container } = render(
      <NavBarMenuItem
        label="Test"
        href="/test"
        onClick={onNavBarMenuItemClick}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
