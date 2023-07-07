import * as React from "react"
import Svg, {ClipPath, Defs, G, Path} from "react-native-svg"

function ClockSvg(props: any) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_56_361)">
                <Path
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 4a1 1 0 00-1 1v5a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L13 11.586V7a1 1 0 00-1-1z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_56_361">
                    <Path fill="#fff" d="M0 0H24V24H0z"/>
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default ClockSvg
