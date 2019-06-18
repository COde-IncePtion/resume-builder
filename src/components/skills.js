import React from 'react';
import {SkillCell} from "./skillCell";
import {Title} from "./title";
import {colors} from "../theme";


function generateSkillCells(skill) {
    return <SkillCell key={skill} skillName={skill}/>
}

const SkillCellsLayoutStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px 42px',
    marginTop: '5px',
    borderTop: `2px solid ${colors.lightBlue}`
};

const SkillSectionLayout = {
    width: '500px'
}

export const Skills = ({skills}) => {
    return (
        <div style={SkillSectionLayout}>
            <Title text='SKILLS' fontWeight='700' fontSize='28px' textAlign='left' margin='0px 50px' />
            <div style={SkillCellsLayoutStyle}>
                {skills.map(skill => generateSkillCells(skill))}
            </div>
        </div>
    );
};
