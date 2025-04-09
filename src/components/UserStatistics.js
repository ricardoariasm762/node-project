import React from 'react';
import './UserStatistics.css';

function UserStatistics({ people }) {
    const totalUsers = people.length;
    const maleUsers = people.filter(person => person.gender === 'male').length;
    const femaleUsers = people.filter(person => person.gender === 'female').length;

    return (
        <div className="UserStatistics">
            <h2>User Statistics</h2>
            <p>Total Users: {totalUsers}</p>
            <p>Male Users: {maleUsers}</p>
            <p>Female Users: {femaleUsers}</p>
        </div>
    );
}

export default UserStatistics;