import React from 'react';
import * as Theme from '../theme';

const appStyle = {
    background: Theme.colors.white,
    width: '1224px',
    height: '1500px'
}

const data = {
    firstName: 'Ashish',
    lastName: 'Rawat',
    contactDetails: {
        email: 'ashishr350@gmail.com',
        phoneNumber: '+91-77679-85881',
        linkedIn: 'https://www.linkedin.com/in/code-inception/',
        github: 'https://www.linkedin.com/in/code-inception/',
        location: 'Pune, India'
    },
    companyDetails: {
        name: 'ThoughtWorks Technologies',
        role: 'Application Developer'
    },
    aim: 'To continue my career with an organisation that will utilize my TECHNICAL and INTELLECTUAL ability for bilateral growth.'
};


export const ResumeAreaLayout = () => (
    <div style={appStyle}>
        <h1>Resume Area Layout</h1>
    </div>
);


