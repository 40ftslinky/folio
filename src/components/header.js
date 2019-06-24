import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Headroom from "react-headroom"

import "./header.css"


const Header = ({ siteTitle }) => (
<Headroom

    style={{
      zIndex: '9999',
      boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
    }}
>
  <header
    style={{
      background: `#363636`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200
      }}
    >
        <Link
          to="/"
          style={{
            color: `#50e3c2`,
            textDecoration: `none`,
          }}
        >
        <Logo
            alt={{siteTitle}}
          style={{  }}
        />
        </Link>
    </div>
    <div
      style={{
        position:`absolute`,
        right: `20%`,
        bottom: `1.45em`
      }}
    >
    <Link
      to="/about"
      style={{
        color: `#50e3c2`,
        textDecoration: `none`,
      }}
    >
    About
    </Link>
    </div>
  </header>
</Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
