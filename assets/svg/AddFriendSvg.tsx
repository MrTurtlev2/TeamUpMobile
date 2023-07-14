import * as React from "react"
import Svg, {Circle, G, Path} from "react-native-svg"

function AddFriendSvg(props: any) {
    return (
        <Svg
            height={60}
            width={60}
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            fill="#000000"
        >
            <G
                fill="#000"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={10}
            >
                <Path d="M342.4 213.4L342.4 267.9"/>
                <Path d="M369.6 240.6L315.2 240.6"/>
                <Circle cx={256} cy={213.4} r={34.5}/>
                <Path d="M318.4 331.7c0-34.5-27.9-62.4-62.4-62.4s-62.4 27.9-62.4 62.4h124.8z"/>
            </G>
        </Svg>
    )
}

export default AddFriendSvg
