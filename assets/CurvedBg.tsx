import * as React from "react"
import Svg, {Ellipse} from "react-native-svg"

function CurvedSvg(props: any) {
    return (
        <Svg
            width={469}
            height={619}
            viewBox="0 0 469 619"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Ellipse cx={235} cy={340} rx={477} ry={340} fill="#D7D9D8"/>
        </Svg>
    )
}

export default CurvedSvg