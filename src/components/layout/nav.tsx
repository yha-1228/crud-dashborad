import { css } from '@emotion/react';
import { faHome, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    title: 'Home',
    to: '/',
  },
  {
    icon: <FontAwesomeIcon icon={faList} />,
    title: 'Users',
    to: '/users',
  },
  {
    icon: <FontAwesomeIcon icon={faList} />,
    title: 'Page01',
    to: '/page01',
  },
  {
    icon: <FontAwesomeIcon icon={faList} />,
    title: 'Page02',
    to: '/page02',
  },
  {
    icon: <FontAwesomeIcon icon={faList} />,
    title: 'Page03',
    to: '/page03',
  },
];

const MARKER_WIDTH = 2;
const MARKER_COLOR: React.CSSProperties['color'] = 'white';

const navLinkStyle = css({
  display: 'block',
  paddingLeft: 24 - MARKER_WIDTH,
  color: 'white',
  textDecoration: 'none',
  borderLeft: `${MARKER_WIDTH}px solid transparent`,
  '&:hover': {
    marginRight: -10,
    backgroundColor: 'var(--color-primary-dark)',
  },
});

const activeNavLinkStyle = css(navLinkStyle, {
  fontWeight: 'bold',
  borderLeft: `${MARKER_WIDTH}px solid ${MARKER_COLOR}`,
  '&:hover': {
    backgroundColor: 'var(--color-primary-dark)',
  },
});

export function Nav() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <li
            css={css({
              marginLeft: -24,
              marginRight: -24,
              lineHeight: '40px',
            })}
            key={navItem.title}
          >
            <Link
              to={navItem.to}
              css={
                navItem.to === location.pathname
                  ? activeNavLinkStyle
                  : navLinkStyle
              }
            >
              <div css={css({ display: 'inline-block', width: 32 })}>
                {navItem.icon}
              </div>
              <div css={css({ display: 'inline-block' })}>{navItem.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
