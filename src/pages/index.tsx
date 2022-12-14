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
      <Seo templateTitle="è¿° & ME" />
      <section className={classNames(isLoaded && 'fade-in-start')}>
        <div className="prose px7 py-10 m-auto" data-fade="1">
          {lang === 'en' ? (
            <div className={classNames('mb-10', styles.prose)}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h1>Luyiin's</h1>
              <article>
                <p>Em, I am Luyiin, Why is Luyiin. Just i want it.</p>
                <p>comp sci. cv engineer & visual design enthusiast..</p>
                <p>Standing on the Shoulders of Giants. Helloï¼Yours World.</p>
                <p>
                  Here is my personal website. I usually record some study notes
                  and share some of my own opinions. Occasionally say strange
                  things..
                </p>
                <p>Do something what i want.. ð¥°</p>
              </article>
            </div>
          ) : (
            <div
              className={classNames('mb-10 mb:text-[10px]', styles.prose_zh)}
            >
              <h1>èºåå­¸èªï¼å­¸æ­¥è¹£è·</h1>
              <article>
                <p>åä¸äºåæ¬¢çäºå§ã</p>
                <p>âââââââââââ</p>
                <p>å¥½ç¦åï¼è¿ä¸ªäººå¥½ç±è£åã</p>
                <p>âââââââââ</p>
                <p>ä»å¤©åå¤±ç äºï¼</p>
                <p>âââââââââ</p>
                <p className="mb:!hidden">ã å°éNFCå¤±çµçé­ ã</p>
                <p className="mb:!hidden">âââââââââââââââââââ</p>
                <p className="mb:!hidden">ã åªè¦ä½ å¼å£ï¼æä»¬å°±è½é£åäºç«¯ ã</p>
                <p className="mb:!hidden">âââââââââââââââââââ</p>
                <p>ä¸ç¥éæ´å¤©å¨æ³äºä»ä¹ã</p>
                <p>âââââââââââ</p>
                <p>æç®ä¸»ä¹ï¼ãã©ã¿ã ãã«ãð¸ã</p>
                <p>âââââââââââ</p>
                <p>ä¸è¼©å­ä¸æ³ç¶ç¨åºåï¼æ³å»å¨ä¸çç»ç»ã</p>
                <p>ââââââââââââââââââââ</p>
              </article>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
