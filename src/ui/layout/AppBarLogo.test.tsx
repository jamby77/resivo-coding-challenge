import { render } from '@testing-library/react';
import { AppBarLogo } from './AppBarLogo';

describe('AppBarLogo', () => {
  it('should render correctly', () => {
    const { container } = render(<AppBarLogo />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
