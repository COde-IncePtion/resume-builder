import React from 'react';
import {fontFamily} from "../theme";

export const Title = ({text, fontSize, textAlign, fontWeight, margin}) => {
    const style = {
        fontSize: fontSize,
        textAlign: textAlign,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        margin: margin
    };
    return <p style={style}>{text}</p>;
}
