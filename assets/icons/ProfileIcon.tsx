import * as React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';

function SvgComponent(props: any) {
    return (
        <Svg viewBox="0 0 32 32" width={40} height={40} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G fill="none" stroke="#fff" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2}>
                <Circle cx={16} cy={16} r={15} />
                <Path d="M26 27h0c0-5.523-4.477-10-10-10h0c-5.523 0-10 4.477-10 10v0" />
                <Circle cx={16} cy={11} r={6} />
            </G>
        </Svg>
    );
}

export default SvgComponent;
