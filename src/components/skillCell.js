import React from 'react';
import {colors, fontFamily} from '../theme';

const SkillCellStyle = {
    borderStyle: 'solid',
    borderRadius: '8px',
    borderColor: colors.lightBlue,
    color: 'white',
    backgroundColor: colors.lightBlue,
    fontFamily: fontFamily,
    fontWeight: 700,
    fontSize:'18px',
    padding: '6px 14px',
    margin: '8px 6px'
};

export const SkillCell = ({skillName}) => {
    return (
        <span style={SkillCellStyle}>{skillName}</span>
    );
};
