import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 4rem;
`;

const Header = () => (
  <div className="bar">
    <Logo>
      <Link href="/">
        <a>Planning Poker</a>
      </Link>
    </Logo>
    <Nav />
  </div>
);

export default Header;
