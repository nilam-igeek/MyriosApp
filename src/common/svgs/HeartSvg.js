import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeartSvg(props) {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 19.75a.75.75 0 01-.53-.22L4.7 12.74a5 5 0 010-7 4.95 4.95 0 017 0L12 6l.28-.28a4.92 4.92 0 013.51-1.46 4.92 4.92 0 013.51 1.45 5 5 0 010 7l-6.77 6.79a.75.75 0 01-.53.25zm-3.79-14a3.44 3.44 0 00-2.45 1 3.48 3.48 0 000 4.91L12 17.94l6.23-6.26a3.47 3.47 0 00-1.12-5.656 3.4 3.4 0 00-1.32-.254 3.44 3.44 0 00-2.45 1l-.81.81a.77.77 0 01-1.06 0l-.81-.81a3.44 3.44 0 00-2.45-1.02z"
        fill={'black'}
        stroke={'black'}
      />
    </Svg>
  )
}

export default HeartSvg
