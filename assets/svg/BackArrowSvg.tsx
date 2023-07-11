import * as React from "react"
import Svg, {Path} from "react-native-svg"

function BackArrowSvg(props: any) {
    return (
        <Svg
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 512 512"
            {...props}
            width={40}
            height={40}
            fill={'#fff'}
        >
            <Path
                d="M297.2 478l20.7-21.6L108.7 256 317.9 55.6 297.2 34 65.5 256l231.7 222zM194.1 256L425.8 34l20.7 21.6L237.3 256l209.2 200.4-20.7 21.6-231.7-222z"/>
        </Svg>
    )
}

export default BackArrowSvg
