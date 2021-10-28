import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function ArrowIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 12.909v-1a.5.5 0 01.5-.5h16.17l-4.45-4.44a.5.5 0 010-.71l.71-.7a.5.5 0 01.71 0l6.14 6.13c.14.14.22.331.22.53v.38a.77.77 0 01-.22.53l-6.14 6.13a.5.5 0 01-.71 0l-.71-.71a.49.49 0 010-.7l4.45-4.44H2.5a.5.5 0 01-.5-.5z"
        fill="#2934D0"
      />
    </Svg>
  );
}

export function ChevronIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 8l4 4-4 4"
        stroke="#2934D0"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
