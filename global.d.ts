import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "sba-504-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "license-key": string;
      };
      "lord-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        trigger?: string;
        delay?: string;
        colors?: string;
        style?: React.CSSProperties;
      };
    }
  }
}