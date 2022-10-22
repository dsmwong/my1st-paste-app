import type {AppProps, NextWebVitalsMetric} from 'next/app';
import {Theme} from '@twilio-paste/core/theme';

// Disable SSR
function SafeHydrate({ children }: { children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    
      <Theme.Provider theme="default">
        <SafeHydrate><Component {...pageProps} /></SafeHydrate>
      </Theme.Provider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log(metric);
}

export default MyApp;
