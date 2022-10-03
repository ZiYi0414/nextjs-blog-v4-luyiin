import * as React from 'react';

import Layout from '@/components/layout/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <main>
        <section className="bg-white">
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
            <h1 className="md:text-6xl mt-8 text-4xl">Page Not Found</h1>
            Back to Home
          </div>
        </section>
      </main>
    </Layout>
  );
}
