import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { AppBar } from './AppBar';

jest.mock('next/router', () => require('next-router-mock'));

describe('AppBar', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-02-12T14:30:20.124'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render correctly', () => {
    mockRouter.push('/test');

    const { container } = render(<AppBar />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
