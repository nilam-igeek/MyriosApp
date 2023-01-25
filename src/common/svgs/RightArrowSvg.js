import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightArrowSvg(props) {
  return (
    <Svg
     width={20}
      height={20}
      viewBox="0 -6.5 38 38"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M187.812 38.58l10.513 10.424.088.082c.352.349.557.809.587 1.352l-.002.183c-.025.43-.19.842-.514 1.21l-.123.127-10.549 10.462a2.005 2.005 0 01-2.822 0 1.985 1.985 0 010-2.822l7.284-7.224H163c-1.102 0-1.999-.889-1.999-1.99 0-1.102.897-1.992 2-1.992h29.04l-7.05-6.99a1.985 1.985 0 010-2.822 2.005 2.005 0 012.822 0z"
        transform="translate(-1511 -158) translate(1350 120)"
        fill={props.fill}
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
      />
    </Svg>
  )
}

export default RightArrowSvg
