import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLeftSvg(props) {
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
        d="M5.594.29L.337 5.502l-.044.04A1.007 1.007 0 000 6.22v.091a.99.99 0 00.258.606l.061.063 5.275 5.23c.39.388 1.02.388 1.41 0a.993.993 0 000-1.41L3.364 7.187H18c.552 0 1-.444 1-.995a.998.998 0 00-1-.996H3.48L7.005 1.7a.993.993 0 000-1.41 1.003 1.003 0 00-1.411 0z"
        fill="#000"
      />
    </Svg>
  )
}

export default ArrowLeftSvg
