import IconGroup from 'link/IconGroup';
import NavLink from 'link/NavLink';
import { useMemo } from 'react';

export default function Header() {
  return (
    <header>
      <section className="layout">
        <div className="mx-8 flex h-[60px] items-center justify-between leading-[60px] mb:mx-4">
          <NavLink />
          <IconGroup />
        </div>
      </section>
    </header>
  );
}
