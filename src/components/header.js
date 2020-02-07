import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"container"}>
      <div className={"top-menu"}>
        <div className={"logo"}>
          <Link to="/" title={"HiStaff"}>
            <img alt={"Logo"} src={logo} />
          </Link>
        </div>
        <div className={"top-menu-links"}>
          <div className={"sign-up"}>
            <a
              href={
                "https://bromel.minhaconta.zoop.com.br/login?redirect=/vendas"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Cadastro
            </a>
          </div>
          <div className={"get-started"}>
            <a href={"/dashboard"} target="_blank" rel="noopener noreferrer">
              Acessar
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
