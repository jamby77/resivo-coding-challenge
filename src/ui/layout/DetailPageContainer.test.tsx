import { render } from '@testing-library/react';
import { DetailPageContainer } from './DetailPageContainer';
import { DetailPageItem } from './DetailPageItem';

describe('DetailPageContainer', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DetailPageContainer>
        <DetailPageItem label="test">
          <div>Hello World!</div>
        </DetailPageItem>
      </DetailPageContainer>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
