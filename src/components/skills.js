import React from 'react';
import {Cell} from "../common/cell";
import {Title} from "./title";
import {SectionLine} from "./SectionLine";


function generateSkillCells(skill) {
    return <Cell key={skill} skillName={skill}/>
}

const SkillCellsLayoutStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px 42px',
};

export const Skills = ({skills}) => {
    return (
        <div>
            <Title text='SKILLS' fontWeight='700' fontSize='28px' textAlign='left' margin='0 0 4px 50px'/>
            <SectionLine/>
            <div style={SkillCellsLayoutStyle}>
                {skills.map(skill => generateSkillCells(skill))}
            </div>
        </div>
    );
};
