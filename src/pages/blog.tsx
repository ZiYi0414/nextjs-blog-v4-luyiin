import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import { getAllFilesFrontmatter } from '@/lib/mdx';
import { sortByDate } from '@/lib/mdx-client';
import { dateToChinese } from '@/lib/dateToChinese';
import useLoaded from '@/hooks/useLoaded';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import classNames from 'classnames';
import styles from '../styles/Blog.module.scss';
import UnstyledLink from 'link/UnstyledLink';

export default function IndexPage({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isLoaded = useLoaded();

  const getYear = (a: Date | string | number) => new Date(a).getFullYear();

  const isSameYear = (a: Date | string | number, b: Date | string | number) =>
    a && b && getYear(a) === getYear(b);

  return (
    <Layout>
      <Seo
        templateTitle="录 & Blog"
        description="Thoughts, mental models, and tutorials about front-end development. Rebuild your mental model so front-end development can be predictable."
      />
      <main>
        <section
          className={classNames(isLoaded && 'fade-in-start prose m-auto')}
        >
          <ul className="grid gap-6 " data-fade="1">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <li key={post.slug}>
                  {!isSameYear(
                    post.publishedAt,
                    posts[index - 1]?.publishedAt
                  ) && (
                    <span
                      className={styles.title}
                      data-date={getYear(post.publishedAt)}
                    ></span>
                  )}
                  <UnstyledLink
                    className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
                    href={`/blog/${post.slug}`}
                  >
                    <div className={styles.blog_card}>
                      <h2>{post.title}</h2>
                      <small>{post.description}</small>
                      <span>
                        <div className="mt-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-1">
                            <span>{dateToChinese(post.publishedAt)}</span>
                            <span className="ml-4">
                              ☕️ {post.readingTime.text}
                            </span>
                            <span className="text-xs border border-current rounded px-1 pb-0.2 ml-2 md:ml--10.5 mr2">
                              {post.tags}
                            </span>
                          </div>
                        </div>
                      </span>
                    </div>
                  </UnstyledLink>
                </li>
              ))
            ) : (
              <>123</>
            )}
          </ul>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = await getAllFilesFrontmatter('blog');
  const posts = sortByDate(files);

  return { props: { posts } };
}
