import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/something">
      <a>Something</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Nav;
