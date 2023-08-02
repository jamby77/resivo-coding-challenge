import { render } from '@testing-library/react';
import { Door } from '@/models/Door';
import { DoorDetail } from './DoorDetail';

const door: Door = {
  id: '63f637c9f3c48a124616044b',
  name: 'Building Main Entrance',
  buildingName: 'Bahnhofstrasse 10A',
  connectionType: 'wired',
  connectionStatus: 'offline',
};

describe('DoorDetail', () => {
  it('should render correctly', () => {
    const { container } = render(<DoorDetail door={door} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
