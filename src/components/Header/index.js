import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = () => (
  <div
    style={{
      background: '#000034',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <PageTitle style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          360 PHOTO GALLERY
        </Link>
      </PageTitle>
    </div>
  </div>
)

export default Header


const PageTitle = styled.h1`
  text-align: center;
  font-size: 70px;
`