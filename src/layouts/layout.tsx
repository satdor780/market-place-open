import { JSX, ReactNode } from 'react';
import { Toaster } from 'sonner';

import { useBreakpoint } from '@/app/hooks/useBreakpoint';
import { AppDownload, Footer, Header, MobileHeader, MobileSearch } from '@/layouts/components';

interface LayoutProps {
  children: ReactNode;
  params: {
    title: string;
    description: string;
  };
}

export default function Layout({ children, params }: LayoutProps): JSX.Element {
  const isMd = useBreakpoint('md', 'down');

  return (
    <>
      <title>{params.title}</title>
      <meta name="description" content={params.description} />

      {isMd && (
        <header>
          <MobileHeader />
        </header>
      )}
      <div className="container">
        {isMd && <AppDownload />}
        {!isMd && (
          <header>
            <Header />
          </header>
        )}

        {isMd && <MobileSearch />}

        <main className="">{children}</main>

        <Toaster />

        <Footer />
      </div>
    </>
  );
}
