import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MDScreenMenu } from './MDScreenMenu';

jest.mock('next/router', () => require('next-router-mock'));

describe('MDScreenMenu', () => {
  it('should render correctly', () => {
    mockRouter.push('/test');

    const handleCloseNavMenu = jest.fn();

    const { container } = render(
      <MDScreenMenu onNavMenuClose={handleCloseNavMenu} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
