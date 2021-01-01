import { Box } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navgation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const navItems = [
  { icon: null, title: 'Home', to: '/', exact: true },
  { icon: null, title: 'Users', to: '/users', exact: false },
  { icon: null, title: 'Invoices', to: '/invoices', exact: true },
  { icon: null, title: 'Configs', to: '/configs', exact: true },
  {
    icon: <FontAwesomeIcon icon={faCog} />,
    title: 'Site setting',
    to: '/site-setting',
    exact: true,
  },
]

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <Box component="li" mr="-24px" ml="-24px" lineHeight="40px">
      {children}
    </Box>
  )
}

export function Navgation() {
  return (
    <nav>
      <ul>
        {navItems.map((navItem, index) => (
          <NavItem key={index}>
            <NavLink
              className={styles.link}
              activeClassName={styles.link_active}
              to={navItem.to}
              exact={navItem.exact}
            >
              {navItem.icon ? (
                <div>
                  <Box display="inline-block" pr="6px">
                    {navItem.icon}
                  </Box>
                  <Box display="inline-block">{navItem.title}</Box>
                </div>
              ) : (
                <div>{navItem.title}</div>
              )}
            </NavLink>
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
