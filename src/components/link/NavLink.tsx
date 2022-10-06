import Link from 'next/link';
import { useContext } from 'react';
import { LangContext } from 'context/LangContext';
import classNames from 'classnames';

export default function NavLink() {
  const { lang } = useContext(LangContext);
  return (
    <div className={classNames('flex', lang === 'zh' && 'writeText')}>
      <Link href="/">
        <a className="mr-4">{lang === 'en' ? 'Me' : '述'}</a>
      </Link>
      <Link href="/blog">
        <a className="mr-4">{lang === 'en' ? 'Blog' : '录'}</a>
      </Link>
      <Link href="/project">
        <a className="mr-4">{lang === 'en' ? 'Project' : '集'}</a>
      </Link>
    </div>
  );
}
