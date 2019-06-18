import React from 'react';
import {Title} from "../components/title";
import {colors} from "../theme";

const InfoCardStyle = {
    lineHeight: '22px',
    marginBottom: '30px'
};

const LocationWorkPeriodStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 4px',
    margin: '5px 0'
};

const TaskDisplaySectionStyle = {
    padding: '0 10px',
    paddingBottom: '10px'
};

const TaskTileStyle = {
    display: 'flex',
    alignItems: 'baseline'
}

const DashIconStyle = {
    color: colors.lightBlue,
    fontSize: '20px'
};

const RightBorderStyle = {
    borderWidth: '2px 2px',
    width: '12px',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    color: colors.lightBlue,
    marginTop: '11px'
};

const LeftBorderStyle = {
    borderWidth: '2px 2px',
    width: '12px',
    borderTopStyle: 'solid',
    borderLeftStyle: 'solid',
    borderBottomStyle: 'solid',
    color: colors.lightBlue,
    marginTop: '11px'
};

const TaskSectionStyle = {
    display: 'flex',
}

export const InfoCard = ({cardInfo, cardTitle}) => {
    return (
        <div style={InfoCardStyle}>
            <Title text={cardInfo.role} fontSize='24px' fontWeight='700' padding='0 0 4px 0' margin='unset'
                   textAlign='left'/>
            <Title text={cardInfo.companyName} fontSize='24px' fontWeight='400' padding='4px 0' margin='unset'
                   textAlign='left'/>
            <div style={LocationWorkPeriodStyle}>
                <Title text={`${cardInfo.workPeriod.startDate} - ${cardInfo.workPeriod.endDate}`} fontSize='16px'
                       color={colors.lightBlue} fontStyle='italic' margin='unset'/>
                <Title text={cardInfo.location} color={colors.lightBlue} fontSize='16px' fontStyle='italic'
                       margin='unset'/>
            </div>
            <div style={TaskSectionStyle}>
                <div style={LeftBorderStyle}></div>
                <div style={TaskDisplaySectionStyle}>
                    <Title text={cardTitle} color={colors.lightBlue} fontSize='16px' fontStyle='italic'
                           margin='unset' textAlign='left'/>
                    {cardInfo.tasks.map(task =>
                        <div style={TaskTileStyle} key={task}>
                            <i className="material-icons" style={DashIconStyle}>minimize</i>
                            <Title key={task} text={task} textAlign='left' fontSize='18px' margin='unset'/>
                        </div>)
                    }
                </div>
                <div style={RightBorderStyle}></div>
            </div>

        </div>
    );
}
