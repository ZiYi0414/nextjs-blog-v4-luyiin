import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import useLoaded from '@/hooks/useLoaded';
import classNames from 'classnames';

const Home: NextPage = () => {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle="ME"
      />
      <section className={classNames(isLoaded && 'fade-in-start')}>
        <div className="prose px7 py-10 m-auto" data-fade="1">
          <div className={classNames('mb-10', styles.prose)}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>Luyiin' s ❤️</h1>
            <article>
              <p>Em, I am Luyiin, Why is Luyiin. Just i want it.</p>
              <p>comp sci. cv engineer & visual design enthusiast..</p>
              <p>Standing on the Shoulders of Giants. Hello，Yours World.</p>
              <p>
                Here is my personal website. I usually record some study notes
                and share some of my own opinions. Occasionally say strange
                things..
              </p>
              <hr />
              <p>
                不知道整天在想些什么, 「 地铁NFC失灵狂魔 」 「 Love Hooks 」 「
                只要你开口, 我们就能飞向云端 」
              </p>
              <p>极简设计主义，《ラタムニカ》🌸</p>
              <p>下辈子不想当程序员，想去全世界画画。</p>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
