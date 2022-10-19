import type { NextPage } from 'next';
import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import classNames from 'classnames';
import styles from '../styles/Project.module.scss';
import UnstyledLink from 'link/UnstyledLink';
import useLoaded from 'hooks/useLoaded';

const Project: NextPage = () => {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <Seo
        templateTitle="集 & Project"
        description="Thoughts, mental models, and tutorials about front-end development. Rebuild your mental model so front-end development can be predictable."
      />
      <main>
        <section
          className={classNames(isLoaded && 'fade-in-start m-auto', styles.wrapper)}
        >
          <ul className="flex" data-fade="1">
            <li className={styles.box}>
              <div>
                <span
                  className="iconfont icon-Dmoxingx font-bold"
                  style={{ fontSize: 38 }}
                ></span>
              </div>
            </li>
            <li className={styles.box}>
              <div>
                <span
                  className="iconfont icon-Dmoxingx font-bold"
                  style={{ fontSize: 38 }}
                ></span>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default Project;
