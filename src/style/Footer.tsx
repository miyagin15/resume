import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { GiVintageRobot } from 'react-icons/gi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Footer() {
  const fontSize = 25
  const padding = 20
  const selectionColor = 'yellow'
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#666',
      }}
    >
      <div>
        <footer style={{ height: 100, background: '#666', color: '#fff' }}>
          <nav
            style={{
              background: '#666',
              margin: 0,
            }}
          >
            <ul
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                listStyle: 'none',
                margin: 0,
              }}
            >
              <li style={{ padding: padding, fontSize: fontSize }}>
                <NavLink
                  to="/"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  Home
                </NavLink>
              </li>
              <li style={{ padding: padding, fontSize: fontSize }}>
                <NavLink
                  to="/about"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  About
                </NavLink>
              </li>
              <li style={{ padding: padding, fontSize: fontSize }}>
                <NavLink
                  to="/works"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  Works
                </NavLink>
              </li>
              <li style={{ padding: padding, fontSize: fontSize }}>
                <NavLink
                  to="/skills"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  Skills
                </NavLink>
              </li>
            </ul>
          </nav>
        </footer>
        <div style={{ textAlign: 'center' }}>
          <p>miyagin15</p>
          <p>Copyright Ginga miyata. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
