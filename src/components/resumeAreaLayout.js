import React from 'react';
import * as Theme from '../theme';
import {ContactDetails} from "./contactDetails";
import {PersonalDetails} from "./personalDetails";
import {Title} from "./title";
import {InfoCard} from "../common/infoCard";

const appStyle = {
    background: Theme.colors.white,
    width: '1224px',
    height: '1500px',
    padding: '50px 30px'
};

const FirstSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '20px',
    marginBottom: '20px'
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
    aim: 'To continue my career with an organisation that will utilize my TECHNICAL and INTELLECTUAL ability for bilateral growth.',
    technicalSkills: ['Java', 'C++', 'Python', 'ReactJs', 'Redux', 'Springboot', 'BootStrap', 'JavaScript', 'Asp.NET', 'Elastic Search'],
    workExperience: [
        {
            companyName: 'ThoughtWorks Technologies India Private Limited',
            role: 'Application Developer',
            workPeriod: {
                startDate: '01/2017',
                endDate: '02/2017'
            },
            location: 'Pune, India',
            tasks: ['Worked on developing web app for a big UK firm which dealt with financial data and information providing.',
                'The platform was developed to connect giant investors and fund managers.',
                'Worked in a team driven by Agile practises.',
                'Practised TDD and pair programming.',
            ]
        }
        , {}
    ]
};


export const ResumeAreaLayout = () => (
    <div style={appStyle}>
        <div style={FirstSectionStyle}>
            <PersonalDetails companyDetails={data.companyDetails} personalDetails={data.personalDetails}/>
            <ContactDetails contactDetails={data.contactDetails}/>
        </div>
        <Title text={data.aim} fontSize='18px' textAlign='left'/>
        <Skills skills={data.technicalSkills}/>
    </div>
);


