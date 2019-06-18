import React from 'react';
import * as Theme from '../theme';
import {Title} from "./title";

const PersonalDetailsLayout = {
    display: 'flex',
    fontFamily: Theme.fontFamily,
};

const displayPicStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '200px',
    borderStyle: 'solid',
    borderColor: '#C0C0C0',
    marginRight: '50px'
};

const ProfileNameStyle = {
    fontWeight: 700,
    fontSize: '20px',
    margin: 'unset',
    color: Theme.colors.lightBlue,
    textAlign: 'left',
    marginLeft: '4px'
};


export const PersonalDetails = ({personalDetails, companyDetails}) => {
    return (
        <div style={PersonalDetailsLayout}>
            <img style={displayPicStyle} src={require('../static/displayPic.jpg')}/>
            <div>
                <Title text={`${personalDetails.firstName} ${personalDetails.lastName}`} fontSize='44px'
                       fontWeight='900' margin='unset'/>
                <p style={ProfileNameStyle}>{companyDetails.role}</p>
            </div>
        </div>
    )
};
