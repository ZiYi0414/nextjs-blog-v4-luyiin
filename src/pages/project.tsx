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
  const project = [
    {
      title: 'A 3D Character Powerby Lingo3D',
      icon: (
        <span
          className="iconfont icon-Dmoxingx font-bold mr-4"
          style={{ fontSize: 38 }}
        ></span>
      ),
      desc: '随便玩玩，一个自己的3D形象.',
      tag: ['React', 'Lingo3D', 'Blender'],
      github: '',
      url: 'https://mine.nopatience.cn/'
    },
    {
      title: '八卦',
      desc: '想做，就做了。',
      icon: (
        <span
          className="iconfont icon-bagua font-bold mr-4"
          style={{ fontSize: 38 }}
        ></span>
      ),
      tag: ['CSS', '周易'],
      github: '',
      url: ''
    },
    {
      title: 'Handsome-CSS3-lib',
      desc: 'Building....',
      icon: (
        <span
          className="iconfont icon-css3 font-bold mr-4"
          style={{ fontSize: 38 }}
        ></span>
      ),
      tag: ['React', 'CSS', 'Ctrl + CV'],
      github: '',
      url: ''
    }
  ];
  return (
    <Layout>
      <Seo
        templateTitle="集 & Project"
        description="Thoughts, mental models, and tutorials about front-end development. Rebuild your mental model so front-end development can be predictable."
      />
      <main>
        <section
          className={classNames(
            isLoaded && 'fade-in-start m-auto',
            styles.wrapper
          )}
        >
          <div className={classNames(styles.title, 'my-4')} data-fade="1">
            <div className="text-[2rem] mb:text-[1.5rem]">
              一些不怎么样的 <span className="text-[#d23669]">臆想</span>？
            </div>
            <p className="italic text-gray-600">
              I wish the world would be peaceful.
            </p>
          </div>
          <ul className="flex flex-wrap" data-fade="2">
            {project.map((e, idx) => (
              <li className={styles.box} key={e.title + idx}>
                <UnstyledLink href={e?.url}>
                  <div className="flex items-center">
                    {e?.icon}
                    <div>
                      <span className="truncate-one">{e?.title}</span>
                      <small>{e?.desc}</small>
                      <div className="flex mt-1">
                        {e.tag.map((tag, index) => (
                          <span
                            className="text-xs border border-current rounded px-1 pb-0.2 mr-2 "
                            key={tag + index}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default Project;
