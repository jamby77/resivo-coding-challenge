import { render } from '@testing-library/react';
import { AppBarDate } from './AppBarDate';

describe('AppBarDate', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2023-02-12T14:30:20.124'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render correctly', () => {
    const { container } = render(<AppBarDate />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
