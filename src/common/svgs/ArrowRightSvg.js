import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRightSvg(props) {
  return (
    <Svg
      width={19}
      height={13}
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.406.29l5.257 5.212.044.04c.175.175.278.405.293.677v.091a.99.99 0 01-.258.606l-.061.063-5.275 5.23c-.39.388-1.02.388-1.41 0a.993.993 0 010-1.41l3.641-3.612H1c-.551 0-1-.444-1-.995 0-.551.449-.996 1-.996h14.52L11.995 1.7a.993.993 0 010-1.41 1.003 1.003 0 011.411 0z"
        fill="#000"
      />
    </Svg>
  )
}

export default ArrowRightSvg
