import React from 'react';
import {fontFamily} from "../theme";

export const Title = ({text, fontSize, textAlign, fontWeight, margin, padding, color, fontStyle}) => {

    const style = {
        fontSize: fontSize,
        textAlign: textAlign,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        margin: margin,
        padding: padding,
        fontStyle: fontStyle,
        color: color ? color : 'black'
    };

    return <p style={style}>{text}</p>;
}
