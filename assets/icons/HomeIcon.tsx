import * as React from "react"
import Svg, {Path} from "react-native-svg"

function HomeIcon(props: any) {
    return (
        <Svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props} width={40}
             height={40}>
            <Path fill="none" d="M0 0H256V256H0z"/>
            <Path
                d="M213.4 109.6l-80-72.7a8 8 0 00-10.8 0l-80 72.7a8.3 8.3 0 00-2.6 5.9V208a8 8 0 008 8h160a8 8 0 008-8v-92.5a8.3 8.3 0 00-2.6-5.9z"
                fill="none"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={16}
            />
        </Svg>
    )
}

export default HomeIcon