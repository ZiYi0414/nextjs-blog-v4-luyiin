import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import useLoaded from '@/hooks/useLoaded';
import classNames from 'classnames';
import { LangContext } from 'context/LangContext';
import { useContext } from 'react';

const Home: NextPage = () => {
  const isLoaded = useLoaded();
  const { lang } = useContext<any>(LangContext);

  return (
    <Layout>
      <Seo templateTitle="ME" />
      <section className={classNames(isLoaded && 'fade-in-start')}>
        <div className="prose px7 py-10 m-auto" data-fade="1">
          {lang === 'en' ? (
            <div className={classNames('mb-10', styles.prose)}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h1>Luyiin's</h1>
              <article>
                <p>Em, I am Luyiin, Why is Luyiin. Just i want it.</p>
                <p>comp sci. cv engineer & visual design enthusiast..</p>
                <p>Standing on the Shoulders of Giants. Hello，Yours World.</p>
                <p>
                  Here is my personal website. I usually record some study notes
                  and share some of my own opinions. Occasionally say strange
                  things..
                </p>
                <p>Do something what i want.. 🥰</p>
              </article>
            </div>
          ) : (
            <div className={classNames('mb-10', styles.prose_zh)}>
              <h1>艺呀學語，學步蹣跚</h1>
              <article>
                <p>做一些喜欢的事吧。</p>
                <p>———————————</p>
                <p>好烦啊，这个人好爱装啊。</p>
                <p>—————————</p>
                <p>今天又失眠了？</p>
                <p>—————————</p>
                <p>「 地铁NFC失灵狂魔 」</p>
                <p>———————————————————</p>
                <p>「 只要你开口，我们就能飞向云端 」</p>
                <p>———————————————————</p>
                <p>不知道整天在想些什么。</p>
                <p>———————————</p>
                <p>极简主义，《ラタムニカ》🌸。</p>
                <p>———————————</p>
                <p>下輩子不想當程序员，想去全世界画画。</p>
                <p>————————————————————</p>
              </article>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
