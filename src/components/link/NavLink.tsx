import Link from 'next/link';
import { useMemo } from 'react';

export default function NavLink() {
  return (
    <div className="flex">
      <Link href="/">
        <a className="mr-4">Me</a>
      </Link>
      <Link href="/blog">
        <a className="mr-4">Blog</a>
      </Link>
      <Link href="/project">
        <a className="mr-4">Project</a>
      </Link>
    </div>
  );
}
