import * as React from 'react';
import Svg, { Ellipse } from 'react-native-svg';
import colors from '../constants/colors';

function CurvedSvg(props: any) {
    return (
        <Svg width={469} height={619} viewBox="0 0 469 619" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Ellipse cx={235} cy={340} rx={477} ry={340} fill={colors.white} />
        </Svg>
    );
}

export default CurvedSvg;
