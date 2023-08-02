import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { Layout } from './Layout';

jest.mock('next/router', () => require('next-router-mock'));

describe('Layout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-02-12T14:30:20.124'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render correctly', () => {
    mockRouter.push('/test');

    const { container } = render(
      <Layout title="test">
        <div>Hello World!</div>
      </Layout>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
