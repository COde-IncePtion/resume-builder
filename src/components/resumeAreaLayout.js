import React from 'react';
import * as Theme from '../theme';
import {ContactDetails} from "./contactDetails";
import {PersonalDetails} from "./personalDetails";

const appStyle = {
    background: Theme.colors.white,
    width: '1224px',
    height: '1500px'
};

const FirstSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '60px 50px'
}

const data = {
    personalDetails: {
        firstName: 'Ashish',
        lastName: 'Rawat'
    },
    contactDetails: {
        email: 'ashishr350@gmail.com',
        phoneNumber: '+91-7767985881',
        linkedIn: 'linkedin.com/in/code-inception',
        github: 'linkedin.com/in/code-inception',
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
        <div style={FirstSectionStyle}>
            <PersonalDetails companyDetails={data.companyDetails} personalDetails={data.personalDetails}/>
            <ContactDetails contactDetails={data.contactDetails}/>
        </div>
    </div>
);


