import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';
import useLoaded from '@/hooks/useLoaded';

import { getFileBySlug, getFiles } from '@/lib/mdx';

import MDXComponents from '@/components/content/MDXComponents';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { BlogFrontmatter, BlogType } from '@/types/frontmatters';
import { dateToChinese } from 'lib/dateToChinese';
import classNames from 'classnames';

type SingleBlogPageProps = {
  recommendations: BlogFrontmatter[];
} & BlogType;

export default function SingleBlogPage({
  code,
  frontmatter
}: SingleBlogPageProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
        isBlog
        date={new Date(
          frontmatter.lastUpdated ?? frontmatter.publishedAt
        ).toISOString()}
      />

      <main>
        <section
          className={classNames(isLoaded && 'fade-in-start prose m-auto')}
        >
          <div className="pt-8" data-fade="1">
            <section className="article">
              <article className="mdx prose mx-auto mt-4 w-full ">
                <span className="mt-0 block   pb-[0.2em] text-3xl font-normal leading-normal text-[#1f2d3d] dark:border-b-gray-600	dark:text-[#fff]	dark:opacity-90">
                  {frontmatter.title}
                </span>
                <div className="border-b-[1px] border-solid border-b-[#eee] my-4 flex justify-between">
                  <span>记录于 {dateToChinese(frontmatter.publishedAt)}</span>
                  <span>{frontmatter.readingTime.text}</span>
                </div>
                <Component
                  components={
                    {
                      ...MDXComponents
                    } as any
                  }
                />
              </article>
            </section>
          </div>
          {frontmatter.lastUpdated && (
            <div className="my-10 flex justify-end">
              最后一次修改于 {frontmatter.lastUpdated} .
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('blog');

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug('blog', params?.slug as string);
  return {
    props: { ...post }
  };
};
