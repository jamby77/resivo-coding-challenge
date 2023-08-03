import { render, screen } from '@testing-library/react';
import { Door } from '@/models/Door';
import { DoorList } from './DoorList';

jest.mock('next/router', () => require('next-router-mock'));

const doors: Door[] = [
  {
    id: '63f637c9f3c48a124616044b',
    name: 'Building Main Entrance',
    buildingName: 'Bahnhofstrasse 10A',
    connectionType: 'wired',
    connectionStatus: 'offline',
    apartmentName: 'n/a',
    lastConnectionStatusUpdate: '2022-01-01T00:00:00.000Z',
  },
];

describe('DoorList', () => {
  it('should render correctly', () => {
    const { container } = render(<DoorList doors={doors} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render apartment column', () => {
    render(<DoorList doors={doors} />);
    screen.getByText('Apartment');
    screen.getByText('n/a');
  });
});
