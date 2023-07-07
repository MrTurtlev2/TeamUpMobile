import * as React from "react"
import Svg, {Path} from "react-native-svg"

function ProfileSvg(props: any) {
    return (
        <Svg
            width={50}
            height={50}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M28.5 4.75C15.383 4.75 4.75 15.383 4.75 28.5S15.383 52.25 28.5 52.25 52.25 41.617 52.25 28.5 41.617 4.75 28.5 4.75z"
                stroke="#2E34A6"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M10.144 43.572s5.293-6.76 18.356-6.76c13.063 0 18.359 6.76 18.359 6.76M28.5 28.5a7.125 7.125 0 100-14.25 7.125 7.125 0 000 14.25z"
                stroke="#2E34A6"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ProfileSvg
