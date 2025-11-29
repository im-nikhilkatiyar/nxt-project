'use client';

import dynamic from 'next/dynamic';

const MyWidget = dynamic(
  () => import('@simplifyingcalculation/sba-504-widget').then(() => {
    // Return a component that renders the web component
    const Widget = () => <sba-504-widget 
      license-key="71292582-1905-0b92a3ef0ff1" 
      styling='{"parent_component":{"background":"transparent"}}'
    />;
    Widget.displayName = 'MyWidget';
    return Widget;
  }),
  { 
    ssr: false,
    loading: () => <div>Loading widget...</div>
  }
);

export default function MyComponent() {
  return <MyWidget />;
}