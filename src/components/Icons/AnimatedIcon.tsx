/*

    *-----------------------------------------------------------------------------------------------------------------------------*
    |                                                                                                                             |
    |   1. This component is using the lordicon library to create animated icons.                                                 |
    |   2. We require some props to use this component                                                                            |
    |       a. colors -> it will be a string which contains primary and secondary to get gradient icon                            |
    |       b. trigger & delay -> it will be a string too. It tells when the animation will begin. We have below given options:   |
    |                   * trigger="hover"                                                                                         |
    |                   * trigger="click"                                                                                         |
    |                   * trigger="morph"                                                                                         |
    |                   * trigger="boomerang"                                                                                     |
    |                   * trigger="loop"            (here delay is always needed to use loop)                                     |
    |                       delay="2000"                                                                                          |
    |                   * trigger="loop-on-hover"   (here delay is always needed to use loop)                                     |
    |                       delay="2000"                                                                                          |
    |       c. colors -> as this is gradient icon component. It will recieve string value which will contain                      |
    |                    primary and secondary color properties. Like: colors = 'primary:#f4dc9c,secondary:#cb5eee'               |
    |       d. style -> it will be an oject type which handle the size of the icon                                                |
    |                                                                                                                             |
    *-----------------------------------------------------------------------------------------------------------------------------*

*/

import React from "react";
import Script from "next/script";

const AnimatedIcon = ({ colors, trigger, delay, style, iconName }: any) => {
  return (
    <>
      {/* Load Lordicon script in Next.js */}
      <Script src="https://cdn.lordicon.com/pzdvqjsp.js" strategy="beforeInteractive" />

      {/* Bypass TypeScript error by asserting as `any` */}
      {React.createElement("lord-icon" as any, {
        src: `https://cdn.lordicon.com/${iconName}.json`,
        trigger,
        delay,
        colors,
        style: style || { width: "50px" },
      })}
    </>
  );
};

export default AnimatedIcon;

