import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from '@/providers';

const queryClient = new QueryClient();

const ProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export { ProvidersWrapper };
