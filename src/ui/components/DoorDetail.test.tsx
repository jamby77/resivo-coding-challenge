import { render, screen } from '@testing-library/react';
import { Door } from '@/models/Door';
import { DoorDetail } from './DoorDetail';

const door: Door = {
  id: '63f637c9f3c48a124616044b',
  name: 'Building Main Entrance',
  buildingName: 'Bahnhofstrasse 10A',
  connectionType: 'wired',
  connectionStatus: 'offline',
  apartmentName: 'n/a',
  lastConnectionStatusUpdate: '2022-01-01T00:00:00.000Z',
};

describe('DoorDetail', () => {
  it('should render correctly', () => {
    const { container } = render(<DoorDetail door={door} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render apartment detail', () => {
    render(<DoorDetail door={door} />);
    screen.getByText('Apartment');
    screen.getByText('n/a');
  });
  it('should render status detail', () => {
    render(<DoorDetail door={door} />);
    screen.getByText('Connection status');
    screen.getByText('offline');
  });
  it('should render last update detail', () => {
    render(<DoorDetail door={door} />);
    screen.getByText('Last connection status update');
    screen.getByText('1/1/2022, 2:00 AM');
  });
});
