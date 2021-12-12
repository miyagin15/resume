import React from 'react'
import { NavLink } from 'react-router-dom'

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
        <footer style={{ height: 50, background: '#666', color: '#fff' }}>
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
                  exact
                  style={{ color: '#fff', textDecoration: 'none' }}
                  activeStyle={{ color: selectionColor }}
                >
                  Home
                </NavLink>
              </li>
              <li style={{ padding: padding, fontSize: fontSize }}>
                <NavLink
                  to="/works"
                  style={{ color: '#fff', textDecoration: 'none' }}
                  activeStyle={{ color: selectionColor }}
                >
                  Works
                </NavLink>
              </li>
              <li style={{ padding: padding, fontSize: fontSize }}>
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
