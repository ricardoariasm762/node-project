import React from 'react';
import { render, screen } from '@testing-library/react';
import UserStatistics from './UserStatistics';

const mockPeople = [
  { gender: 'male', name: { first: 'John', title: 'Mr' }, location: { city: 'New York', state: 'NY' }, picture: { medium: 'url' }, login: { uuid: '1' } },
  { gender: 'female', name: { first: 'Jane', title: 'Ms' }, location: { city: 'Los Angeles', state: 'CA' }, picture: { medium: 'url' }, login: { uuid: '2' } },
  { gender: 'male', name: { first: 'Bob', title: 'Mr' }, location: { city: 'Chicago', state: 'IL' }, picture: { medium: 'url' }, login: { uuid: '3' } },
];

test('renders UserStatistics component', () => {
  render(<UserStatistics people={mockPeople} />);
  const totalUsersElement = screen.getByText(/Total Users: 3/i);
  const maleUsersElement = screen.getByText(/Male Users: 2/i);
  const femaleUsersElement = screen.getByText(/Female Users: 1/i);

  expect(totalUsersElement).toBeInTheDocument();
  expect(maleUsersElement).toBeInTheDocument();
  expect(femaleUsersElement).toBeInTheDocument();
});