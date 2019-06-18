import React from 'react'
import {InfoCard} from "../common/infoCard";
import {Title} from "./title";
import {SectionLine} from "./SectionLine";
import {colors} from "../theme";

const WorkExperienceLayoutStyle = {
    display: 'flex'
}
const WorkExpTilesStyle = {
    paddingLeft: '20px'
};

const borderStyle = {
    borderWidth: '2px 2px',
    width: '9px',
    borderRightStyle: 'solid',
    color: colors.lightBlue,
    flexGrow: 1
};


const WorkExpTileStyle = {
    display: 'flex'
};
const InfoCardTileBoundaryStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '30px'
};

const circle = {
    height: '12px',
    width: '12px',
    borderRadius: '12px',
    borderStyle: 'solid',
    borderColor: colors.lightBlue,
    borderWidth: '4px'
};

export const WorkExperience = ({workExperiences}) => {
    return (
        <div>
            <Title text='WORK EXPERIENCE' fontWeight='700' fontSize='28px' textAlign='left' margin='unset'
                   margin='0 0 4px 50px'/>
            <SectionLine/>
            <div style={WorkExperienceLayoutStyle}>
                <div style={WorkExpTilesStyle}>
                    {workExperiences.map((workExperience, index) =>
                        <div style={WorkExpTileStyle}>
                            <div style={InfoCardTileBoundaryStyle}>
                                <span style={circle}></span>
                                {index != workExperiences.length - 1 && <span style={borderStyle}></span>}
                            </div>
                            <InfoCard key={workExperience.workPeriod.startDate} cardInfo={workExperience} cardTitle='Achievements/Tasks'/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
