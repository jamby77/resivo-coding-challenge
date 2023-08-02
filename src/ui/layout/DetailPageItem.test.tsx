import { render } from '@testing-library/react';
import { DetailPageItem } from './DetailPageItem';

describe('DetailPageItem', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DetailPageItem label="test">
        <div>Hello World!</div>
      </DetailPageItem>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
