import { useContext, useMemo } from 'react';
import UnstyledLink from './UnstyledLink';
import { useTheme } from 'next-themes';
import classNames from 'classnames';
import { LangContext, UPDATE_LANG } from 'context/LangContext';

export default function IconGroup() {
  const { theme, setTheme } = useTheme();
  const { lang, dispatch } = useContext<any>(LangContext);
  const handleChangeLang = () => {
    dispatch({ type: UPDATE_LANG, lang: lang === 'en' ? 'zh' : 'en' });
  };
  return (
    <div>
      <div className="mx-8 flex h-[60px] items-center justify-between leading-[60px] mb:mx-0">
        <span
          onClick={handleChangeLang}
          className="iconfont icon-zhongyingwen cursor-pointer mr-4"
        ></span>
        <span
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={classNames(
            'iconfont mr-4 cursor-pointer',
            theme === 'dark' ? 'icon-moon' : 'icon-sun'
          )}
        />
        <UnstyledLink href="https://github.com/ZiYi0414">
          <span className="iconfont icon-github mr-4 cursor-pointer" />
        </UnstyledLink>
        <span className="iconfont icon-rss cursor-pointer" />
      </div>
    </div>
  );
}
