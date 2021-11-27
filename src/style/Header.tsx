import React from 'react'
import Nav from './Nav'

function Header() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#666',
      }}
    >
      <div>
        <footer
          style={{
            fontSize: 30,
            background: '#666',
            color: '#fff',
            flex: 1,
            marginLeft: 20,
          }}
        >
          miyagin15
        </footer>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  )
}

export default Header
