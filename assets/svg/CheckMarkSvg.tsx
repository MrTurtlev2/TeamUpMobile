import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CheckMarkSvg(props: any) {
    return (
        <Svg
            height="20px"
            viewBox="0 0 512 512"
            width="20px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 512 512"
            {...props}>
            <Path
                fill={'#fff'}
                d="M448 71.9c-17.3-13.4-41.5-9.3-54.1 9.1L214 344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8-15.6 15.5-16.4 41.6-1.7 58.1 0 0 120.4 133.6 137.7 147 17.3 13.4 41.5 9.3 54.1-9.1l206.3-301.7c12.6-18.5 8.7-44.2-8.6-57.5z"
            />
        </Svg>
    );
}

export default CheckMarkSvg;
