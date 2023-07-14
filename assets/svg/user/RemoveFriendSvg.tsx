import * as React from "react"
import Svg, {Path} from "react-native-svg"

function BinSvg(props: any) {
    return (
        <Svg
            height={40}
            width={40}
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            fill="#000000"
        >
            <Path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"/>
            <Path d="M0 0h48v48H0z" fill="none"/>
        </Svg>
    )
}

export default BinSvg