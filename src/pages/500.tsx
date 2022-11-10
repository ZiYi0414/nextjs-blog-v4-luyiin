import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Seo from 'Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle="Bad" />
      <main>
        <section className="flex justify-center items-center flex-col h-[70vh]">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <div className="typing-demo">The server is tired....</div>
          <div className="title-404">服务器好像寄了...</div>
          <Link href={'/'}>
            <a className="text-[#d23669]">Lets Go ( )</a>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
