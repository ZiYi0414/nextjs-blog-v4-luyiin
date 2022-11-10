import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Seo from 'Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle="404" />
      <main>
        <section className="flex justify-center items-center flex-col h-[70vh]">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <div className="typing-demo">There's nothing here.</div>
          <div className="title-404">你在这里想找到什么呢？宝贝</div>
          <Link href={'/'}>
            <a className="text-[#d23669]">Go Back ( )</a>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
