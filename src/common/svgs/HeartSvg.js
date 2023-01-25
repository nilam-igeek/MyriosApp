import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeartSvg(props) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
       width={20}
      height={20}
      viewBox="0 0 122.88 107.41"
      xmlSpace="preserve"
      enableBackground="new 0 0 122.88 107.41"
      {...props}
    >
      <Path
        d="M60.83 17.19C68.84 8.84 74.45 1.62 86.79.21c23.17-2.66 44.48 21.06 32.78 44.41-3.33 6.65-10.11 14.56-17.61 22.32-8.23 8.52-17.34 16.87-23.72 23.2l-17.4 17.26-14.38-13.84C29.16 76.9.95 55.93.02 29.95-.63 11.75 13.73.09 30.25.3c14.76.2 20.97 7.54 30.58 16.89z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default HeartSvg
