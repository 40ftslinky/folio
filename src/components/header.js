
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Headroom from "react-headroom"
// import Img from "gatsby-image"


import DropDownLink from "../components/dropdownlink"
// import Logolink from "../images/logo.svg"


import "./header.css"
import "./navigation.css"


const Header = ({ siteTitle, menuLinks }) => (

<Headroom
    style={{
      zIndex: '9999',
      boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
    }}
>
  <header>
    <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link className="logo_link" to="/" >
              <Logo
                alt={{siteTitle}}
                style={{  }}
              />
              {/*<img
                className="img_logo"
                alt="40ftSlinky"
                src={{Logolink}}
                // src="../images/logo.svg"
                fill="#fff"
              />*/}
            </Link>
          </div>


          <input className="burger-check" id="burger-check" type="checkbox" aria-label="label"></input>
          {/* <!-- hamburger --> */}
          <label className="burger" htmlFor="burger-check">{/* // eslint-disable-line no-console */}
          </label>
          <div id="navigation_id" className="navigation">
              {/* mobile */}
              <ul className="navbar-list-mob ">

              {menuLinks.map(link => (
                <li
                  className="navbar-item"
                  key={link.name}
                >
                  <Link
                    className="menu_item"
                    activeClassName="menu_item--active"
                    to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="navbar-list navbar-item navbar-item_dropdown">

                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  // role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  // aria-expanded="false"
                >
                  Projects
                </a>
                <ul className="dropdown" aria-label="submenu">
                  {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown"> */}
                  <DropDownLink></DropDownLink>
                  {/* </div> */}
                </ul>
              </li>
              </ul>
          </div>


        </div>

      </nav>
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
