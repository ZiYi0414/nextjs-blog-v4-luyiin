import { useMemo } from 'react';

export default function IconGroup() {
  return (
    <header>
      <section className="layout">
        <div className="mx-8 flex h-[60px] items-center justify-between leading-[60px]">
            <span className='iconfont icon-sun mr-4'/>
            <span className='iconfont icon-github mr-4'/>
            <span className='iconfont icon-rss'/>
        </div>
      </section>
    </header>
  );
}