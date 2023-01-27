import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProfileSvg(props) {
  return (
      <Svg
      width={45}
      height={45}
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 26.348c8.677 0 16 1.41 16 6.85C32 38.64 24.63 40 16 40c-8.675 0-16-1.41-16-6.85 0-5.442 7.37-6.802 16-6.802zM16 0a10.547 10.547 0 0110.588 10.582c0 5.874-4.71 10.584-10.588 10.584A10.55 10.55 0 015.412 10.582 10.548 10.548 0 0116 0z"
        fill={'#FFF'}
      />
    </Svg>
  )
}

export default ProfileSvg
