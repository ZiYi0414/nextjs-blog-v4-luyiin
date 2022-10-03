import * as React from 'react';
import Footer from '@/components/layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="layout">
        <div className="mx-8 mb:mx-4">{children}</div>
      </div>
      <Footer />
    </>
  );
}
