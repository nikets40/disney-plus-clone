import styled from "styled-components";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <Nav>
      <Logo src="/images/logo.svg" onClick={() => {router.push("/")}} />
      <NavMenu>
        <a>
          <img alt="" src="/images/home-icon.svg" />
          <span>Home</span>
        </a>

        <a>
          <img alt="" src="/images/search-icon.svg" />
          <span>Search</span>
        </a>

        <a>
          <img alt="" src="/images/watchlist-icon.svg" />
          <span>Watchlist</span>
        </a>

        <a>
          <img alt="" src="/images/original-icon.svg" />
          <span>Originals</span>
        </a>

        <a>
          <img alt="" src="/images/movie-icon.svg" />
          <span>Movies</span>
        </a>

        <a>
          <img alt="" src="/images/series-icon.svg" />
          <span>Series</span>
        </a>
      </NavMenu>

      <USerImage src="https://source.unsplash.com/random/60x60" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
  cursor: pointer;
  transition: all 150ms;

  &:active {
    transform: scale(90%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      margin: 0 5px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`;

const USerImage = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  border: 2px solid white;
  cursor: pointer;
`;
