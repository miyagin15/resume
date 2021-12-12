import React from 'react'
import { NavLink} from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { GiVintageRobot, GiBiceps } from 'react-icons/gi'
import { useMediaQuery } from "react-responsive"

function Nav() {
  const isMobileScreen: boolean = useMediaQuery({ query: '(max-width: 560px)'})
  const fontSize = isMobileScreen ? 10 : 45;
  const padding = 10
  const selectionColor = 'yellow'
  return (
    <nav
      style={{
        background: '#666',
        margin: 0,
        borderBottomWidth: 10,
      }}
    >
      <ul
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          listStyle: 'none',
          margin: 0,
        }}
      >
        <li
          style={{
            padding: padding,
            fontSize: fontSize,
          }}
        >

          <AiOutlineHome />

          <NavLink
            to="/"
            exact
            style={{ color: '#fff', textDecoration: 'none' }}
            activeStyle={{ color: selectionColor }}
          >
            Home
          </NavLink>
        </li>
        <li style={{ padding: padding, fontSize: fontSize }}>
          <GiVintageRobot />

          <NavLink
            to="/works"
            style={{ color: '#fff', textDecoration: 'none' }}
            activeStyle={{ color: selectionColor }}
          >
            Works
          </NavLink>
        </li>
        <li style={{ padding: padding, fontSize: fontSize }}>
          <GiBiceps />
          <NavLink
            to="/skills"
            style={{ color: '#fff', textDecoration: 'none' }}
            activeStyle={{ color: selectionColor }}
          >
            Skills
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
